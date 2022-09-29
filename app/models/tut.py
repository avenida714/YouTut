from .db import db
# from datetime import datetime

class Tut(db.Model):
  __tablename__ = 'Tuts'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  tut_title = db.Column(db.String(100), nullable=False)
  tut_description = db.Column(db.String(1000), nullable=False)
  created_at
  updated_at
  thumbnail_pic
  tut_data
