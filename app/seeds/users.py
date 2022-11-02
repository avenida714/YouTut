from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo@aa.io',
        password='password',
        about="I am the Demo User. Thank you visiting YouTut! To learn more about me, please check out my linkedin and github links from the splash page! -Alec Venida",
        profile_img="https://youtut.s3.us-west-1.amazonaws.com/msFrizzle.jpg"
    )# 1

    rose = User(
        username='Rose',
        email='rose@aa.io',
        password='password',
        about="'Not only could I count on Rose to deliver quality work in the face of multiple deadlines, but she would also do so with a positive attitude that energized everyone on the team. She has a very thoughtful approach to her work and is able to see the big picture of any challenge whether it be building applications, teaching engineers, or designing curriculum. Because of these qualities, Rose quickly grew within the company as a software engineer apprentice, senior instructor, and finally curriculum developer.' -Alvin",
        profile_img="https://media-exp1.licdn.com/dms/image/C5603AQECaeulDgv6KQ/profile-displayphoto-shrink_200_200/0/1659374183810?e=1669852800&v=beta&t=fDIm4R8RMsBqcfAOC-ZJaPl0M0ylITfuu1pOEW3sX1Y"
    )# 2

    alvin = User(
        username='Alvin',
        email='alvin@aa.io',
        password='password',
        about=" 'Alvin is one of those remarkable people who really gives his all into everything he does. Add in the fact that he is incredibly intelligent, clever, creative, and fun and you have yourself a genuinely amazing person to be around. Alvin was always willing to help out his team mates and go above and beyond the call of duty. So if you want someone who will work his hardest to make your product and team better - Alvin is your guy.' -Rose",
        profile_img="https://yt3.ggpht.com/0M1uFuWb_biuvy37LwVtkfqvQia_9NcX9rG6HG8mXIZX8nYNdQdkpfhi3AVqgeByZqDOKsmLcw=s88-c-k-c0x00ffffff-no-rj"
    )# 3

    brad = User(
        username='Traversy_Media',
        email="bradtraversy@gmail.com",
        password="password",
        about="Brad Traversy makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/TraversyMedia/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s88-c-k-c0x00ffffff-no-rj"
    )# 4

    colt = User(
        username='Colt_Steele',
        email="csteele@gmail.com",
        password="password",
        about="Colt Steele makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/ColtSteeleCode/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu88ZkiZWoGwvsiYfeELj7youSFcFtbRIjn3Sivv=s88-c-k-c0x00ffffff-no-rj"
    )# 5

    ania = User(
        username='Ania_Kubów',
        email="akubow@gmail.com",
        password="password",
        about="Ania Kubów makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/AniaKub%C3%B3w/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu_y-RTrh1EW3izdOr9w9yrPhMQae8lH3MDtpct4_g=s88-c-k-c0x00ffffff-no-rj"
    )# 6

    jonas = User(
        username='Jonas_Schmedtmann',
        email="jschmedtmann@gmail.com",
        password="password",
        about="Jonas Schmedtmann makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/JonasSchmedtmann/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu__R2Na9E4qF_rxND7ifcqyocm3di8bV9Qbc1y5ow=s88-c-k-c0x00ffffff-no-rj"
    )# 7

    mosh = User(
        username='Mosh_Hamedani',
        email="mhamedani@gmail.com",
        password="password",
        about="Mosh Hamedani makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/programmingwithmosh/about",
        profile_img="https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s88-c-k-c0x00ffffff-no-rj"
    )# 8

    jack = User(
        username='Jack_Harrington',
        email="jharrington@gmail.com",
        password="password",
        about="Jack Harrington makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/JackHerrington",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu_Ke9uBu9p_kow4b3gtr4sA6DKxCPoX-5MaktO2zg=s88-c-k-c0x00ffffff-no-rj"
    )# 9

    wds = User(
        username='web_dev_simplified',
        email="wds@gmail.com",
        password="password",
        about="Web Dev Simplified makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/WebDevSimplified/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s88-c-k-c0x00ffffff-no-rj"
    )# 10

    priyanka = User(
        username='priyanka_vergadia',
        email="pvergadia@gmail.com",
        password="password",
        about="Priyanka Vergadia makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/priyankavergadia/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu_VcVLGdCZ-_WwRo_QGBaDJ5LqraKEeKA8ANP0F=s88-c-k-c0x00ffffff-no-rj"
    )# 11

    leon = User(
        username='leon_noel',
        email="lnoel@gmail.com",
        password="password",
        about="Leon Noel makes amazing content on youtube. Please check them out here: https://www.youtube.com/channel/UCGiRSHBdWuCgjgmPPz_13xw/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu9s7Pn91RBNc1FH3Yn9rl0xaPh0C3pozfbBwCqm=s88-c-k-c0x00ffffff-no-rj"
    )# 12

    kenny = User(
        username='kenny_gioia',
        email="welcometoanotheroneofmytutorials@gmail.com",
        password="password",
        about="Kenny Gioia makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/REAPERMania/about",
        profile_img="https://yt3.ggpht.com/RfAPgMn-4XCXW-USsBwHZ1PleXfboBc-CEEjkl_PZhFhCYnksbaTPmqDQ_v9Oa7J7NLKYBWD=s88-c-k-c0x00ffffff-no-rj"
    )# 13

    jon = User(
        username='jon_tidey',
        email="jtidey@gmail.com",
        password="password",
        about="Jon Tidey makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/TheREAPERBlog/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu--kk46Yk25c_ulHz3wz_oGRO_gIrLu5n9G_FNjQQ=s88-c-k-c0x00ffffff-no-rj"
    )# 14

    myk = User(
        username='myk_talks_about_reaper',
        email="myklikescoffee@gmail.com",
        password="password",
        about="Myk makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/LetsTalkAboutReaper/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu_JJDfpQ06zgxx5ifD1F0L8uFMjnlMn1UMeX7rn=s88-c-k-c0x00ffffff-no-rj"
    )# 15

    sparky = User(
        username='sparky_sweets',
        email="literatureislit@gmail.com",
        password="password",
        about="Sparky Sweets makes amazing content on youtube. Please check them out here: https://www.youtube.com/playlist?list=PLghL9V9QTN0jTgA1qrhWrBCB_Ln4xlVlB",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu_oA9o16B6eCoK9F2o9IKqHQjUyV65w7T4jPjs8PA=s88-c-k-c0x00ffffff-no-rj"
    )# 16

    rachel = User(
        username="Rachel's_English",
        email="rachelsenglish@gmail.com",
        password="password",
        about="Rachel's English makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/rachelsenglish/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu_JP04UPd4Gf9jzrSH21HPbJ4m6gh5wl6Dic2O1gw=s88-c-k-c0x00ffffff-no-rj"
    ) # 17

    socratica = User(
        username="Socratica",
        email="socratica@gmail.com",
        password="password",
        about="Socratica makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/Socratica/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu_kUznlQuvS6vodM4JATh65nMsQSNQAqPFfvDS_SQ=s88-c-k-c0x00ffffff-no-rj"
    ) # 18

    tim = User(
        username="Tim_Nienhuis",
        email="t9house@gmail.com",
        password="password",
        about="Tim makes amazing content on youtube. Please check them out here: https://www.youtube.com/c/tim9house/about",
        profile_img="https://yt3.ggpht.com/ytc/AMLnZu-yLVwhB70kQmjN8VCsb1zMT-U-lScUBuSsF12RTA=s88-c-k-c0x00ffffff-no-rj"
    ) # 19



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

    db.session.add(socratica)
    db.session.commit()




# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
