# from app.models.tut import Tut
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    about = db.Column(db.Text)
    profile_img = db.Column(db.String(255), default='https://youtut.s3.us-west-1.amazonaws.com/bobo.jpeg')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)



    #relationships

    tuts = db.relationship('Tut', back_populates="user", cascade="all, delete-orphan")

    def to_dict(self):
        # fetched_tuts = Tut.query.filter(Tut.user_id == self.id)
        # print("************FETCHED******TUTS**********", fetched_tuts.to_dict())
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'about': self.about,
            'profile_img': self.profile_img,
            # 'tuts': fetched_tuts,

        }

    #session.query(MyClass).filter(MyClass.name == 'some name')


    # comments relationship here

    # liked_tuts = db.relationship('Tut', secondary=likes, back_populates='likes')  todo-Likes
    # disliked_tuts = db.relationship('Tut', secondary=dislikes, back_populates='dislikes')
