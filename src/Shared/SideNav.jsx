import { GoHomeFill } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { MdAddTask } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import ActiveLink from "../components/ActiveLinks/ActiveLink";

const Side = () => {
  return (
    <div className="px-4 pt-10 h-full flex flex-col items-center lg:gap-8 bg-[#111210] border-r border-[#e2e2e2] text-white">
      <ActiveLink to={"/"}>
        <GoHomeFill className={`text-2xl`} />
      </ActiveLink>
      <ActiveLink to={"/todos"}>
        <LuListTodo className={`text-2xl`} />
      </ActiveLink>
      <ActiveLink to={"/addtodo"}>
        <MdAddTask className={`text-2xl`} />
      </ActiveLink>
      <ActiveLink to={"/trash"}>
        <IoMdTrash className={`text-2xl`} />
      </ActiveLink>
    </div>
  );
};

export default Side;
