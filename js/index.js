class Carousel{
	constructor(name,price,durationSession,countSession){
		this["Название"] = name;
		this["Стоимость"] = price;
		this["Продолжительность сеанса"] = durationSession;
		this["Количество сеансов"] = countSession;
		
	}
	showIncome(){
		return (+this["Стоимость"])*(+this["Количество сеансов"]);
	}
};
let carusel = new Carousel("Лодка","50","5","2");
console.log(carusel.showIncome());



function creatCarousel(id,name,price,durationSession){
	this["Див id"] = id;
	this["Имя"] = name;
	this["Цена"] = price;
	this["Продолжительность"] = durationSession;
};

creatCarousel.prototype.timer  = function(timerId,caruselId,incomeId){
	let start = this["Див id"];
	let letTime = this["Продолжительность"];
	let constTime = this["Продолжительность"];
	let price = this["Цена"];
	let income = 0;
	let elemId = timerId;
	let turn = 0;
	let flag = 1;
	
	start.onclick = function(){
		if(flag == 1){
			income += Number(price);
			incomeId.innerHTML ="<br>Доход :"+income+"грн";
			elemTimer();
		}
		function elemTimer(){
			flag = 0;
			let interval = setInterval(elemTimer1,1000);
			let interval2 = setInterval(move,10);
			function elemTimer1(){
				if(letTime >= 0){
					 elemId.innerHTML = letTime--;
				}else{
					clearInterval(interval);
					clearInterval(interval2);
					letTime = constTime;
					flag=1;
				};
			};
		}
		function move(){
			if(letTime < constTime){
				caruselId.style.transform = `rotate(${turn++}deg)`;	
			};
		};
	};
};

creatCarousel.prototype.name = function(nameId){
	nameId.innerHTML = this["Имя"];
}
creatCarousel.prototype.price = function(nameId){
	nameId.innerHTML += "<br>Цена :"+this["Цена"]+"грн";
}

let caruselElem = new creatCarousel(document.getElementById("oneBlock"),"Колесо обозрения","100",3);
caruselElem.timer(document.getElementById("oneTimer"),document.getElementById("oneCarousel"),document.getElementById("oneIncome"));
caruselElem.name(document.getElementById("oneInfo"));
caruselElem.price(document.getElementById("oneInfo"));
let caruselElem2 = new creatCarousel(document.getElementById("twoBlock"),"Колесо обозрения 2","150",3);
caruselElem2.timer(document.getElementById("twoTimer"),document.getElementById("twoCarousel"),document.getElementById("twoIncome"));
caruselElem2.name(document.getElementById("twoInfo"));
caruselElem2.price(document.getElementById("twoInfo"));
let caruselElem3 = new creatCarousel(document.getElementById("threeBlock"),"Колесо обозрения 3","500",5);
caruselElem3.timer(document.getElementById("threeTimer"),document.getElementById("threeCarousel"),document.getElementById("threeIncome"));
caruselElem3.name(document.getElementById("threeInfo"));
caruselElem3.price(document.getElementById("threeInfo"));

