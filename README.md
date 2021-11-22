# Todo List


Used technologies:
## RESTful API
- **python**
- **Flask** as a web fremawork in python
- **SQLAlchemy** as ORM
- **MySQL** SGDB da persist application's data
- **Swagger** for doc

## Frontend (UI)
- **reactjs** for SPA

## pre install
Make sure you have _docker_ and _docker-compose_ in your environment

## Install
Just clone this repository

Go to the project root directory `cd ./todo`
and start the services with _docker-compose_
```bash
    docker-compose up
```
If you are doing it for the first time, it will takes few minutes.

***It's done.***

To get access client version (UI) open your browser in [http://localhost](http://localhost)

To play with backend (RESTful API) open your browser [http://localhost:5000/ui](http://localhost:5000/ui) to see the documentation page powered by Swagger

## Where is the details?
_All of hard setting up proccess is on **docker-compose.yml**, **backend/Dockerfile** and **frontend/Dockerfile**_
