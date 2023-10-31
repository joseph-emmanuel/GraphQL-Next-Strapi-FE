// src/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import AddTodo from "@/containers/AddTodo";
import TodoList from "@/containers/TodoList";
export default function Home() {
  const [todos, setTodos] = useState<[]>([]);
  const addTodo = async (todoText: string) => {};
  const editTodoItem = async (todo: any) => {
    console.log("Edited");
  };
  const deleteTodoItem = async (todo: any) => {
    console.log("Deleted");
  };
  return (
    <div>
      <main className="main">
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      </main>
    </div>
  );
}