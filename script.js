const canvas = document.getElementById("comportamiento");
const ctx = canvas.getContext("2d");
var rect=canvas.getBoundingClientRect();
var x=0, y=0,dibujando=false, color='black', grosor=3;

var limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click",function(){
	canvas.width=canvas.width;
})

function cambiarColor(c){

    color=c;
    console.log(color);
}
function cambiarGrosor(g){
    grosor=g;
}
canvas.addEventListener('mousedown',function(e){
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;
    dibujando=true;
});
canvas.addEventListener('mousemove',function(e){
    if(dibujando===true){
        dibujar(x,y,e.clientX - rect.left,e.clientY - rect.top);
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
    }
})
canvas.addEventListener('mouseup',function(e){
    if (dibujando===true){
        x=0;
        y=0;
        dibujando=false
    }
})

function dibujar(xi,yi,xf,yf){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=grosor;
    ctx.moveTo(xi,yi);
    ctx.lineTo(xf,yf);
    ctx.stroke();
    ctx.closePath();
}
