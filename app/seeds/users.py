from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo@aa.io',
        password='password',
        about="I am the Demo User. Thank you visiting YouTut! To learn more about me, please check out my linkedin and github links from the splash page! -Alec Venida"
    )# 1

    rose = User(
        username='Rose',
        email='rose@aa.io',
        password='password',
        about="'Not only could I count on Rose to deliver quality work in the face of multiple deadlines, but she would also do so with a positive attitude that energized everyone on the team. She has a very thoughtful approach to her work and is able to see the big picture of any challenge whether it be building applications, teaching engineers, or designing curriculum. Because of these qualities, Rose quickly grew within the company as a software engineer apprentice, senior instructor, and finally curriculum developer.' -Alvin"
    )# 2

    alvin = User(
        username='Alvin',
        email='bobbie@aa.io',
        password='password'
        about=" 'Alvin is one of those remarkable people who really gives his all into everything he does. Add in the fact that he is incredibly intelligent, clever, creative, and fun and you have yourself a genuinely amazing person to be around. Alvin was always willing to help out his team mates and go above and beyond the call of duty. So if you want someone who will work his hardest to make your product and team better - Alvin is your guy.' -Rose"
    )# 3

    brad = User(
        username='Traversy_Media',
        email="bradtraversy@gmail.com",
        password="password",
        about="Brad Traversy makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/TraversyMedia/about"
    )# 4

    colt = User(
        username='Colt_Steele',
        email="csteele@gmail.com",
        password="password",
        about="Colt Steele makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/ColtSteeleCode/about"
    )# 5

    ania = User(
        username='Ania_Kubów',
        email="akubow@gmail.com",
        password="password",
        about="Ania Kubów makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/AniaKub%C3%B3w/about"
    )# 6

    jonas = User(
        username='Jonas_Schmedtmann',
        email="jschmedtmann@gmail.com",
        password="password",
        about="Jonas Schmedtmann makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/JonasSchmedtmann/about"
    )# 6

    mosh = User(
        username='Mosh_Hamedani',
        email="mhamedani@gmail.com",
        password="password",
        about="Mosh Hamedani makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/programmingwithmosh/about"
    )# 8

    jack = User(
        username='Jack_Harrington',
        email="jharrington@gmail.com",
        password="password",
        about="Jack Harrington makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/JackHerrington"
    )# 9

    wds = User(
        username='web_dev_simplified',
        email="wds@gmail.com",
        password="password",
        about="Web Dev Simplified makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/WebDevSimplified/about"
    )# 10

    priyanka = User(
        username='priyanka_vergadia',
        email="pvergadia@gmail.com",
        password="password",
        about="Priyanka Vergadia makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/priyankavergadia/about"
    )# 11

    leon = User(
        username='leon_noel',
        email="lnoel@gmail.com",
        password="password",
        about="Leon Noel makes amazing content on youtube. Please check them out here: https://www.youtube.com/channel/UCGiRSHBdWuCgjgmPPz_13xw/about"
    )# 12

    kenny = User(
        username='kenny_gioia',
        email="welcometoanotheroneofmytutorials@gmail.com",
        password="password",
        about="Kenny Gioia makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/REAPERMania/about"
    )# 13

    jon = User(
        username='jon_tidey',
        email="jtidey@gmail.com",
        password="password",
        about="Jon Tidey makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/TheREAPERBlog/about"
    )# 14

    myk = User(
        username='myk_talks_about_reaper',
        email="myklikescoffee@gmail.com",
        password="password",
        about="Myk makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/LetsTalkAboutReaper/about"
    )# 15

    sparky = User(
        username='sparky_sweets',
        email="literatureislit@gmail.com",
        password="password",
        about="Sparky Sweets makes amazing content on youtube. Please check them out here: https://www.youtube.com/playlist?list=PLghL9V9QTN0jTgA1qrhWrBCB_Ln4xlVlB"
    )# 16

    rachel = User(
        username="Rachel's_English",
        email="rachelsenglish@gmail.com",
        password="password",
        about="Rachel's English makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/rachelsenglish/about"
    ) # 17



    db.session.add(demo)
    db.session.commit()

    db.session.add(rose)
    db.session.commit()

    db.session.add(alvin)
    db.session.commit()

    db.session.add(brad)
    db.session.commit()

    db.session.add(colt)
    db.session.commit()

    db.session.add(ania)
    db.session.commit()

    db.session.add(jonas)
    db.session.commit()

    db.session.add(mosh)
    db.session.commit()

    db.session.add(jack)
    db.session.commit()

    db.session.add(wds)
    db.session.commit()

    db.session.add(priyanka)
    db.session.commit()

    db.session.add(leon)
    db.session.commit()

    db.session.add(kenny)
    db.session.commit()

    db.session.add(jon)
    db.session.commit()

    db.session.add(myk)
    db.session.commit()

    db.session.add(sparky)
    db.session.commit()

    db.session.add(rachel)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
