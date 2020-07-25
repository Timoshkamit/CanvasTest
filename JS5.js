let canvas = document.querySelector(".Canpole");
let ctx = canvas.getContext('2d');
let clearb = document.querySelector(".clear")
let inpcolor = document.querySelector(".Voco");
ctx.lineCap ='round';
ctx.lineWidth = 8;
ctx.strokeStyle = inpcolor.value;



clearb.onclick = function(){
    ctx.clearRect(0, 0, 610, 600);
    
}

canvas.onmousemove = function(event){
    let x = event.clientX;
    let y = event.clientY;
    let dx = event.movementX;
    let dy = event.movementY;
    if (event.which == 1){
        ctx.strokeStyle = inpcolor.value;
        ctx.beginPath();
        ctx.moveTo(x-10, y);
        ctx.lineTo((x-10)-dx, y-dy);
        ctx.stroke()
        ctx.closePath();
        
    }
}


