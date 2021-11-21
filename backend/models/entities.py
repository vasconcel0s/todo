from db import db


class Todo(db.Model):
    __tablename__ = "todos"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False, unique=False)
    description = db.Column(db.String(225), nullable=False, unique=False)
    done = db.Column(db.Boolean, nullable=False, unique=False, default=False)

    def __str__(self):
        return "ItemModel(id=%d,title=%s, description=%s, done=%s)" % (
            self.id,
            self.title,
            self.description,
            self.done,
        )
