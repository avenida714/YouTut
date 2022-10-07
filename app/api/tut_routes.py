from datetime import datetime
from flask import Blueprint, request, jsonify
from app.forms.tut_form import TutForm
from app.forms.comment_form import CommentForm
from app.models import db
from ..models.tut import Tut
from ..models.user import User
from ..models.comment import Comment
from flask_login import current_user, login_required
from app.api.aws  import (
    upload_file_to_s3, allowed_file, get_unique_filename)

tut_routes = Blueprint("tuts", __name__)


#Get ALL Tuts
@tut_routes.route("/all")
@login_required
def get_all_tuts():
    if current_user:
        all_tuts = Tut.query.order_by(Tut.created_at.desc()).all()
        all_tuts_json = [tut.to_dict() for tut in all_tuts]
        return {"tuts": all_tuts_json}
    else:
        return {'message': 'Unauthorized user', "statusCode": 403}, 403  # put second 403 to flask will read it as error

#Get ONE TUT
@tut_routes.route('/<int:id>')
@login_required
def get_one_tut(id):
    # print("~~~MADE IT HERE ~~~~")
    one_tut_by_id = Tut.query.get(id)
    one_tut_by_id_json = one_tut_by_id.to_dict()
    return {"tuts": one_tut_by_id_json}


#Get All tuts of One User by User Id
@tut_routes.route('/user/<int:id>')
@login_required
def get_tuts_by_id(id):
    # print("~~~MADE IT HERE ~~~~")
    all_tuts_by_id = Tut.query.filter(Tut.user_id == id).order_by(Tut.created_at.desc()).all()
    all_tuts_by_id_json = [tut.to_dict() for tut in all_tuts_by_id]
    return {"tuts": all_tuts_by_id_json}



# ADDING A TUT
@tut_routes.route("/", methods=["POST"])
@login_required
def add_tut():
    form = TutForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_tut = Tut(
            tut_title = form.data["tut_title"],
            tut_video = form.data["tut_video"],
            tut_description = form.data["description"],
            thumbnail_pic = form.data["thumbnail_pic"],
            user_id = current_user.id,
            updated_at = datetime.now()

        )

        db.session.add(new_tut)
        db.session.commit()

        new_tut = new_tut.to_dict()
        new_tut['tut_owner'] = User.query.get(new_tut['user_id']).to_dict()

        return new_tut

    else:
        return jsonify(form.errors)


#UPLOAD TUT TO AWS
@tut_routes.route('/upload-tut', methods=["POST"])
def upload_tut():
    # print("this is the request.files ***************", request.files) # ImmutableMultiDict([('tut_video', <FileStorage: 'test-vid6.mp4' ('video/mp4')>), ('thumbnail_pic', <FileStorage: 'what-is-short-circuiting.png' ('image/png')>)])
    # print("this is the request.form ***************~~~~~~~", request.form) #ImmutableMultiDict([('tut_title', 'test again'), ('tut_description', 'asdf')])


    if "tut_video" not in request.files:
        return {"errors": "Video File Required"}, 400

    tut_video = request.files["tut_video"]  # this name is what needs to match from the component in the frontend  AWS-todo
    #from flask api : Each key in files is the name from the <input type="file" name="">. Each value in files is a Werkzeug FileStorage object.

    if not allowed_file(tut_video.filename):
        return {"errors": "This file type is not permitted (MP4 works best for videos; use jpeg, pdf, jpg, or gif for images, use mp4 for videos)."}, 400

    tut_video.filename = get_unique_filename(tut_video.filename)
    video_upload = upload_file_to_s3(tut_video)

    if "url" not in video_upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return video_upload, 400

    tut_video_aws_url = video_upload["url"]
    # flask_login allows us to get the current user from the request


    # validating the thumbnail
    # if xyz not in request.files
    if "thumbnail_pic" not in request.files:
        return {"errors": "Image File Required"}, 400

    thumbnail_pic = request.files["thumbnail_pic"]

    if not allowed_file(thumbnail_pic.filename):
        return {"errors": "This file type is not permitted (Please use pdf, png, jpg, jpeg, or gif)."}, 400

    thumbnail_pic.filename = get_unique_filename(thumbnail_pic.filename)

    thumbnail_upload = upload_file_to_s3(thumbnail_pic)




    if "url" not in thumbnail_upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return thumbnail_upload, 400

    tut_thumbnail_aws_url = thumbnail_upload["url"]

    new_tut = Tut(
            user_id=current_user.id,
            tut_video=tut_video_aws_url,
            tut_description=request.form.get('tut_description'),
            tut_title=request.form.get('tut_title'),
            thumbnail_pic=tut_thumbnail_aws_url,
            )
    print("this isthe new tut ***********", new_tut)
    db.session.add(new_tut)
    db.session.commit()
    return {"tut": new_tut.to_dict()}



#DELETE A TUT
@tut_routes.delete('/<int:id>')
@login_required
def delete_tut(id):

    tut = Tut.query.get(id)

    if current_user.id == tut.user_id:
        db.session.delete(tut)
        db.session.commit()
        return {'message': "The Tut has been sucessfully deleted"}
    else:
        return {'message': "Unauthorized user"}, 403



#UPDATE A TUT
@tut_routes.route('/<int:id>/update', methods=['PATCH'])
@login_required
def update_tut(id):
    tut = Tut.query.get(id) #get tut already in the database

    print("this IS THE TUT, FROM ID IN UPDATE", tut)

    form = TutForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    print("THIS IS HTE REQUEST.FILES IN UPDATETUT *******", request.files)

    # tut_vid AWS
    if "tut_video" not in request.files:
        return {"errors": "Video File Required"}, 400
    tut_video = request.files["tut_video"]
    if not allowed_file(tut_video.filename):
        return {"errors": "This file type is not permitted (MP4 works best for videos; use jpeg, pdf, jpg, or gif for images)."}, 400

    tut_video.filename = get_unique_filename(tut_video.filename)
    video_upload = upload_file_to_s3(tut_video)

    if "url" not in video_upload:
        return video_upload, 400

    tut_video_aws_url = video_upload["url"]

    #tumbnail_pic AWS
    thumbnail_pic = request.files["thumbnail_pic"]

    if not allowed_file(thumbnail_pic.filename):
        return {"errors": "This file type is not permitted (Please use pdf, png, jpg, jpeg, or gif)."}, 400

    thumbnail_pic.filename = get_unique_filename(thumbnail_pic.filename)
    thumbnail_upload = upload_file_to_s3(thumbnail_pic)

    if "url" not in thumbnail_upload:
        return thumbnail_upload, 400

    tut_thumbnail_aws_url = thumbnail_upload["url"]


    #make final form
    if form.validate_on_submit():
        tut.tut_title = form.data['tut_title']
        tut.tut_description = form.data['tut_description']
        tut.tut_video = tut_video_aws_url
        tut.thumbnail_pic = tut_thumbnail_aws_url
        # tut.user_id = current_user.id

        #space above in case we need to update AWS vid and pic
        db.session.commit()

        return {'tut': tut.to_dict()}
    else:
        return {'message': "Something went wrong! Please check your data and try again. Note that your title cannot exceed 100 characters."}


# get all comments for a tut by tut_id

@tut_routes.route('/<int:tut_id>/all_comments')
@login_required
def get_all_comment(tut_id):
    all_comments = Comment.query.filter(Comment.tut_id == tut_id).all()
    all_comments_json = [comment.to_dict() for comment in all_comments]
    return {"comments": all_comments_json}


# Create A Comment
@tut_routes.route("/<int:id>/new_comment", methods = ["POST"])
@login_required
def create_comment(id):
    print("THIS IS THE ID COMING TO THE COMMENT ROUTE", id)
    form = CommentForm()
    user_id = current_user.id
    tut = Tut.query.get_or_404(id)
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment(
        user_id = user_id,
        tut_id = tut.id,
        comment = form.data['comment']
        )

        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    else:
        raise Exception("Unauthorized user")
