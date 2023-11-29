import { useForm } from "react-hook-form";

const AddTodo = () => {
  // react hookform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="bg-[#101211] py-10">
        <h1 className="text-xl font-bold text-center font-poppins500 text-white">
          Add your task
        </h1>
      </div>
      <div className="bg-gradient-to-r from-emerald-400 via-sky-300 to-red-400 py-1"></div>

      {/* react hook form */}
      <div className="px-10 py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="font-poppins400 text-slate-400 pb-[2px]"
              >
                Add Todo Title
              </label>
              <input
                className="px-2 py-2 border border-[#e2e2e2] appearance-none text-slate-400"
                type="text"
                {...register("title")}
              />
            </div>

            {/* left col options */}

            {/* status */}
            <div className="flex flex-col">
              <label
                htmlFor="status"
                className="font-poppins400 pb-[2px] text-left text-slate-400"
              >
                Status
              </label>
              <select
                className="appearance-none px-2 py-2 bg-[#111110] rounded-md text-center font-poppins400 font-bold text-white text-sm w-fit"
                {...register("stat", { required: true })}
                defaultValue={"pending"}
              >
                <option value="pending">Pending</option>
                <option value="finished">Finished</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            {/* mark as important? */}
          </div>

          <div className="flex flex-col mt-10">
            <label
              htmlFor="desc"
              className="font-poppins400 pb-[2px] text-slate-400"
            >
              Give it a Description
            </label>
            <textarea
              className="px-2 py-2 border border-[#e2e2e2] appearance-none"
              type="text"
              rows={4}
              cols={50}
              {...register("desc")}
            />
          </div>
          <div className="mt-3">
            <input
              type="checkbox"
              {...register("important", { required: false })}
            />
            <label
              className="font-poppins400 pb-[2px] text-slate-400"
              htmlFor="important"
            >
              👋 Mark as Important?
            </label>
          </div>
          <div className="flex justify-center items-center pt-10">
            <button
              className="px-7 py-2 rounded-md font-semibold text-sm font-poppins400 bg-[#111110] text-white"
              type="submit"
            >
              Add todo
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
