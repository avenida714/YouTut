from app.models import db, Tut


# Adds demo posts, you can add other posts here if you want
def seed_tuts():
    tut1 = Tut(
        thumbnail_pic="https://i.ytimg.com/vi/nWyyDHhTxYU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrG89KBDtt4TiIJoTYDwdUwNnqBA",
        tut_description="Join us as we begin at the beginning, and learn all of the SQL essentials.",
        tut_title="Learn SQL with Socratica",
        user_id=18,
        tut_video="https://www.youtube.com/watch?v=nWyyDHhTxYU&list=PLi01XoE8jYojRqM4qGBF1U90Ee1Ecb5tt&index=1"
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
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/traversy.jpg",
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
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/jonas.jpg",
        tut_description="Preview of the upcoming update of my complete JavaScript course on Udemy. Will be ready around October 21st!",
        tut_title=" I'm updating my JavaScript course! Here is a preview!",
        user_id=7,
        tut_video="https://www.youtube.com/watch?v=vDQ9GZsJkms"
    )

    tut8 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/what-is-git.jpg",
        tut_description="This short video explains what Git is and why it's a critical skill for every software & DevOps engineer. ",
        tut_title="What is Git? Explained in 2 Minutes!",
        user_id=8,
        tut_video="https://www.youtube.com/watch?v=2ReR1YJrNOM"
    )

    tut9 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/async-requests.jpg",
        tut_description="We dump the data file and instead learn how to load the Pokemon data via a web request using React's useEffect hook and fetch.",
        tut_title=" Introduction to React #6 | Asynchronous Requests",
        user_id=9,
        tut_video="https://www.youtube.com/watch?v=OCg4DJyVGk0"
    )

    tut10 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/what-is-short-circuiting.jpg",
        tut_description="Don't short a circuit, learn about short circuiting here.",
        tut_title="If You Don't Understand Short Circuiting Your App Will Break",
        user_id=10,
        tut_video="https://www.youtube.com/watch?v=8mvNzU7DpO4"
    )

    tut11 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/priyanka-ai-machinelearning.jpg",
        tut_description="In this video I explain the difference between ML, AI and Deep Learning.",
        tut_title="Ai vs Machine Learning vs Deep Learning",
        user_id=11,
        tut_video="https://www.youtube.com/watch?v=eBLbbpO5VQg"
    )

    tut12 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/leon.jpg",
        tut_description="Help folx launch a new career in software engineering with a focus on web development!",
        tut_title="Easy Intro to Node, Promises, & Async / Await!",
        user_id=12,
        tut_video="https://www.youtube.com/watch?v=IUCnAhr61pg"
    )

    tut13 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/kenny.jpg",
        tut_description="WELCOMETOANOTHERONEOFMYTUTORIALS.",
        tut_title="How to Watch My REAPER Videos",
        user_id=13,
        tut_video="https://www.youtube.com/watch?v=DIuNcKfWx1o"
    )

    tut14 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/jtidy.jpg",
        tut_description="How to make an audio click track (metronome) in Reaper.",
        tut_title="Making a Click Track in Reaper",
        user_id=14,
        tut_video="https://www.youtube.com/watch?v=GnEFzM4zJsM"
    )

    tut15 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/myk.jpg",
        tut_description="It doesn't happen often, but sometimes...",
        tut_title=" Recovering a Crashed REAPER Project ",
        user_id=15,
        tut_video="https://www.youtube.com/watch?v=aXvPTmfOVFQ"
    )

    tut16 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/sparky.jpg",
        tut_description="Summary and Analysis",
        tut_title="Macbeth (Shakespeare) - Thug Notes",
        user_id=16,
        tut_video="https://www.youtube.com/watch?v=T-PKotyoxys"
    )

    tut17 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/rachel.jpg",
        tut_description="Improve your American Accent / spoken English at Rachel's English with video-based lessons and exercises",
        tut_title="Welcome to Rachel's English!",
        user_id=17,
        tut_video="https://www.youtube.com/watch?v=RUuwZEzMJNM"
    )





    # 1 - demo; 2 rose; 3 alvin; 4 brad; 5 Colt; 6 Ania; 7 Jonas; 8 mosh; 9 jack; 10 kevin; 11 priyanka; 12 leon; 13 kenny; 14 jon; 15 myk; 16 sparky; 17 rachel; 18 socratica

# Alvin 3
    tut18 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/AoCode-day15.jpg",
        tut_description="This problem is from the Advent of Code 2020 Day 15: Rambunctious Recitation",
        tut_title="Advent of code 2020 Day 15",
        user_id=3,
        tut_video="https://www.youtube.com/watch?v=p-IsG6Ybo2U"
    )

    tut19 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/AoCode-day7.jpg",
        tut_description="This is a walkthrough of day 7 of the 2020 advent of code, including a JavaScript implementation.",
        tut_title="Advent of code 2020 Day 7",
        user_id=3,
        tut_video="https://www.youtube.com/watch?v=8qjS-h6ybdo"
    )

#Socratica 18
    tut20 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/socratica-views.jpg",
        tut_description="In SQL, a VIEW is a virtual table.  It lets you package a complex query into a single table.  We will discuss several queries in increasing difficulty to show how VIEWs can greatly simplify your work.  In our examples we will introduce CROSS JOINs, Unions, the CONCAT() function, and the COALESCE() function.",
        tut_title="SQL VIEWS + Complex Queries, Cross Joins, Unions, and more! |¦| SQL Tutorial",
        user_id=18,
        tut_video="https://www.youtube.com/watch?v=8jU8SrAPn9c"
    )

    tut21 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/socratica-whichDB.jpg",
        tut_description="When learning SQL, you first need a database.  In this video, we help you make your choice. There are many free, open-source options: MySQL, PostgreSQL, MariaDB, Sqlite, and many others.  You can also choose an established commercial option like Oracle, SQL Server, or DB2.  Better still, you can run the database on your own server or in the cloud!",
        tut_title="Relational Databases - How to Choose |¦| SQL Tutorial |¦| SQL for Beginners",
        user_id=18,
        tut_video="https://www.youtube.com/watch?v=WzfDLqt-WIg"
    )




# colt steele 5
    tut22 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/git-stash-colt.jpg",
        tut_description="Let's learn how to use git stash!",
        tut_title="Git Stash In 5 Minutes",
        user_id=5,
        tut_video="https://www.youtube.com/watch?v=lH3ZkwbVp5E"
    )

    tut20 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/TS-w-express-colt.jpg",
        tut_description="Let's learn TypeScript with Express and Node!",
        tut_title="How To Use TypeScript With Express & Node",
        user_id=5,
        tut_video="https://www.youtube.com/watch?v=qy8PxD3alWw"
    )


# leon 12
    tut22 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/leon-Mongo.jpg",
        tut_description="Let's talk about MongoDB",
        tut_title="What is MongoDB? CRUD Apps For Beginners! (class 40)",
        user_id=12,
        tut_video="https://www.youtube.com/watch?v=3eafTTnEfMw"
    )
    tut23 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/leon-polymorph.jpg",
        tut_description="Are you down with OOP?",
        tut_title="What Is Inheritance & Polymorphism? (JavaScript) Free Bootcamp! (class 31)",
        user_id=12,
        tut_video="https://www.youtube.com/watch?v=PD-dx92RJtg"
    )

    #priyanka 11
    tut24 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/priyanka-dns.jpg",
        tut_description="DNS Domain Name System is the backbone of the internet. What is DNS? How does DNS work? This is a DNS explained tutorial I show you what a DNS server is and how it works.  It explains the different levels of DNS, such as the resolver, root server, domain server, and authoritative name server.",
        tut_title="What is DNS? | How a DNS Server (Domain Name System) works | DNS Explained",
        user_id=11,
        tut_video="https://www.youtube.com/watch?v=g6R9gRWIIK8"
    )

     #priyanka
    tut24b = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/priyanka-sql-nosql.jpg",
        tut_description="Which database is right for your application? SQL or NoSQL? Are you confused between relational and non relational databases? Want to know how they SQL and NoSQL databases are different?",
        tut_title="The battle of relational and non-relational databases | SQL vs NoSQL Explained",
        user_id=11,
        tut_video="https://www.youtube.com/watch?v=ORxMMo7it_Y"
    )

    # mosh 8
    tut25 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/mosh-let-const-var.jpg",
        tut_description="JavaScript Let vs Var vs Constant",
        tut_title=" JavaScript Let vs Var vs Constant | Mosh",
        user_id=8,
        tut_video="https://www.youtube.com/watch?v=XgSjoHgy3Rk"
    )
    tut26 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/mosh-node.jpg",
        tut_description="Node.js Tutorial for Beginners: Learn Node in 1 Hour",
        tut_title="Node.js Tutorial for Beginners: Learn Node in 1 Hour",
        user_id=8,
        tut_video="https://www.youtube.com/watch?v=TlB_eWDSMt4"
    )

    #traversy 4
    tut27 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/traversy-language.jpg",
        tut_description="This is NOT another annoying top 10 programming language video. We will talk about how programming languages work including low-level & high-level, compiled, interpreted, etc. We will also talk about some of the popular languages and what they are good for.",
        tut_title=" The Programming Language Guide",
        user_id=4,
        tut_video="https://www.youtube.com/watch?v=2lVDktWK-pc"
    )
    tut28 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/traversy-clean.jpg",
        tut_description="Let's talk about the phrase 'clean code' and how it can be pretty subjective and a lot of it comes down to preference.",
        tut_title="Clean Code vs Preference",
        user_id=4,
        tut_video="https://www.youtube.com/watch?v=ou6x2qcLOLI"
    )

#rose 2
    tut29 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/rose-docker.jpg",
        tut_description="Rose teaches us about Docker!",
        tut_title="docker_containers",
        user_id=2,
        tut_video="https://vimeo.com/324339043"
    )

#jonas 7
    tut30 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/jonas-basics.jpg",
        tut_description="A fun 3-hour course to get you started with the basics of JavaScript.You're gonna learn the fundamentals of JavaScript and programming: variables, data types, control flow, functions, objects, arrays and many other things. Share with your friends!",
        tut_title="Up and Running with JavaScript: Free JavaScript Mini-Course — Lecture 2",
        user_id=7,
        tut_video="https://www.youtube.com/watch?v=pUEWP7RPjRc"
    )

    #jack 9
    tut30 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/jack-use-hook.jpg",
        tut_description="Jack talks about the new React 'use' hook",
        tut_title="Is the new React use hook a footgun?",
        user_id=9,
        tut_video="https://www.youtube.com/watch?v=ytXM05PVcFU"
    )

    tut31 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/jack-fast.jpg",
        tut_description="Let's make context as fast as any state manager out there by only using the hooks baked right into React.",
        tut_title="Making React Context FAST!",
        user_id=9,
        tut_video="https://www.youtube.com/watch?v=ZKlXqrcBx88"
    )


    tut30 = Tut(
        thumbnail_pic="https://youtut.s3.us-west-1.amazonaws.com/jonas-basics.jpg",
        tut_description="A fun 3-hour course to get you started with the basics of JavaScript.You're gonna learn the fundamentals of JavaScript and programming: variables, data types, control flow, functions, objects, arrays and many other things. Share with your friends!",
        tut_title="Up and Running with JavaScript: Free JavaScript Mini-Course — Lecture 2",
        user_id=7,
        tut_video="https://www.youtube.com/watch?v=pUEWP7RPjRc"
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

    # db.session.add(tut18)
    # db.session.commit()

    # db.session.add(tut19)
    # db.session.commit()

    # db.session.add(tut20)
    # db.session.commit()

    #24 and 24b because forgot


# Uses a raw SQL query to TRUNCATE the posts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_tuts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
