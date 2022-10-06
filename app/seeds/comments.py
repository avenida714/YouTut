from app.models import db, Comment


# Adds demo comments, you can add other posts here if you want
def seed_comments():
    comment1 = Comment(
        comment="I really love this video!",
        user_id=2,
        tut_id=1
    )
    comment2 = Comment(
        comment="Interesting. I never knew that before.",
        user_id=3,
        tut_id=1
    )
    comment3 = Comment(
        comment="Wow!",
        user_id=4,
        tut_id=1
    )
    comment4 = Comment(
        comment="Aboslutely eye-opening!",
        user_id=5,
        tut_id=1
    )
    comment5 = Comment(
        comment="I think this is such an underrated video.",
        user_id=6,
        tut_id=1
    )
    comment6 = Comment(
        comment="I finally understand this, thank you!",
        user_id=7,
        tut_id=1
    )
    comment7 = Comment(
        comment="This video saved my project! THANK YOU",
        user_id=1,
        tut_id=4
    )
    comment8 = Comment(
        comment="Had to watch this a couple of times, but I understand it now. Thank you!",
        user_id=2,
        tut_id=4
    )
    comment9 = Comment(
        comment="This is really great content.",
        user_id=3,
        tut_id=4
    )
    comment10 = Comment(
        comment="I think this video is underrated.",
        user_id=4,
        tut_id=5
    )
    comment11 = Comment(
        comment="I never knew that before, thank you for your explanation.",
        user_id=6,
        tut_id=5
    )
    comment12 = Comment(
        comment="This was so interesting. Will there be a follow-up Tut about this?",
        user_id=7,
        tut_id=5
    )
    comment13 = Comment(
        comment="Great video!",
        user_id=4,
        tut_id=6
    )
    comment14 = Comment(
        comment="Thank you for this!",
        user_id=5,
        tut_id=6
    )
    comment15 = Comment(
        comment="Amazing video.",
        user_id=7,
        tut_id=6
    )
    comment16 = Comment(
        comment="I shared this Tut with a friend and now he understands it.",
        user_id=4,
        tut_id=7
    )
    comment17 = Comment(
        comment="I used this video with a student and it helped them a lot.",
        user_id=5,
        tut_id=7
    )
    comment18 = Comment(
        comment="Great, great, great, GREAT TUT!",
        user_id=6,
        tut_id=7
    )


    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the comments table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
