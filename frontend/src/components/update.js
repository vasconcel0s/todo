import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Update() {
  let navigate = useNavigate();
  const [id, setID] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);
  const handleChange = () => {
    setDone(!done);
  };
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("title"));
    setDescription(localStorage.getItem("description"));
    setDone(localStorage.getItem("status") == "true");
  }, []);
  const updateAPIData = () => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
        title,
        description,
        done: done,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <Container text>
      <Header as="h2">Header</Header>
      <Form className="create-form">
        <Form.Field>
          <label>Título</label>
          <input
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Descrição</label>
          <input
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Marcar como feito"
            checked={done}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" primary onClick={updateAPIData}>
          OK
        </Button>
      </Form>
    </Container>
  );
}
