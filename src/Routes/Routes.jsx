import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layouts/Home";
import AddTodo from "../Blocks/AddTodo";
import TodoSections from "../Blocks/TodoSections";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <TodoSections />,
      },
      {
        path: "/addtodo",
        element: <AddTodo />,
      },
    ],
  },
]);

export default router;
