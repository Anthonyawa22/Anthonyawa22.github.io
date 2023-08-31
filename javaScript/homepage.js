
//the  Kids section

var images1 = document.getElementById("photos");
var imagesArrays1 = ["media/images/kids images/d3.webp", "media/images/kids images/d21.jpeg", "media/images/kids images/d24.webp",];
var imagesIndex1 = 0;
                      
function changeImages1(){
images1.setAttribute("src", imagesArrays1[imagesIndex1]);
imagesIndex1++;
if(imagesIndex1 >= imagesArrays1.length){
imagesIndex1 = 0;
 }
}
setInterval(changeImages1, 3000);

var images2 = document.getElementById("photos2");
var imagesArrays2 = ["media/images/kd2.webp", "media/images/te1.webp", "media/images/kd3.webp", "media/images/kd4.webp"];
var imagesIndex2 = 0;
                      
function changeImages2(){
images2.setAttribute("src", imagesArrays2[imagesIndex2]);
imagesIndex2++;
if(imagesIndex2 >= imagesArrays2.length){
imagesIndex2 = 0;
 }
}
setInterval(changeImages2, 3000);

//the third Kids dress

var images3 = document.getElementById("photos3");
var imagesArrays3 = ["media/images/kids images/d21.jpeg", "media/images/kids images/d22.webp", "media/images/kids images/d23.webp", "media/images/kids images/d2.webp"];
var imagesIndex3 = 0;
                      
function changeImages3(){
images3.setAttribute("src", imagesArrays3[imagesIndex3]);
imagesIndex3++;
if(imagesIndex3 >= imagesArrays3.length){
imagesIndex3 = 0;
 }
}
setInterval(changeImages3, 4000);

//the fourth Kids dress
var images4 = document.getElementById("photos4");
var imagesArrays4 = ["media/images/kids images/d31.webp", "media/images/kids images/d32.webp", "media/images/kids images/d34.webp", "media/images/kids images/d35.webp"];
var imagesIndex4 = 0;
                      
function changeImages4(){
images4.setAttribute("src", imagesArrays4[imagesIndex4]);
imagesIndex4++;

if(imagesIndex4 >= imagesArrays4.length){
imagesIndex4 = 0;
 }
}
setInterval(changeImages4, 4000);


//the ladies(1) section

var images5 = document.getElementById("photos5");
var imagesArrays5 = ["media/images/ladies images/l14.webp", "media/images/ladies images/l13.webp", "media/images/ladies images/l12.webp", "media/images/kids images/d1.jpeg"];
var imagesIndex5 = 0;
                      
function changeImages5(){
images5.setAttribute("src", imagesArrays5[imagesIndex5]);
imagesIndex5++;

if(imagesIndex5 >= imagesArrays5.length){
imagesIndex5 = 0;
 }
}
setInterval(changeImages5, 3000);

var images6 = document.getElementById("photos6");
var imagesArrays6 = ["media/images/ladies images/l15.webp", "media/images/ladies images/l16.webp", "media/images/ladies images/l17.webp", "media/images/kids images/d3.jpeg"];
var imagesIndex6 = 0;
                      
function changeImages6(){
images6.setAttribute("src", imagesArrays6[imagesIndex6]);
imagesIndex6++;

if(imagesIndex6 >= imagesArrays6.length){
imagesIndex6 = 0;
 }
}
setInterval(changeImages6, 3000);


var images7 = document.getElementById("photos7");
var imagesArrays7 = ["media/images/ladies images/l19.webp", "media/images/ladies images/l20.webp", "media/images/ladies images/l21.webp", "media/images/kids images/da2.webp"];
var imagesIndex7 = 0;
                      
function changeImages7(){
images7.setAttribute("src", imagesArrays7[imagesIndex7]);
imagesIndex7++;

if(imagesIndex7 >= imagesArrays7.length){
imagesIndex7 = 0;
 }
}
setInterval(changeImages7, 4000);

var images8 = document.getElementById("photos8");
var imagesArrays8 = ["media/images/ladies images/l18.webp", "media/images/ladies images/l11.webp", "media/images/ladies images/g6.webp", "media/images/kids images/d4.jpeg"];
var imagesIndex8 = 0;
                      
function changeImages8(){
images8.setAttribute("src", imagesArrays8[imagesIndex8]);
imagesIndex8++;

if(imagesIndex8 >= imagesArrays8.length){
imagesIndex8 = 0;
 }
}
setInterval(changeImages8, 4000);

//the ladies(2) section

var imagesWear1 = document.getElementById("wear1");
var imagesArraysWear1 = ["media/images/ladies images/w11.webp", "media/images/ladies images/w12.webp", "media/images/ladies images/w13.webp", "media/images/ladies images/w14.webp", "media/images/ladies images/f2.jpeg"];
var imagesIndexWear1 = 0;

function changeImagesWear1(){
imagesWear1.setAttribute("src", imagesArraysWear1[imagesIndexWear1]);
imagesIndexWear1++;
if(imagesIndexWear1 >= imagesArraysWear1.length){
imagesIndexWear1 = 0;
 }
}
setInterval(changeImagesWear1, 3000);

var imagesWear2 = document.getElementById("wear2");
var imagesArraysWear2 = ["media/images/ladies images/w15.webp", "media/images/ladies images/w16.webp", "media/images/ladies images/w17.webp", "media/images/ladies images/w18.webp", "media/images/ladies images/g1.jpeg"];
var imagesIndexWear2 = 0;

function changeImagesWear2(){
imagesWear2.setAttribute("src", imagesArraysWear2[imagesIndexWear2]);
imagesIndexWear2++;
if(imagesIndexWear2 >= imagesArraysWear1.length){
imagesIndexWear2 = 0;
 }
}
setInterval(changeImagesWear2, 3000);

var imagesWear3 = document.getElementById("wear3");
var imagesArraysWear3 = ["media/images/ladies images/w19.webp", "media/images/ladies images/w20.webp", "media/images/ladies images/w21.webp", "media/images/ladies images/w22.webp", "media/images/lad1.webp"];
var imagesIndexWear3 = 0;

function changeImagesWear3(){
imagesWear3.setAttribute("src", imagesArraysWear3[imagesIndexWear3]);
imagesIndexWear3++;
if(imagesIndexWear3 >= imagesArraysWear3.length){
imagesIndexWear3 = 0;
 }
}
setInterval(changeImagesWear3, 4000);

var imagesWear4 = document.getElementById("wear4");
var imagesArraysWear4 = ["media/images/ladies images/w23.webp", "media/images/ladies images/w24.webp", "media/images/ladies images/w25.webp", "media/images/ladies images/w26.webp", "media/images/lad2.webp"];
var imagesIndexWear4 = 0;

function changeImagesWear4(){
imagesWear4.setAttribute("src", imagesArraysWear4[imagesIndexWear4]);
imagesIndexWear4++;
if(imagesIndexWear4 >= imagesArraysWear4.length){
imagesIndexWear4 = 0;
 }
}
setInterval(changeImagesWear4, 4000);



//the Accessories section

var imagesBags = document.getElementById("bags");
var imagesArraysBags = ["media/images/ladies images/b2.webp", "media/images/ladies images/b3.webp", "media/images/ladies images/b4.webp", "media/images/ladies images/b5.webp"];
var imagesIndexBags = 0;

function changeImagesBags(){
imagesBags.setAttribute("src", imagesArraysBags[imagesIndexBags]);
imagesIndexBags++;
if(imagesIndexBags >= imagesArraysBags.length){
imagesIndexBags = 0;
 }
}
setInterval(changeImagesBags, 3000);

var imagesNeckless = document.getElementById("neckless");
var imagesArraysNeckless = ["media/images/ladies images/j2.jpeg", "media/images/ladies images/j4.jpeg", "media/images/ladies images/j5.webp", "media/images/ladies images/j1.png"];
var imagesIndexNeckless = 0;

function changeImagesNeckless(){
imagesNeckless.setAttribute("src", imagesArraysNeckless[imagesIndexNeckless]);
imagesIndexNeckless++;
if(imagesIndexNeckless >= imagesArraysNeckless.length){
imagesIndexNeckless = 0;
 }
}
setInterval(changeImagesNeckless, 3000);

var imagesShoes = document.getElementById("shoes");
var imagesArraysShoes = ["media/images/ladies images/s21.webp", "media/images/ladies images/s22.webp", "media/images/ladies images/s23.webp", "media/images/ladies images/s3.webp"];
var imagesIndexShoes = 0;

function changeImagesShoes(){
imagesShoes.setAttribute("src", imagesArraysShoes[imagesIndexShoes]);
imagesIndexShoes++;
if(imagesIndexShoes >= imagesArraysShoes.length){
imagesIndexShoes = 0;
 }
}
setInterval(changeImagesShoes, 4000);



var imagesHat = document.getElementById("hat");
var imagesArraysHat = ["media/images/ladies images/h21.webp", "media/images/ladies images/h22.webp", "media/images/ladies images/h23.webp", "media/images/hat2.webp"];
var imagesIndexHat = 0;

function changeImagesHat(){
imagesHat.setAttribute("src", imagesArraysHat[imagesIndexHat]);
imagesIndexHat++;
if(imagesIndexHat >= imagesArraysHat.length){
imagesIndexHat = 0;
 }
}
setInterval(changeImagesHat, 4000);