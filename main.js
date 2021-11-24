mouseEvent="empty";
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="blue";
radius="50";
width="30";
canvas.addEventListener("mousedown",my_mousedown);


function my_mousedown(e)
{

    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        ctx.arc(currentx,currenty,radius,0,2 * Math.PI);
        ctx.stroke();
    }
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}