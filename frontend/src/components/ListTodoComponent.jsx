import React, { useState } from "react";

const ListTodoComponent = () => {
  const dummyData = [
    {
      id: 3,
      title: "Learn Core Java",
      description: "learn core java with examples",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Core spring boot",
      description: "learn spring boot with examples",
      completed: true,
    },
  ];

  const [todos, settodos] = useState[dummyData];

  return (
    <div className="container">
      <h2 className="text-center">List of todos</h2>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Todo Title</th>
              <th>Todo Description</th>
              <th>Todo Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;
