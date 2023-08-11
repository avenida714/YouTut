# YouTut

## Welcome to YouTut!

## About

YouTut is a full-stack web application inspired by YouTube, and dedicated to teachers everywhere. 
The application features tutorial videos (Tuts) from some of my favorite teachers on the internet. 

Learn, grow, share, and upload your own Tuts for others to see!

[YouTut Live Site](https://youtut.herokuapp.com/)

## Project Wiki Links:

[API Routes](https://github.com/avenida714/YouTut/wiki/API-Routes)

[DB Schema](https://github.com/avenida714/YouTut/wiki/Database-Schema)

[Features List](https://github.com/avenida714/YouTut/wiki/Features)

[User Stories](https://github.com/avenida714/YouTut/wiki/User-Stories)

## Tech Stack:

### Languages, Frameworks, Platforms, and Libraries:

Frontend:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

Backend:

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![SQLAlchemy](https://img.shields.io/badge/-SQLAlchemy-red?style=for-the-badge) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

Hosted On:

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## How to Run Locally:

1. Clone the github repository to a file location of your choice, recommend using "Download ZIP" in the Code dropdown menu for this repository.

2. Run **pipenv install -r requirements.txt** in the app directory to install the appropriate dependencies:

```
pipenv install -r requirements.txt
```

While those dependencies are installing, you may also open up a seperate integrated terminal, and ** npm install ** the appropriate dependencies to the react-app folder.

```
npm install
```

3. Create a .env file in the root of the **app** folder and copy the contents below. Replace the **insert secret key here** with your **own** very secret key!

```
SECRET_KEY= <<INSERT_SECRET_KEY_HERE>>
DATABASE_URL=sqlite:///dev.db
```

4. While still in the **app** folder, get into your pipenv, migrate your database, seed your database, and run your Flask app:

```
pipenv shell
pipenv run flask db init
pipenv run flask db migrate
pipenv run flask db upgrade
pipenv run flask run
```

6. Run **npm start** in the Frontend folder:

```
npm start
```

7. You should now be able to see the web application in your browser when you navigate to localhost!


<img width="1401" alt="Screen Shot 2022-10-10 at 7 37 02 AM" src="https://user-images.githubusercontent.com/97048214/194891968-1860a9a4-7d7b-40ab-848a-99661fe5c73c.png">
<img width="1401" alt="Screen Shot 2022-10-10 at 7 37 31 AM" src="https://user-images.githubusercontent.com/97048214/194891986-4b727e21-65fd-4355-b4d9-428ec74e0704.png">
<img width="1489" alt="Screen Shot 2022-10-10 at 7 37 49 AM" src="https://user-images.githubusercontent.com/97048214/194891995-2d76f2f7-9c22-4178-a604-03df082aaa58.png">
<img width="1489" alt="Screen Shot 2022-10-10 at 7 38 16 AM" src="https://user-images.githubusercontent.com/97048214/194892006-500cf2da-dbd0-43c3-b21d-6877d5500806.png">
<img width="1489" alt="Screen Shot 2022-10-10 at 7 39 00 AM" src="https://user-images.githubusercontent.com/97048214/194892021-005c7408-0b99-447f-af9a-3054ba379eae.png">
