from .db import db
from sqlalchemy.sql import func
import datetime, timeago

from app.models.user import User



class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)

    comment = db.Column(db.String(2000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    tut_id = db.Column(db.Integer, db.ForeignKey('tuts.id'), nullable=False)

    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())


    #relationships
    user = db.relationship("User", back_populates="comments")

    post = db.relationship('Tut', back_populates="comments")


    #class methods
    def comment_timeago(self):
        date = datetime.now()
        return timeago.format(self.created_at, date)




    def to_dict(self):
      fetched_user = User.query.get(self.user_id).to_dict()

      return {
            "id": self.id,
            "comment": self.comment,
            "user_id": self.user_id,
            "tut_id": self.tut_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "user": fetched_user,
        }
