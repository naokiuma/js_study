window.onload = function () {
	let startBtn = document.getElementById('js_btn')
	startBtn.addEventListener("click",function () {
		let infos = document.querySelectorAll('input');
		const min = infos[0].value ?  infos[0].value : 0;
		const second = infos[1].value ? infos[1].value : 0; 

		//1キロあたりにかかる秒すう
		const second_for_one_k = Number(second) + (60 * Number(min))
		
		//全ての秒数
		const total_second_for_all = Math.round((42.195 * second_for_one_k) * 100 / 100);

		//それぞれの結果
		let hour_result = 0;
		let min_result = 0;
		let second_result = 0;

		second_result = total_second_for_all % 60;
		let temp_min = Math.floor(total_second_for_all / 60);
		if(temp_min >= 60){
			hour_result = Math.floor(temp_min / 60);
			min_result = temp_min % 60;
		}
		const result_text = `${hour_result}時間${min_result}分${second_result}秒`;
		document.getElementsByTagName('span')[0].textContent = result_text;


	})

}