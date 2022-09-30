from ssl import create_default_context
from .db import db
from datetime import datetime
from sqlalchemy.sql import func

#from .likes import likes      #Likes-todo
#from .dislikes import dislikes

class Tut(db.Model):
  __tablename__ = 'tuts'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  tut_title = db.Column(db.String(100), nullable=False)
  tut_description = db.Column(db.Text, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, server_default=func.now())
  updated_at = db.Column(db.DateTime, onupdate=func.now())
  thumbnail_pic = (db.Column(db.Text, nullable=True))  #need to add a default photo so there won't be broken images
  tut_video = db.Column(db.Text, nullable=False)

  #todo - should views be part of the videos?!?  likes? dislikes?

  #relationships
  user = db.relationship("User", back_populates="tuts")

  # comments = db.relationship("Comment", back_populates="Tuts", cascade="all, delete-orphan") #Comments-todo

  # likes = db.relationship("User", secondary=likes, back_populates='liked_tuts')  #Likes-todo
  # dislikes = db.relationship("User", secondary=dislikes, back_populates='disliked_tuts')



  # return

  #for likes and dislikes later    todo-likes
  #TO-DO: likes method
  def tut_likes_count(self):
    return len(self.likes)
  def tut_dislikes_count(self):
    return len(self.dislikes)


  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      "tut_title": self.tut_title,
      'tut_description': self.tut_description,
      'created_at': self.created_at,
      'updated_at': self.updated_at,
      'thumbnail_pic': self.thumbnail_pic,
      'tut_data': self.tut_data,
      "likes": [user.id for user in self.likes],
      "dislikes": [user.id for user in self.dislikes],
      "comments": [c.to_dict() for c in self.comments]
    }
