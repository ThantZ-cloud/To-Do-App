import { useState } from "react";
import Item from "./Item";
import Header from "./Header";
import Form from "./Form";
import { Container, Divider, List } from "@mui/material";

export default function App() {
  let [data, setData] = useState([
    { id: 4, name: "Apple", done: true },
    { id: 3, name: "Orange", done: false },
    { id: 2, name: "Bread", done: true },
    { id: 1, name: "Egg", done: true },
  ]);

  const add = (name) => {
    let id = data[0] ? data[0].id + 1 : 1;
    setData([{ id, name, done: false }, ...data]);
  };

  const del = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  const toggle = (id) => {
    setData(data.map(item => item.id == id ? {...item, done: !item.done} : item))
  }

  return (
    <div>
      <Header count={data.filter(item => item.done == false).length} />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Form add={add} />
        <List>
          {data
            .filter((item) => !item.done)
            .map((item) => (
              <Item key={item.id} item={item} del={del} toggle={toggle}/>
            ))}
        </List>
        <Divider />
        <List>
          {data
            .filter((item) => item.done)
            .map((item) => (
              <Item key={item.id} item={item} del={del} toggle={toggle} />
            ))}
        </List>
      </Container>
    </div>
  );
}
