from .db import db
from datetime import datetime

class Tut(db.Model):
  __tablename__ = 'Tuts'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  tut_title = db.Column(db.String(100), nullable=False)
  tut_description = db.Column(db.Text, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=(datetime.now()))  # import datetime for this
  updated_at = db.Column(db.DateTime, nullable=False)
  thumbnail_pic = (db.Column(db.Text, nullable=True))  #need to add a default photo so there won't be broken images
  tut_data
