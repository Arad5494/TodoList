export default function DeleteButton({onClick}) {


	return (
		<div>
			<button onClick={onClick} className="bg-red-500 w-[60px] h-[50px] text-white rounded-[10px] font-bold
				 shadow-[0_0_5px] shadow-red-400/50
				md:mt-[30px] md:w-[130px] md:h-[60px]
				">
				<span className="md:hidden">✖</span>
				<span className="hidden md:inline">حذف کردن</span>
			</button>
		</div>
	)
}