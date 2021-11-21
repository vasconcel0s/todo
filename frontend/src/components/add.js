import React, { useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Add() {
  let history = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const postData = () => {
    axios
      .post(`http://localhost:5000/todo`, {
        title,
        description,
        done: false,
      })
      .then(() => {
        history("/");
      });
  };
  return (
    <Container text>
      <Header as="h2">Header</Header>
      <Form>
        <Form.Field>
          <label>Título</label>
          <input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Descrição</label>
          <input
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <div>
          <Button onClick={postData} primary type="submit">
            OK
          </Button>
        </div>
      </Form>
    </Container>
  );
}
