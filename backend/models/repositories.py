from typing import List

from db import db

from models.entities import Todo


class TodoRepo:
    def create(self, todo):
        db.session.add(todo)
        db.session.commit()

    def fetchById(self, _id) -> "Todo":
        return db.session.query(Todo).filter_by(id=_id).first()

    def fetchAll(self) -> List["Todo"]:
        return db.session.query(Todo).all()

    def delete(self, _id) -> None:
        todo = db.session.query(Todo).filter_by(id=_id).first()
        db.session.delete(todo)
        db.session.commit()

    def update(self, item_data):
        db.session.merge(item_data)
        db.session.commit()
