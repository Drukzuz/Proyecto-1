var posiciones = new Array(7);
var num = 0;
var inicio = false;
var jugador = true;

function setobj(x){
	x.style.background="#EA5050";
	document.getElementById("bot").style.color = "white";
	document.getElementById("caja-divs").style.color = "white";
	document.getElementById("caja-divs").style.background = "#EA5050";
		if(inicio==false){
			for(i=0;i<6;i++){
				posiciones[i]=new Array(3);
				for(j=0;j<7;j++){
					num++;
					posiciones[i][j]=num;
				}
			} 	
		}
}

function 