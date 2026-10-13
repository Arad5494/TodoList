export default function OkButton({onClicke}) {


	return (
		<div>
			<button onClick={onClicke} className="bg-green-500 w-[60px] h-[50px] text-white rounded-[10px] font-bold
				 shadow-[0_0_5px] shadow-green-400/50
				md:mt-[30px] md:w-[130px] md:h-[60px]
				">
				<span className="md:hidden">✓</span>
				<span className="hidden md:inline">انجام شد</span>
			</button>
		</div>
	)
}