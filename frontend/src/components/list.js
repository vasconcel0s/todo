import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Header, Button } from "semantic-ui-react";
import "./todo.css";
import { Link } from "react-router-dom";

export default function List() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/todo`).then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    let { id, title, description, done } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    localStorage.setItem("status", done);
  };
  const getData = () => {
    axios.get(`http://localhost:5000/todo`).then((getData) => {
      setAPIData(getData.data);
    });
  };
  const onDelete = (id) => {
    axios.delete(`http://localhost:5000/todo/${id}`).then(() => {
      getData();
    });
  };

  return (
    <div>
      <Header as="h2" attached="top" textAlign="center">
        Tarefas
      </Header>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Título</Table.HeaderCell>
            <Table.HeaderCell>Descrição</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.description}</Table.Cell>
                <Table.Cell>{data.done ? "Feito" : "Pendente"}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button inverted secondary onClick={() => setData(data)}>
                      Alterar
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    inverted
                    color="red"
                    onClick={() => onDelete(data.id)}
                  >
                    Apagar
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <div>
        <Link to="add" class="ui primary button">
          Adicionar
        </Link>
      </div>
    </div>
  );
}
