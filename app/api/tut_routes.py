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



# UPLOAD A TUT  (CREATE)
@tut_routes.route("/", methods=["POST"])
@login_required
def upload_tut():
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


    # if "tut" not in request.files:
    #     return {"errors": "Video File Required"}, 400

    # tut = request.files["tut"]  # this name is what needs to match from the component in the frontend  AWS-todo

    # if not allowed_file(tut.filename):
    #     return {"errors": "This file type is not permitted (MP4 works best for videos; use jpeg, pdf, jpg, or gif for images)."}, 400

    # tut.filename = get_unique_filename(tut.filename)

    # upload = upload_file_to_s3(tut)

    # if "url" not in upload:
    #     # if the dictionary doesn't have a url key
    #     # it means that there was an error when we tried to upload
    #     # so we send back that error message
    #     return upload, 400

    # url = upload["url"]
    # # flask_login allows us to get the current user from the request
    # new_tut = Tut(user=current_user, url=url)
    # db.session.add(new_tut)
    # db.session.commit()
    # return {"url": url}
