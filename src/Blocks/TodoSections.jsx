import React from "react";

const TodoSections = () => {
  return (
    <div className="px-20 pt-10 h-screen">
      {/* 3 grids for todo status */}
      <div className="grid grid-cols-3">
        <div className="border border-slate-500 h-60"></div>
        <div className="border border-slate-500 h-60"></div>
        <div className="border border-slate-500 h-60"></div>
      </div>
    </div>
  );
};

export default TodoSections;
