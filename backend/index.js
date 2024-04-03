const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(express.json());

//Body {
//     title: String,
//     description: string
// }
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.send(411).json({
      msg: "You have passed the wrong inputs",
    });
    return;
  }
  // put it in mongo db
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "todo created",
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.send(411).json({
      msg: "You have passed the wrong inputs",
    });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id, // which item you want to update
    },
    {
      completed: true, //what inside that item you want to update
    }
  );

  res.json({
    msg: "todo is completed",
  });
});

app.listen(3000);
