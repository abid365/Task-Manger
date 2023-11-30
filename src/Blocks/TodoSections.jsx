import React, { useEffect, useState } from "react";
import TodoBlcoks from "../components/TodoBlcoks";
import axios from "axios";
import { baseUrl } from "../Api/api";

const TodoSections = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/pending`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [baseUrl]);

  console.log(data);
  return (
    <div className="px-20 pt-10 h-screen">
      {/* 3 grids for todo status */}
      <div className="grid grid-cols-3 gap-5">
        <div>
          <h1 className="px-2 py-3 font-sans text-md font-bold bg-indigo-400 text-white text-center">
            Pending
          </h1>
          <div className="mt-3">
            {data.map((todo, i) => {
              return (
                <TodoBlcoks
                  key={i}
                  title={todo.title}
                  desc={todo.desc}
                  stat={todo.stat}
                  id={todo._id}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="px-2 py-3 font-sans text-md font-bold bg-emerald-400 text-white text-center">
            Finished
          </h1>
        </div>
        <div>
          <h1 className="px-2 py-3 font-sans text-md font-bold bg-red-400 text-white text-center">
            Cancelled
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TodoSections;
