let canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

// Circle(x, y, radius, dx, dy){
//    this.x = x
//    this.y = y
//    this.dx = dx
//    this.dy = dy
//    this.radius = radius
//    function draw(){

//    }
//    function update(){
   	
//    }
// }


 let c = canvas.getContext('2d');
 let x = 100;
 let y = 100;
 let radius = 30;
 let dx = 5;
 let dy = 5;

function move(){
    requestAnimationFrame(move);
	//c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.fillStyle = " lightGreen";
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fill();
    c.closePath();
    x += dx;
    y += dy;
    if(x + radius > innerWidth || x - radius< 0 ){
        dx = -dx;
    }
    if(y + radius > innerHeight || y - radius< 0 ){
        dy = -dy;
    }
   
 }
move()



// let x = 100
// let y = 100
// let radius = 50
// let dx = 5
// let dy = 5
// console.log(c)

//  function draw(){
// 	c.beginPath()
// 	c.fillStyle = 'lime'
// 	c.arc(x, y, radius, 0, Math.PI * 2, false)
// 	c.closePath()
// }
// function update(){
// 	x += dx
// 	y += dy
// 	if(x  + radius > innerWidth || x - radius < 0){
// 		dx = -dx
// 	}
// 	if(y  + radius > innerHeight || y - radius < 0){
// 		dy = -dy
// 	}
// }

// function move(){
// 	requestAnimationFrame(move)
// 	c.clearRect(0, 0, innerWidth, innerHeight)
//     draw()
//     update()


// }
// move()
