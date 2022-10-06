from flask_wtf import FlaskForm
from wtforms import validators
from wtforms.validators import DataRequired, url
from wtforms.fields import (
    TextAreaField
)


class CommentForm(FlaskForm):
   comment = TextAreaField("Comment", validators=[DataRequired(),
    validators.Length( min=1, max=2000, message='Comment must be between 1 and 2000 characters')])
