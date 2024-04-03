import { useState } from "react";

export function CreateTodo() {
  // modern syntax to export modules

  // slightly unconventional way to send data to backend - local state variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      />
      <br />
      <br />

      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo Added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
