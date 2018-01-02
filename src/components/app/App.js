import AddTodo from "../../containers/app/AddTodo";
import VisibleTodoList from "../../containers/app/VisibleTodoList";
import Footer from "./Footer";
import React from "react"

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App;
