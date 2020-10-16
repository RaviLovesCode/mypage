let canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight

let c = canvas.getContext('2d')
let x = 100
let y = 100
let radius = 50
let dx = 5
let dy = 5

 function draw(){
	c.beginPath()
	c.fillStyle = 'lime'
	c.arc(x, y, radius, 0, Math.PI * 2, false)
	c.closePath()
}
function update(){
	x += dx
	y += dy
	if(x  + radius > innerWidth || x - radius < 0){
		dx = -dx
	}
	if(y  + radius > innerHeight || y - radius < 0){
		dy = -dy
	}
}

function move(){
	requestAnimationFrame(move)
	c.clearRect(0, 0, innerWidth, innerHeight)
    draw()
    update()


}
move()
