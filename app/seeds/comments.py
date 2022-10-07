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
        comment="THANK YOU, I've been looking for a series like this!",
        user_id=3,
        tut_id=4
    )
    comment8 = Comment(
        comment="Love the series, Brad!",
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
        comment="As always, great video.",
        user_id=10,
        tut_id=5
    )
    comment16 = Comment(
        comment="Your tutorials are outstanding. HIGHLY recommend this series!",
        user_id=9,
        tut_id=5
    )
    comment17 = Comment(
        comment="Your videos have opened up a world of possiblity for me, thank you, man!",
        user_id=16,
        tut_id=13
    )
    comment18 = Comment(
        comment="Such a great series!",
        user_id=17,
        tut_id=3
    )

    comment19 = Comment(
        comment="Pronunciation? I pronounce you the Greatest Of All Time!",
        user_id=17,
        tut_id=13
    )
    comment20 = Comment(
        comment="I never knew that before, thank you for your explanation.",
        user_id=6,
        tut_id=5
    )
    comment21 = Comment(
        comment="The final rose goes to you! Great job!",
        user_id=12,
        tut_id=2
    )
    comment22 = Comment(
        comment="I always learn something new watching your videos.",
        user_id=7,
        tut_id=12
    )
    comment23 = Comment(
        comment="Absolutely wonderful!",
        user_id=9,
        tut_id=12
    )
    comment24 = Comment(
        comment="You're a natural!",
        user_id=3,
        tut_id=12
    )
    comment25 = Comment(
        comment="So much customization! But this video helped me in a jam, thank you!",
        user_id=2,
        tut_id=15
    )
    comment26 = Comment(
        comment="I gotta catch all your videos, they're great!",
        user_id=10,
        tut_id=9
    )
    comment27 = Comment(
        comment="I feel the rhythm!",
        user_id=11,
        tut_id=14
    )
    comment28 = Comment(
        comment="I appreciate your teaching style immensely. This course was one of the best I've ever taken.",
        user_id=14,
        tut_id=4
    )
    comment29 = Comment(
        comment="I never knew that before, thank you for your explanation.",
        user_id=6,
        tut_id=5
    )
    comment30 = Comment(
        comment="Great sound. Great video. Thanks.",
        user_id=13,
        tut_id=6
    )
    comment31 = Comment(
        comment="It makes perfect sense!",
        user_id=16,
        tut_id=6
    )
    comment32 = Comment(
        comment="Underrated series! Such a fantastic teacher!",
        user_id=11,
        tut_id=13
    )
    comment33 = Comment(
        comment="You're a legend.",
        user_id=14,
        tut_id=13
    )
    comment34 = Comment(
        comment="You make such great content. I'll have to buy you a coffee.",
        user_id=15,
        tut_id=14
    )
    comment35 = Comment(
        comment="00100000 01010100 01110010 01110101 01100101 00100000 01101111 01110010 00100000 01000110 01100001 01101100 01110011 01100101 00101100 00100000 01110100 01101000 01100001 01110100 00100000 01101001 01110011 00100000 01110100 01101000 01100101 00100000 01110001 01110101 01100101 01110011 01110100 01101001 01101111 01101110 00101110 00100000 00001010 01010111 01101000 01100101 01110100 01101000 01100101 01110010 00100000 00100111 01110100 01101001 01110011 00100000 01101110 01101111 01100010 01101100 01100101 01110010 00100000 01101001 01101110 00100000 01110100 01101000 01100101 00100000 01101101 01101001 01101110 01100100 00100000 01110100 01101111 00100000 01110011 01110101 01100110 01100110 01100101 01110010 00001010 01010100 01101000 01100101 00100000 01110011 01101100 01101001 01101110 01100111 01110011 00100000 01100001 01101110 01100100 00100000 01100001 01110010 01110010 01101111 01110111 01110011 00100000 01101111 01100110 00100000 01101111 01110101 01110100 01110010 01100001 01100111 01100101 01101111 01110101 01110011 00100000 01100110 01101111 01110010 01110100 01110101 01101110 01100101 00101100 00001010 01001111 01110010 00100000 01110100 01101111 00100000 01110100 01100001 01101011 01100101 00100000 01100001 01110010 01101101 01110011 00100000 01100001 01100111 01100001 01101001 01101110 01110011 01110100 00100000 01100001 00100000 01110011 01100101 01100001 00100000 01101111 01100110 00100000 01110100 01110010 01101111 01110101 01100010 01101100 01100101 01110011 00001010 01000001 01101110 01100100 00100000 01100010 01111001 00100000 01101111 01110000 01110000 01101111 01110011 01101001 01101110 01100111 00100000 01100101 01101110 01100100 00100000 01110100 01101000 01100101 01101101 00101110",
        user_id=18,
        tut_id=16
    )
    comment36 = Comment(
        comment="01010100 01101000 01101001 01110011 00100000 01010100 01110101 01110100 00100000 01101001 01110011 00100000 01110011 01110101 01100110 01100110 01101001 01100011 01101001 01100101 01101110 01110100 00101110 00100000",
        user_id=18,
        tut_id=17
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
    db.session.add(comment19)
    db.session.add(comment20)

    db.session.add(comment21)
    db.session.add(comment22)
    db.session.add(comment23)
    db.session.add(comment24)
    db.session.add(comment25)
    db.session.add(comment26)
    db.session.add(comment27)
    db.session.add(comment28)
    db.session.add(comment29)
    db.session.add(comment30)

    db.session.add(comment31)
    db.session.add(comment32)
    db.session.add(comment33)
    db.session.add(comment34)
    db.session.add(comment35)
    db.session.add(comment36)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the comments table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
