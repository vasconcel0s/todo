from ma import ma
from models.entities import Todo


class TodoSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Todo
        load_instance = True
