mericanvas=document.getElementById("myCanvas");
ctx=mericanvas.getContext("2d")
var Mars_Image_Array=["mars.jpg","mars boi1.jpeg","mars boi 600000000.jpeg","marsirjaution.jpeg"]
random_number= Math.floor(Math.random()*4)
rover_width=100
rover_height=90
rover_x=10
rover_y=10
background_image=Mars_Image_Array[random_number]
rover_image="rover.png"
function Add(){
    background_imagetag=new Image()
    background_imagetag.onload=uploadbackground
    background_imagetag.src=background_image
    rover_imagetag=new Image()
    rover_imagetag.onload=uploadrover
    rover_imagetag.src=rover_image
}
function uploadbackground(){
    ctx.drawImage(background_imagetag,0,0,mericanvas.width,mericanvas.height)
}

function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
keypress=e.keyCode
console.log (keypress)
if (keypress==37){
    console.log ("left arrow pressed")
    Left()
}
if (keypress==38){
    console.log ("up arrow pressed")
    Up()
}
if (keypress==39){
    console.log ("right arrow pressed")
    Right()
}
if (keypress==40){
    console.log ("down arrow pressed")
    Down()
}
}

function Right(){
    if (rover_x<1400){
        rover_x= rover_x+10
        console.log ("When Right arrow is pressed, x="+rover_x+" y="+ rover_y)
        uploadbackground()
        uploadrover()
    }
}
function Left(){
    if (rover_x>10){
        rover_x= rover_x-10
        console.log ("When Left arrow is pressed, x="+rover_x+" y="+ rover_y)
        uploadbackground()
        uploadrover()
    }
}
function Down(){
    if (rover_y<660){
        rover_y= rover_y+10
        console.log ("When Down arrow is pressed, x="+rover_x+" y="+ rover_y)
        uploadbackground()
        uploadrover()
    }
}
function Up(){
    if (rover_y>10){
        rover_y= rover_y-10
        console.log ("When Up arrow is pressed, x="+rover_x+" y="+ rover_y)
        uploadbackground()
        uploadrover()
    }
}