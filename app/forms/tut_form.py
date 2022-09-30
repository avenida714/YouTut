from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, ValidationError
from wtforms import StringField, IntegerField, TextAreaField


from app.models import Tut

validators=[DataRequired()]

class TutForm(FlaskForm):
  tut_title = StringField('Title', validators)
  tut_video = TextAreaField("Video", validators)
  tut_description = TextAreaField('Description')
  thumbnail_pic = TextAreaField('Thumbnail', validators)   #these names must match the keys in the dispatch from frontend form
