var i = 0;
var images = [];
var time = 2000;

 images[0] = "https://source.unsplash.com/random/200x200";
 images[1] = "https://source.unsplash.com/random/201x200";
 images[2] =  "https://source.unsplash.com/random/202x200";
 images[3] =  "https://source.unsplash.com/random/203x200";
 images[4] =  "https://source.unsplash.com/random/204x200";


const container = document.querySelector('.container img')
const button = document.querySelector('button');



function changeImage(){
    document.slide.src = images[i];

    if(i <images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImage()", time)
}


//Additional Functionality

button.addEventListener('click', changeImage);







