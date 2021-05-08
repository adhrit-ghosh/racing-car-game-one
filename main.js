canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
carimage="car1.png";
background_image = carimage;
car_image="car1.png";
car_x=10;
car_y=10;


function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;
    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=car_image;
    
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadcar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
    up();
    console.log("up");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
        }
        if(keypressed=="37"){
            left();
            console.log("left");
            }
            if(keypressed=="39"){
                right();
                console.log("right");
                }
}
function up(){
    if(car_y>=0){
        car_y=car_y-10
        uploadbackground();
        uploadcar();
    }
}
    function down(){
        if(car_y<=500){
            car_y=car_y+10
            uploadbackground();
            uploadcar();
        }
    }
        function left(){
            if(car_x>=0){
                car_x=car_x-10
                uploadbackground();
                uploadcar();
            }
        }
            function right(){
                if(car_x<=700){
                    car_x=car_x+10
                    uploadbackground();
                    uploadcar();
                }
            }