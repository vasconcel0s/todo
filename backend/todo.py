from models.repositories import TodoRepo
from schemas.schemas import TodoSchema
from flask import request

itemRepo = TodoRepo()
itemSchema = TodoSchema()
itemListSchema = TodoSchema(many=True)
ITEM_NOT_FOUND = "Todo not found for id: {}"


def get(id):
    item_data = itemRepo.fetchById(id)
    if item_data:
        return itemSchema.dump(item_data)
    return {"message": ITEM_NOT_FOUND.format(id)}, 404


def update(id):
    item_data = itemRepo.fetchById(id)
    item_req_json = request.get_json()
    if item_data:
        item_data.title = item_req_json["title"]
        item_data.description = item_req_json["description"]
        item_data.done = item_req_json["done"]
        itemRepo.update(item_data)
        return itemSchema.dump(item_data)
    return {"message": ITEM_NOT_FOUND.format(id)}, 404


def delete(id):
    item_data = itemRepo.fetchById(id)
    if item_data:
        itemRepo.delete(id)
        return {"message": "Todo deleted successfully"}, 200
    return {"message": ITEM_NOT_FOUND.format(id)}, 404


def create():
    item_req_json = request.get_json()
    item_data = itemSchema.load(item_req_json)
    itemRepo.create(item_data)
    return itemSchema.dump(item_data), 201


def getAll():
    return itemListSchema.dump(itemRepo.fetchAll()), 200
