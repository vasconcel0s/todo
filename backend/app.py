import connexion
from ma import ma
from db import db
from flask_cors import CORS

connex_app = connexion.App("__name__", specification_dir="./")
connex_app.add_api("swagger.yml")

app = connex_app.app
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+mysqlconnector://root:root@db:3306/todo"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["PROPAGATE_EXCEPTIONS"] = True


@app.before_first_request
def create_tables():
    db.create_all()


db.init_app(app)
ma.init_app(app)
app.run(port=5000, debug=True)
