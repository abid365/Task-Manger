import axios from "axios";
import React from "react";
import { baseUrl } from "../Api/api";

const TodoBlcoks = ({ title, desc, stat, id }) => {
  const deleteOne = (idParam) => {
    console.log(idParam);
    axios
      .delete(`${baseUrl}/pending/${idParam}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="rounded-lg bg-[#EEEEEC] py-4 px-3 my-2">
      <h1 className="text-sm font-sans">{title}</h1>
      <div className="border-b border-slate-950 px-0"></div>
      <p className="pt-3 text-xs  py-2 rounded-md">{desc}</p>
      <div className="border-b border-slate-800 px-0"></div>
      <div className="flex justify-between pt-3">
        {stat === "pending" && (
          <button className="text-xs px-4 py-2 rounded-md bg-black text-white font-bold hover:bg-sky-400">
            Finsihed
          </button>
        )}
        <button className="text-xs px-4 py-2 rounded-md bg-black text-white font-bold hover:bg-red-400">
          Cancel
        </button>
        <button
          onClick={() => deleteOne(id)}
          className="text-xs px-4 py-2 rounded-md bg-black text-white font-bold hover:bg-emerald-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoBlcoks;
