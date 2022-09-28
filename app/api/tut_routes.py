from flask import Blueprint, request
from app.models import db, Tut
from flask_login import current_user, login_required
from app.api.aws  import (
    upload_file_to_s3, allowed_file, get_unique_filename)

tut_routes = Blueprint("tuts", __name__)


@tut_routes.route("", methods=["POST"])
@login_required
def upload_tut():
    if "tut" not in request.files:
        return {"errors": "Video File Required"}, 400

    tut = request.files["tut"]

    if not allowed_file(tut.filename):
        return {"errors": "This file type is not permitted (MP4 works best for videos; use jpeg, pdf, jpg, or gif for images)."}, 400

    tut.filename = get_unique_filename(tut.filename)

    upload = upload_file_to_s3(tut)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_tut = Tut(user=current_user, url=url)
    db.session.add(new_tut)
    db.session.commit()
    return {"url": url}
