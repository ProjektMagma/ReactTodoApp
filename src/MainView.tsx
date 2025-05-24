import ActionButton from "./ActionButton.tsx";
import {useState} from "react";
import TodoNote, {type TodoNoteProps} from "./TodoNote.tsx";
import TextBox from "./TextBox.tsx";

export default function MainView() {
    const [todos, setTodos] = useState<TodoNoteProps[]>();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    return (
        <div className="flex flex-col items-center h-screen bg-yellow-600">
            <h1 className="text-5xl font-bold m-5">React Todo App</h1>
            <TextBox value={title} onChangeCallback={setTitle} placeholder={"Title"}/>
            <TextBox value={content} onChangeCallback={setContent} placeholder={"Description"}/>
            <ActionButton text={"Add todo"} onClick={() => {
                const newTodo: TodoNoteProps = {
                    title: title || "New Todo",
                    content: content || "No content provided"
                };
                setTodos(todos ? [...todos, newTodo] : [newTodo]);
            }}/>
            <div className="items-center w-full max-w-md mt-10 h-140 overflow-y-auto">
                {todos && todos.map((todo) => (
                    <TodoNote
                        key={todo.title}
                        title={todo.title}
                        content={todo.content}
                    />
                ))}
            </div>
        </div>
    )
}