from app.models import db, Tut


# Adds demo posts, you can add other posts here if you want
def seed_tuts():
    tut1 = Tut(
        thumbnail_pic="https://i.ytimg.com/vi/nWyyDHhTxYU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrG89KBDtt4TiIJoTYDwdUwNnqBA",
        tut_description="Join us as we begin at the beginning, and learn all of the SQL essentials.",
        tut_title="Learn SQL with Socratica",
        user_id=18,
        tut_video="https://www.youtube.com/watch?v=nWyyDHhTxYU&list=PLi01XoE8jYojRqM4qGBF1U90Ee1Ecb5tt&index=1 "
    )
    tut2 = Tut(
        thumbnail_pic="https://media-exp1.licdn.com/dms/image/C5603AQECaeulDgv6KQ/profile-displayphoto-shrink_200_200/0/1659374183810?e=1669852800&v=beta&t=fDIm4R8RMsBqcfAOC-ZJaPl0M0ylITfuu1pOEW3sX1Y",
        tut_description="Rose teaches how to utilize the Apollo Cache with mutations that update data.",
        tut_title="Update Mutations in Apollo",
        user_id=2,
        tut_video="https://vimeo.com/334081527"
    )
    tut3 = Tut(
        thumbnail_pic="https://i.vimeocdn.com/video/657698376-fdbd7b4977502566109a288074b02e48e32ced0189eec0a4fe796390ec7a0a1c-d_130x73",
        tut_description="Alvin walks us through the code multiples problem",
        tut_title="Code Multiples with Alvin",
        user_id=3,
        tut_video="https://vimeo.com/235784157"
    )

    tut4 = Tut(
        thumbnail_pic="https://i.ytimg.com/an_webp/1L6oncFUu10/mqdefault_6s.webp?du=3000&sqp=CNrD2ZkG&rs=AOn4CLBi0jcCnjiBq-dfhnI5N5WEoRYX1Q",
        tut_description="In this video, Brad will introduce the application we will build which is a CRUD application for recipes built with Node.js and the PostgreSQL relational database. ",
        tut_title="Recipe App Using Node.js & PostgreSQL - Part 1",
        user_id=4,
        tut_video="https://www.youtube.com/watch?v=AFiqctkoVJ4"
    )

    tut5 = Tut(
        thumbnail_pic="https://i.ytimg.com/vi/GGcffocDI3g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDV6RXtv4qMy-nJQORdddQ2BdnROQ",
        tut_description="Colt teaches us to make a spinner",
        tut_title="Building a CSS Loading Spinner in 3 Minutes ",
        user_id=5,
        tut_video="https://www.youtube.com/watch?v=VbAD6cifkWM"
    )

    tut6 = Tut(
        thumbnail_pic="https://i.ytimg.com/vi/HLcR7qKtu_M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB9amYBIGa21B0Zw6ZQrmnjUoHgdw",
        tut_description="Ania talks about the ! symbol",
        tut_title="Bang ! Explained",
        user_id=6,
        tut_video="https://www.youtube.com/watch?v=HLcR7qKtu_M"
    )

    tut7 = Tut(
        thumbnail_pic="https://i.ytimg.com/an_webp/vDQ9GZsJkms/mqdefault_6s.webp?du=3000&sqp=CM3K2ZkG&rs=AOn4CLAt04GF9O9DjLuc7deZBCUSjhPVaw",
        tut_description="Preview of the upcoming update of my complete JavaScript course on Udemy. Will be ready around October 21st!",
        tut_title=" I'm updating my JavaScript course! Here is a preview!",
        user_id=7,
        tut_video="https://www.youtube.com/watch?v=vDQ9GZsJkms"
    )

    tut8 = Tut(
        thumbnail_pic="https://i.ytimg.com/an_webp/2ReR1YJrNOM/mqdefault_6s.webp?du=3000&sqp=CK3R2ZkG&rs=AOn4CLDtIn6LmDtESU4sXfGWLcuTbkDl_w",
        tut_description="This short video explains what Git is and why it's a critical skill for every software & DevOps engineer. ",
        tut_title="What is Git? Explained in 2 Minutes!",
        user_id=8,
        tut_video="https://www.youtube.com/watch?v=2ReR1YJrNOM "
    )

    tut9 = Tut(
        thumbnail_pic="",
        tut_description="Fried Potato Slices",
        tut_title="USA",
        user_id=9,
        tut_video=""
    )

    tut10 = Tut(
        thumbnail_pic="",
        tut_description="Peas and Thank you!",
        tut_title="USA",
        user_id=5,
        tut_video=""
    )

    tut11 = Tut(
        thumbnail_pic="",
        tut_description="Borgir",
        tut_title="USA",
        user_id=6,
        tut_video=""
    )

    tut12 = Tut(
        thumbnail_pic="",
        tut_description="Wing Wednesdays!",
        tut_title="Wing Stop",
        user_id=6,
        tut_video=""
    )

    tut13 = Tut(
        thumbnail_pic="",
        tut_description="Cakin'",
        tut_title="USA",
        user_id=7,
        tut_video=""
    )

    tut14 = Tut(
        thumbnail_pic="",
        tut_description="Pizza pizza!",
        tut_title="USA",
        user_id=7,
        tut_video=""
    )

    tut15 = Tut(
        thumbnail_pic="",
        tut_description="useEfork",
        tut_title="App Academy",
        user_id=8,
        tut_video=""
    )

    tut16 = Tut(
        thumbnail_pic="",
        tut_description="Spammin'",
        tut_title="USA",
        user_id=8,
        tut_video=""
    )

    tut17 = Tut(
        thumbnail_pic="",
        tut_description="Fish Filet",
        tut_title="USA",
        user_id=9,
        tut_video=""
    )

    tut18 = Tut(
        thumbnail_pic="",
        tut_description="Meeaaattt...",
        tut_title="USA",
        user_id=9,
        tut_video=""
    )

    tut19 = Tut(
        thumbnail_pic="",
        tut_description="Itadakimasu",
        tut_title="USA",
        user_id=10,
        tut_video=""
    )

    tut20 = Tut(
        thumbnail_pic="",
        tut_description="Twinning",
        tut_title="USA",
        user_id=10,
        tut_video=""
    )


    db.session.add(tut1)
    db.session.commit()

    db.session.add(tut2)
    db.session.commit()

    db.session.add(tut3)
    db.session.commit()

    db.session.add(tut4)
    db.session.commit()

    db.session.add(tut5)
    db.session.commit()

    db.session.add(tut6)
    db.session.commit()

    db.session.add(tut7)
    db.session.commit()

    db.session.add(tut8)
    db.session.commit()

    db.session.add(tut9)
    db.session.commit()

    db.session.add(tut10)
    db.session.commit()

    db.session.add(tut11)
    db.session.commit()

    db.session.add(tut12)
    db.session.commit()

    db.session.add(tut13)
    db.session.commit()

    db.session.add(tut14)
    db.session.commit()

    db.session.add(tut15)
    db.session.commit()

    db.session.add(tut16)
    db.session.commit()

    db.session.add(tut17)
    db.session.commit()

    db.session.add(tut18)
    db.session.commit()

    db.session.add(tut19)
    db.session.commit()

    db.session.add(tut20)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the posts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_tuts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
