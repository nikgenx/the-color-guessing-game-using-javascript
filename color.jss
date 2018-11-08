var math1,math2,math3;
let real1,real2,real3;
function getRandom(){
math1=parseInt(Math.random()*256);
math2=parseInt(Math.random()*256);
if(document.querySelector(".easy").classList.contains("bg-primary")){
	math3=0;
}
else{math3=parseInt(Math.random()*256);}
}



function divisions(arr){
	var index=[];
	var i=5;
	while(arr!==[] && i>=0){
	var position=parseInt(Math.random()*i);
	index.push(arr.splice(position,1));
	i--;
	}
	return index;
}

function dommanuplation(index){
	for(var i=0;i<6;i++){
		document.querySelector("#color-"+index[i]).style.background=`rgb(${math1},${math2},${math3})`;
		//console.log(document.querySelector("#color-"+index[i]).style.background=`rgb(${math1},${math2},${math3})`);
		getRandom();
	}

}

function correct(){
	for(var i=0;i<6;i++){
		document.querySelector("#color-"+i).style.background=`rgb(${real1},${real2},${real3})`;
		document.querySelector("#color-"+i).style.display="block";
	}
	document.querySelector("#main_header").style.background=`rgb(${real1},${real2},${real3})`;
}

function start(){
	var arr=[0,1,2,3,4,5]
	for(var i=0;i<6;i++){
		document.querySelector("#color-"+i).style.display="block";
	}

	document.querySelector(".try").innerHTML="";
	getRandom();
	[real1,real2,real3]=[math1,math2,math3];
	document.querySelector(".math1").textContent=math1;
	document.querySelector(".math2").textContent=math2;
	document.querySelector(".math3").textContent=math3;
	var index=divisions(arr);
	dommanuplation(index);
	//console.log(document.querySelector("#color-1").style.background);
	
}

document.querySelector("#color-0").addEventListener("click",function(){
	if(document.querySelector("#color-0").style.background==`rgb(${real1}, ${real2}, ${real3})`)
	{
		document.querySelector(".try").innerHTML="correct";
		correct();
	}
	else{
		document.querySelector(".try").textContent="try again";
		document.querySelector("#color-0").style.display="none";
	}
})
document.querySelector("#color-1").addEventListener("click",function(){
	if(document.querySelector("#color-1").style.background==`rgb(${real1}, ${real2}, ${real3})`)
	{
		document.querySelector(".try").innerHTML="correct";
		correct();
	}
	else{
		document.querySelector(".try").textContent="try again";
		document.querySelector("#color-1").style.display="none";
	}
});
document.querySelector("#color-2").addEventListener("click",function(){
	if(document.querySelector("#color-2").style.background==`rgb(${real1}, ${real2}, ${real3})`)
	{
		document.querySelector(".try").innerHTML="correct";
		correct();
	}
	else{
		document.querySelector(".try").textContent="try again";
		document.querySelector("#color-2").style.display="none";
	}
});
document.querySelector("#color-3").addEventListener("click",function(){
	if(document.querySelector("#color-3").style.background==`rgb(${real1}, ${real2}, ${real3})`)
	{
		document.querySelector(".try").innerHTML="correct";
		correct();
	}
	else{
		document.querySelector(".try").textContent="try again";
		document.querySelector("#color-3").style.display="none";
	}
});
document.querySelector("#color-4").addEventListener("click",function(){
	if(document.querySelector("#color-4").style.background==`rgb(${real1}, ${real2}, ${real3})`)
	{
		document.querySelector(".try").innerHTML="correct";
		correct();
	}
	else{
		document.querySelector(".try").textContent="try again";
		document.querySelector("#color-4").style.display="none";
	}
});
document.querySelector("#color-5").addEventListener("click",function(){
	if(document.querySelector("#color-5").style.background==`rgb(${real1}, ${real2}, ${real3})`)
	{
		document.querySelector(".try").innerHTML="correct";
		correct();
	}
	else{
		document.querySelector(".try").textContent="try again";
		document.querySelector("#color-5").style.display="none";
	}
});

document.querySelector(".easy").addEventListener("click",function(){
document.querySelector(".easy").classList.add("p-1");
document.querySelector(".easy").classList.add("bg-primary")
document.querySelector(".easy").classList.add("text-white")
document.querySelector(".hard").classList.remove("p-1");
document.querySelector(".hard").classList.remove("bg-primary");
document.querySelector(".hard").classList.remove("text-white");
start();
})


document.querySelector(".hard").addEventListener("click",function(){
document.querySelector(".hard").classList.add("p-1");
document.querySelector(".hard").classList.add("bg-primary")
document.querySelector(".hard").classList.add("text-white")
document.querySelector(".easy").classList.remove("p-1");
document.querySelector(".easy").classList.remove("bg-primary");
document.querySelector(".easy").classList.remove("text-white");
start();
})

document.querySelector(".new_game").addEventListener("click",function(){
start(); });

start();
