var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

    function new_image(){
        fabric.Image.fromURL("BirthdayImage.jpg",function(IMG){
            blockIMG_object = IMG;
            blockIMG_object.scaleToWidth(1000);
            blockIMG_object.scaleToHeight(900);
            blockIMG_object.set({
                top:0,
                left:0
            });
        canvas.add(blockIMG_object);
        })
    
    }



function playSound(){
x.play();
}
