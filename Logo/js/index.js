let windowElem = document.getElementById("window");
windowElem.style.position = "absolute";
windowElem.style.top = "0%";
windowElem.style.left = "40%";

let interval = setInterval(one,20);
function one(){
	let top = parseInt(windowElem.style.top);
	let left = parseInt(windowElem.style.left);
	if(top <= 45 && left <= 40){
		windowElem.style.top = (top+1)+"%";
		windowElem.style.left = (left-1)+"%";
	}else if((top >= 45 && left <= 40)&&(top <= 90 && left <= 40)){
		windowElem.style.top = (top+1)+"%";
		windowElem.style.left = (left+1)+"%";
	}else if((top <= 91 && left >=35)&&(top >= 45 && left <= 83)){
		windowElem.style.top = (top-1)+"%";
		windowElem.style.left = (left+1)+"%";
	}else if(top <= 52 && left <=84){
		windowElem.style.top = (top-1)+"%";
		windowElem.style.left = (left-1)+"%";
	}
	
}

