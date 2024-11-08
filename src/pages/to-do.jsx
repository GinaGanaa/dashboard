import { todoList } from "@/utils/constants";

export default function Page() {
  return (
    <div className="p-[30px]">
      <div className="flex justify-between pb-[25px]">
        <h2 className="text-[#202224] text-[32px] font-medium">To-Do List</h2>
        <button className="w-[147px] h-[48px] bg-[#4379EE] text-white text-[14px] rounded-[6px]">
          Add New Task
        </button>
      </div>
      <div>
        {todoList.map((todo) => {
          return (
            <div className="pt-[24px]">
              <div className="flex justify-between h-[93px] items-center bg-[#FBFCFF] rounded-[12px] pl-[32px] pr-[31px]">
                <div className="flex gap-[24px]">
                  <img className="w-[30px]" src={todo.checkBox} alt="" />
                  <p>{todo.todo}</p>
                </div>
                <div className="flex gap-[32px]">
                  <button className="cursor-pointer" onClick="starred()">
                    <img src="/inbox/whiteStar.svg" alt="" />
                  </button>

                  {/* {todo.starred ? (
                    <img className="w-[26px]" src={"/inbox/yellowStar.svg"} />
                  ) : (
                    <img className="w-[26px]" src={"/inbox/whiteStar.svg"} />
                  )} */}
                  <button>
                    <img
                      className="w-[30px]"
                      src="/todo/deleteTodo.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
