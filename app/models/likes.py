from .db import db


likes = db.Table(
    'likes',
    db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('tut_id', db.Integer, db.ForeignKey('tuts.id'), primary_key=True)
)
