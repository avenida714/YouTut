from app.models import db, Tut


# Adds demo posts, you can add other posts here if you want
def seed_tuts():
    tut1 = Tut(
        thumbnail_pic="https://pbs.twimg.com/media/Efyxgr7XYAEHO18.jpg",
        tut_description="Do not touch my donuts!",
        tut_title="USA",
        user_id=1,
        tut_video=""
    )
    tut2 = Tut(
        thumbnail_pic="https://c2.staticflickr.com/6/5241/5255943248_665bd55501_b.jpg",
        tut_description="Winner Winner Chicken Dinner!",
        tut_title="USA",
        user_id=1,
        tut_video=""
    )
    tut3 = Tut(
        thumbnail_pic="https://thumbor.thedailymeal.com/eChHs6UmjIXEmt_uLgTcVIEtH8g=/840x565/https://www.thedailymeal.com/sites/default/files/2018/06/20/20_Not_finished_food_on_plate_istock_edit.jpg",
        tut_description="Mom's Spaghetti, knees weak arms are heavy...",
        tut_title="USA",
        user_id=2,
        tut_video=""
    )
    tut4 = Tut(
        thumbnail_pic="https://brghealth.com/brg/wp-content/uploads/2014/08/Dinner-plate-fork-knife-finished-eating.jpg",
        tut_description="Criss-cross, not apple sauce?",
        tut_title="USA",
        user_id=2,
        tut_video=""
    )
    tut5 = Tut(
        thumbnail_pic="http://images.fineartamerica.com/images-medium-large/crumbs-in-white-plate-sami-sarkis.jpg",
        tut_description="Crumbs, crumbs, crumbs!",
        tut_title="USA",
        user_id=3
    )
    tut6 = Tut(
        thumbnail_pic="https://images.mygoodtimes.in/wp-content/uploads/2020/02/18063505/leftover-food.jpg",
        tut_description="Seconds?",
        tut_title="USA",
        user_id=3,
        tut_video=""
    )
    tut7 = Tut(
        thumbnail_pic="https://i.guim.co.uk/img/media/c4c4f854ac721bc932b9b4463f87cb20451e3c11/0_220_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=60a375ac2327f5e438b789e0b9cbfa61",
        tut_description="Charcuterie, anyone?",
        tut_title="USA",
        user_id=4
    )


    tut8 = Tut(
        thumbnail_pic="https://media.istockphoto.com/photos/directly-above-view-of-a-partially-eaten-plate-of-pancakes-and-fruit-picture-id805241820?k=20&m=805241820&s=170667a&w=0&h=WuLhUj4Ob1uUwrtJc_5MxzIzpfs0b9_AtXHg5PxnDtY=",
        tut_description="Flap Jacks",
        tut_title="iHop",
        user_id=4,
        tut_video=""
    )
    tut9 = Tut(
        thumbnail_pic="http://www.freeimageslive.com/galleries/food/misc/pics/chipshop4130.jpg",
        tut_description="Fried Potato Slices",
        tut_title="USA",
        user_id=5
    )
    tut10 = Tut(
        thumbnail_pic="https://lovechicliving.co.uk/wp-content/uploads/2014/11/Dirty-dishes.jpg",
        tut_description="Peas and Thank you!",
        tut_title="USA",
        user_id=5,
        tut_video=""
    )
    tut11 = Tut(
        thumbnail_pic="https://pbs.twimg.com/media/Cd6NthMWIAEaoFs.jpg",
        tut_description="Borgir",
        tut_title="USA",
        user_id=6,
        tut_video=""
    )
    tut12 = Tut(
        thumbnail_pic="https://thumbs.dreamstime.com/b/chicken-wings-gnawed-isolated-white-background-chicken-wings-gnawed-isolated-white-background-212968171.jpg",
        tut_description="Wing Wednesdays!",
        tut_title="Wing Stop",
        user_id=6,
        tut_video=""
    )
    tut13 = Tut(
        thumbnail_pic="https://static.wixstatic.com/media/334d9e_e1d859b564f84aee91deaef86e48f1ac~mv2.jpeg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/334d9e_e1d859b564f84aee91deaef86e48f1ac~mv2.jpeg",
        tut_description="Cakin'",
        tut_title="USA",
        user_id=7
    )
    tut14 = Tut(
        thumbnail_pic="https://www.simplemost.com/wp-content/uploads/2020/09/AdobeStock_318627044.jpg",
        tut_description="Pizza pizza!",
        tut_title="USA",
        user_id=7,
        tut_video=""
    )
    tut15 = Tut(
        thumbnail_pic="https://thumbs.dreamstime.com/b/one-pizza-slice-crumbs-cutlery-eating-concept-last-dinner-purple-background-crust-eaten-context-italian-salami-164364598.jpg",
        tut_description="useEfork",
        tut_title="App Academy",
        user_id=8,
        tut_video=""
    )
    tut16 = Tut(
        thumbnail_pic="https://images.squarespace-cdn.com/content/v1/5508c899e4b0a308ed6ba859/1478060434636-LESCG5BUFVOWOSK2IQ8J/image-asset.jpeg",
        tut_description="Spammin'",
        tut_title="USA",
        user_id=8,
        tut_video=""
    )
    tut17 = Tut(
        thumbnail_pic="https://images.happycow.net/venues/1024/13/06/hcmp130628_685490.jpeg",
        tut_description="Fish Filet",
        tut_title="USA",
        user_id=9
    )
    tut18 = Tut(
        thumbnail_pic="https://live.staticflickr.com/3458/5763315738_6cccc99627_b.jpg",
        tut_description="Meeaaattt...",
        tut_title="USA",
        user_id=9,
        tut_video=""
    )
    tut19 = Tut(
        thumbnail_pic="https://media-cdn.tripadvisor.com/media/photo-s/1a/97/63/b0/slurp-smooth.jpg",
        tut_description="Itadakimasu",
        tut_title="USA",
        user_id=10,
        tut_video=""
    )
    tut20 = Tut(
        thumbnail_pic="https://www.rareseeds.com/media/catalog/product/cache/4f71e30e38ffe1b90b59b74efe76a4b8/e/g/eggplant-aswad-and-cyan-lss-dsc_2455.gif",
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
