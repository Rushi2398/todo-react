const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();
app.use(express.json());

//Body {
//     title: String,
//     description: string
// }
app.get("/todos", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.send(411).json({
      msg: "You have passed the wrong inputs",
    });
    return;
  }
  // put it in mongo db
});

app.post("/todo", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.send(411).json({
      msg: "You have passed the wrong inputs",
    });
    return;
  }
});

app.listen(3000);
