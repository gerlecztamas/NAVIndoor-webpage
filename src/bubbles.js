let topDiv = document.querySelector(".top");
let botDiv = document.querySelector(".bottom");
let arrowDiv = document.querySelector(".arrow");
const darkBlue = "#264A54";
const midBlue = "#2F6375";
const lightBlue = "#6FADC3";
const aqua = "#8ECCB1";
const white = "#F6F6F2";

let bubbles = [
    [0, 148, 148, aqua], [140, 200, 103, midBlue], [260, 100, 90, lightBlue], [170, 60, 33, darkBlue], [260, 170, 33, darkBlue],
    [210, 250, 12, white], [370, 120, 52, midBlue], [440, 180, 70, darkBlue], [430, 60, 12, white], [500, 120, 62, aqua], [570, 160, 37, lightBlue],
    [540, 200, 16, white], [600, 185, 11, midBlue], [650, 135, 29, midBlue], [700, 150, 11, white], [720, 170, 20, lightBlue],
    [760, 140, 18, aqua], [780, 160, 15, darkBlue], [830, 160, 8, white]
]
if (window.matchMedia('screen and (max-width: 767px)').matches) {
    let number = 0;
    for(var i of bubbles){
        let svg = `<svg height="107" width="283"><circle cx="${i[0]/3}" cy="${i[1]/3}" r="${i[2]/3}" fill="${i[3]}" /></svg>`;
        topDiv.innerHTML += svg;
        topDiv.lastChild.style.position = "absolute";
        topDiv.lastChild.id = "bubble" + number;
        number++;
    }
    let svg = '';
    for(var i of bubbles){
        if(number == 19){
            svg = `<svg height="107" width="283"><circle cx="${(283-i[0]/3)}" cy="${i[1]/3}" r="${i[2]/3}" fill="${darkBlue}" /></svg>`;
        }
        else{
            svg = `<svg height="107" width="283"><circle cx="${(283-i[0]/3)}" cy="${i[1]/3}" r="${i[2]/3}" fill="${i[3]}" /></svg>`;
        }
        botDiv.innerHTML += svg;
        botDiv.lastChild.style.position = "absolute";
        botDiv.lastChild.id = "bubble" + number;
        number++;
    }
}
else if (window.matchMedia('screen and (max-width: 1280px)').matches) {
    let number = 0;
    for(var i of bubbles){
        let svg = `<svg height="160" width="425"><circle cx="${i[0]/2}" cy="${i[1]/2}" r="${i[2]/2}" fill="${i[3]}" /></svg>`;
        topDiv.innerHTML += svg;
        topDiv.lastChild.style.position = "absolute";
        topDiv.lastChild.id = "bubble" + number;
        number++;
    }
    let svg = '';
    for(var i of bubbles){
        if(number == 19){
            svg = `<svg height="160" width="425"><circle cx="${(425-i[0]/2)}" cy="${i[1]/2}" r="${i[2]/2}" fill="${darkBlue}" /></svg>`;
        }
        else{
            svg = `<svg height="160" width="425"><circle cx="${(425-i[0]/2)}" cy="${i[1]/2}" r="${i[2]/2}" fill="${i[3]}" /></svg>`;
        }
        botDiv.innerHTML += svg;
        botDiv.lastChild.style.position = "absolute";
        botDiv.lastChild.id = "bubble" + number;
        number++;
    }
}
else{
    let number = 0;
    for(var i of bubbles){
        let svg = `<svg height="320" width="850"><circle cx="${i[0]}" cy="${i[1]}" r="${i[2]}" fill="${i[3]}" /></svg>`;
        topDiv.innerHTML += svg;
        topDiv.lastChild.style.position = "absolute";
        topDiv.lastChild.id = "bubble" + number;
        number++;
    }

    let svg = '';
    for(var i of bubbles){
        if(number == 19){
            svg = `<svg height="320" width="850"><circle cx="${(850-i[0])}" cy="${i[1]}" r="${i[2]}" fill="${darkBlue}" /></svg>`;
        }
        else{
            svg = `<svg height="320" width="850"><circle cx="${(850-i[0])}" cy="${i[1]}" r="${i[2]}" fill="${i[3]}" /></svg>`;
        }
        botDiv.innerHTML += svg;
        botDiv.lastChild.style.position = "absolute";
        botDiv.lastChild.id = "bubble" + number;
        number++;
    }
}


var topTreshold = document.querySelector("nav").offsetHeight;
var botTreshold = document.querySelector(".home").offsetHeight - document.querySelector("nav").offsetHeight;
console.log(botTreshold);

window.onscroll = function()
{
    let scrollTop = document.documentElement.scrollTop;

    if(scrollTop >= topTreshold){
        let topAmount = (scrollTop-topTreshold);
        if(topAmount >= 100){
            topAmount = 100;
        }
        //console.log(topAmount);
        topDiv.style.transform = `translateX(${-100+topAmount}%)`;
        arrowDiv.style.opacity = "0";
    }

    if(scrollTop >= botTreshold){
        let botAmount = (scrollTop-botTreshold);
        if(botAmount >= 100){
            botAmount = 100;
        }
        console.log(botAmount);
        botDiv.style.transform = `translateX(${100-botAmount}%)`;
    }
};


/*
window.onscroll = function()
{
	var scrollTop = document.documentElement.scrollTop;
	
	if(scrollTop >= adTreshold)
	{
		advertising.style.position = "fixed";
		advertising.style.left = 0;
		advertising.style.top = 0;
		advertising.style.width = "100%";
		advertising.style.fontSize = "75%";
		
		//Érdemes mindent lejjebb tolni, hogy ne takarja ki a tartalom tetejét
		document.getElementById('container').style.marginTop = adTreshold +"px";
	}
};
*/

