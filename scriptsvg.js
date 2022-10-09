const canvas = document.getElementById("comportamiento");
//var canvas = document.getElementById("comportamiento");
//var ctx = canvas.getContext("2d");
//const ctx = canvas.getContext("2d");
//canvas.height = canvas.width;
//var elemento = "<polyline style=\"stroke:black;stroke-width:3\" points=\"100,100 200,200\">"
var elemento = "<polyline id\"figura";
var nElemento= 1;
var rect=canvas.getBoundingClientRect();
var x=0, y=0,dibujando=false, color='black', grosor=1;
var limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click",function(){
	
})

function cambiarColor(c){
    color=c;
}
function cambiarGrosor(g){
    grosor=g;
}
function asignarNumero(){
    elemento +=  nElemento + "\"";
    nElemento ++;
    
}
function asignarEstilo(){
    elemento += " style=\"fill:none;stroke:" + color+ ";stroke-width:" + grosor + "\"";
}



canvas.addEventListener('mousedown',function(e){
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;
    asignarNumero();
    asignarEstilo();
    elemento +=  " points=\""+ x + "," + y;
    
    dibujando=true;
});
canvas.addEventListener('mousemove',function(e){
    if(dibujando===true){
        //dibujar(x,y,e.clientX - rect.left,e.clientY - rect.top);
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        dibujar(x,y);
        console.log(elemento);
    }
})
canvas.addEventListener('mouseup',function(e){
    if (dibujando===true){
        dibujar(e.clientX - rect.left,e.clientY - rect.top);
        elemento += " \">"
        var svg= document.getElementById("comportamiento");
        svg.innerHTML += elemento;

        x=0;
        y=0;
        dibujando=false
        elemento = "<polyline id\"figura";
    }
})
function dibujar(x,y){
    elemento += " "  + x + "," + y;
}
