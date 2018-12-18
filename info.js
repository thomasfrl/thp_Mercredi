function popUp() {

  if (confirm("Voulez-vous changer de site!")) {
    open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_self");
  } 
}

function modePsy(){
	document.body.style.backgroundColor = "magenta"; 
	let pElts=document.querySelectorAll("p");
	let headElts=document.querySelectorAll("h1, h2, h3, h4");
	console.log(pElts.lenght);
	console.log(headElts.lenght);
	for (let i=0;i<11;i++){
		pElts[i].style.color="blue";
		pElts[i].style.fontFamily="Courier New";

	}
	for (let i=0;i<11;i++){
		headElts[i].style.color="green";
		headElts[i].style.fontFamily="Times New Roman";

	}



}

setTimeout(popUp,10000);

