export function CreateTodo() {
  // modern syntax to export modules
  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
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
      />
      <br />
      <br />

      <button
        style={{
          padding: 10,
          margin: 10,
        }}
      >
        Add Todo
      </button>
    </div>
  );
}