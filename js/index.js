var slide = document.getElementById('slide');
var img =[
    'slide1trangchu.jpg',
    'slide2trangchu.jpg',
];
var len = img.length;
var index = 0;
var dir_img = '../image/';

function next(){
    if(index == len - 1){
        index = 0;
        slide.src = dir_img + img[index];
    }
    else{
        index++;
        slide.src = dir_img + img[index];
    }
}
function back(){
    if(index == 0){
        index = len -1;
        slide.src = dir_img + img[index];
    }else{
        index--;
        slide.src = dir_img + img[index];
    }
}
var t = null;
var flag = 0;
function playSlide(){
    t = setInterval(function (){
        next();
    },5000);
    flag = 1;
}
playSlide();