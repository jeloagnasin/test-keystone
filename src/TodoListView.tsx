import { observer } from "mobx-react";
import React, { useState } from "react"
import { Button, Layout, Text } from 'react-native-ui-kitten';

import { Todo, TodoList } from './store';

export const TodoListView = observer(({ list }: { list: TodoList }) => {
  const [newTodo, setNewTodo] = React.useState("")

  const renderTodo = (todo: Todo) => (
    <TodoView
      key={todo.id}
      done={todo.done}
      text={todo.text}
      onClick={() => todo.setDone(!todo.done)}
      onRemove={() => list.remove(todo)}
    />
  )

  return (
    <Layout>
      {list.pending.length > 0 && (
        <>
          <Text>TODO</Text>
          {list.pending.map(t => renderTodo(t))}
        </>
      )}

      {list.done.length > 0 && (
        <>
          <Text>DONE</Text>
          {list.done.map(t => renderTodo(t))}
        </>
      )}
      {/* <input
        value={newTodo}
        onChange={ev => {
          setNewTodo(ev.target.value || "")
        }}
        placeholder="I will..."
      />
      <Button
        onClick={() => {
          list.add(new Todo({ text: newTodo }))
          setNewTodo("")
        }}
      >
        Add todo
      </Button> */}
    </Layout>
  )
})

function TodoView({
  done,
  text,
  onClick,
  onRemove,
}: {
  done: boolean
  text: string
  onClick(): void
  onRemove(): void
}) {
  return (
    <Layout>
      <Text>{text}</Text>
    </Layout>
  )
}