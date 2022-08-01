var images = ["1.jpg","2.jpg","3.jpg"];
var img = document.querySelector("img");

var image=0;
function prev(){
    image--;
    if(image<0){
        image=images.length-1;
    }
    img.src=images[image];
    
}
function next(){
    image++
    if(image>images.length-1){
        image=0;
    }
    img.src=images[image];
    

}