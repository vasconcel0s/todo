import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Header } from "semantic-ui-react";
import "./todo.css";

export default function List() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/todo`).then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

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
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
