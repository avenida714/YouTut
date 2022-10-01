from datetime import datetime
from flask import Blueprint, request, jsonify
from app.forms.tut_form import TutForm
from app.models import db
from ..models.tut import Tut
from ..models.user import User
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
    print("this is the request.files ***************", request.files)
    print("this is the request.form ***************~~~~~~~", request.form)
    if "tut_video" not in request.files:
        return {"errors": "Video File Required"}, 400

    tut_video = request.files["tut_video"]  # this name is what needs to match from the component in the frontend  AWS-todo
    #from flask api : Each key in files is the name from the <input type="file" name="">. Each value in files is a Werkzeug FileStorage object.

    if not allowed_file(tut_video.filename):
        return {"errors": "This file type is not permitted (MP4 works best for videos; use jpeg, pdf, jpg, or gif for images)."}, 400

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
    thumbnail_pic = request.files["thumbnail_pic"]

    if not allowed_file(thumbnail_pic.filename):
        return {"errors": "This file type is not permitted (Please use pdf, png, jpg, jpeg, or gif)."}, 400

    thumbnail_pic.filename = get_unique_filename(tut_video.filename)
    video_upload = upload_file_to_s3(tut_video)

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

    db.session.add(new_tut)
    db.session.commit()
    return {"tut": new_tut.to_dict()}


"""
tut_title = form.data["tut_title"],
            tut_video = form.data["tut_video"],
            tut_description = form.data["description"],
            thumbnail_pic = form.data["thumbnail_pic"],
            user_id = current_user.id,
            updated_at = datetime.now()

request.files *************** ImmutableMultiDict([('tut_video', <FileStorage: 'test-vid2.mp4' ('video/mp4')>), ('thumbnail_pic', <FileStorage: 'ipfs-thumbnail2.jpg' ('image/jpeg')>)])
this is the request.form ***************~~~~~~~ ImmutableMultiDict([('tut_title', 'test3'), ('tut_description', 'test3')])

tut_video = request.files["tut_video"]
****** THIS IS THE UPLOAD *******
upload_file_to_s3(tut_video)
 {'url': 'http://youtut.s3.amazonaws.com/74d53b40bd9c443e8801c38ba8cb3359.mp4'}

 upload_file_to_s3(thumbnail_pic)        {'url': 'someamazonian url here}
"""
