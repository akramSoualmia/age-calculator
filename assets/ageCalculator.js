var dayOfBirth = document.querySelector('.input-day');
var monthOfBirth = document.querySelector('.input-month');
var yearOfBirth = document.querySelector('.input-year');

var calculateBtn = document.querySelector('.calculate-btn');

var curentDate = new Date();

var currentYear = curentDate.getFullYear();
var currentMonth = curentDate.getMonth() +1;
var currentDay = curentDate.getDate() ;
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



calculateBtn.addEventListener('click' , ()=>{
	if (dayOfBirth.value.trim() !=0 && monthOfBirth.value.trim() != 0 && yearOfBirth.value.trim()!=0) {
		var y = currentYear - yearOfBirth.value;


		if(currentMonth >= monthOfBirth.value){
			var m = currentMonth - monthOfBirth.value;
		}
		else{
			y--;
			m = 12 + currentMonth - monthOfBirth.value;
		}

		if( currentDay>=dayOfBirth.value){
			var d = currentDay - dayOfBirth.value;
		}
		else{
			m--;
			let days = month[currentMonth -2]
			d= days + currentDay - monthOfBirth.value;
			if (d < 0) {
				m = 11;
				y--;
			}
		}
		  
		  

		if (currentDay == dayOfBirth.value && currentMonth == monthOfBirth.value) {
			document.querySelector('.age').innerHTML = "happy birthday you just turned " + y + " years";
			
		}
		else{
			document.querySelector('.age').innerHTML = "your age is "+ y + " and " + m + " months and " + d +" days";

		}
		
	}
	else{
		document.querySelector('.age').innerHTML = "please put your date of birth";
	}
	
	
})

