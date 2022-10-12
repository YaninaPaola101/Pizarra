const canvas = document.getElementById("comportamiento");
var elemento = "<polyline id=\"figura";
var nElemento= 1;
var rect=canvas.getBoundingClientRect();
var x=0, y=0,dibujando=false, color='black', grosor=3;
var limpiar = document.getElementById("limpiar");
var bandera=false;
var guardado="";
limpiar.addEventListener("click",function(){
    document.getElementById("dibujos").innerHTML="";
    guardado="";
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
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        dibujar(x,y);
        bandera=true;
    }
})
canvas.addEventListener('mouseup',function(e){
    if (dibujando===true){
        x=0;
        y=0;
        dibujando=false
        elemento = "<polyline id=\"figura";
        guardado = document.getElementById("dibujos").innerHTML;
    }
})
function dibujar(x,y){
    if (bandera===true){
         elemento = elemento.substring(0, elemento.length - 2);;
    }
    elemento += " "  + x + "," + y+ " \">";
    var svg= document.getElementById("dibujos");
    svg.innerHTML = guardado + elemento;
}
