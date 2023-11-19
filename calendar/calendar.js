window.onload = function () {
	//まずはカレンダーに各週をweek1から5までセット
	const calendarBody = document.getElementById('calendar');
	for(let i = 1; i <= 5; i++){
		let tr_base = document.createElement('tr')
		tr_base.setAttribute('id',`week${i}`)
		calendarBody.querySelector('tbody').appendChild(tr_base)
	}

	const year = "2023";
	const month = "11";
	const day = "18";
	const dateString = `${year}-${month}-${day}`; // yyyy-mm-dd形式の文字列

	//該当月の1日の情報
	const firstDayOfMonth = new Date(year, month - 1, 1);
	console.log(firstDayOfMonth);
	//該当月の1日の曜日
	const weekOfFirstDay = firstDayOfMonth.getDay() - 1
	console.log('この月の最初の日の曜日')
	console.log(weekOfFirstDay)


	let start_days_info = null;
	let startBtn = document.getElementById("make");
	startBtn.addEventListener("click",function () {
			start_days_info = getFayOfWeek(dateString);
			console.log('取得した曜日')
			console.log(start_days_info)

			const thElements = document.querySelectorAll('#calendar > tbody > tr:first-child th');
			let total_day = 1;
			//5週loop
			for(let head_i = 1; head_i <= 5; head_i++){
				//7日loop。
				//1週目だけ、初日をこの月の最初の日にする
				let target_week_head_tag = document.getElementById(`week${head_i}`);
				console.log(target_week_head_tag)

				if(head_i === 1){
					for(let day_i = 1; day_i <= 7; day_i++){
						if(day_i <= weekOfFirstDay + 1){
							target_week_head_tag.innerHTML += `<td class="a"></td>`;
						}else{
							target_week_head_tag.innerHTML += `<td class="a">${total_day}</td>`;
							total_day++;
						}
					}

				}else{
					for(let day_i = 1; day_i <= 7; day_i++){
						target_week_head_tag.innerHTML += `<td>${total_day}</td>`;
						total_day++;
					}
				}
			}
			thElements.forEach(th => {
				console.log(th.textContent); // 最初の行の<th>のテキストコンテンツを出力する例
			});
		},false
	);


};


//ターゲットの曜日を取得
const getFayOfWeek = (dateString) => {
  let target_day = new Date(dateString);
  //ターゲットの曜日を取得
  return target_day.getDay();
};
