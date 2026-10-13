import DeleteButton from "./DeleteButton";
import OkButton from "./OkButton";

export default function ItemTodo({ title, done, onToggle , onDelete }) {


	return (
		<li className={`w-full h-[10vh] mt-10 p-1 flex items-center justify-between border-[3px] rounded-[10px]
      bg-white shadow-[0_0_30px] font-bold
      md:w-[60%] md:p-4
      ${done
				? "border-green-600 shadow-green-500/40"
				: "border-red-800 shadow-red-500/40"}`}
		>
			{title}
			<div className="w-[130px] flex items-center justify-between
					md:w-[270px] md:pb-[30px]">
				<OkButton onClicke={onToggle} />
				<DeleteButton onClick={onDelete}/>
			</div>
		</li>
	)
}