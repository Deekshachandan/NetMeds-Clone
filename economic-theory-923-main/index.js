var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function() {
    nextSlide();
  });
  
  prev.addEventListener("click", function() {
    prevSlide();
  });

  setInterval(function() {
    nextSlide()
  }, 3000);

  

    var slider1 = document.getElementById("slider1");
    var sliderWidth1 = slider1.offsetWidth;
    var slideList1 = document.getElementById("slideWrap1");
    var count1 = 1;
    var items1 = slideList1.querySelectorAll("li").length;
    var prev1 = document.getElementById("prev1");
    var next1 = document.getElementById("next1");
    window.addEventListener('resize1', function() {
      sliderWidth1 = slider1.offsetWidth;
    });
    
    var prevSlide1 = function() {
        if(count1 > 1) {
          count1 = count1 - 2;
          slideList1.style.left = "-" + count1 * sliderWidth1 + "px";
          count1++;
        }
      
        else if(count1 = 1) {
          count1 = items1 - 1;
          slideList1.style.left = "-" + count1 * sliderWidth1 + "px";
          count1++;
        }
      };
    
      var nextSlide1 = function() {
        if(count1 < items1) {
          slideList1.style.left = "-" + count1 * sliderWidth1 + "px";
          count1++;
        }
        else if(count1 = items1) {
          slideList1.style.left = "0px";
          count1 = 1;
        }
      };
    
      next1.addEventListener("click", function() {
        nextSlide1();
      });
      
      prev1.addEventListener("click", function() {
        prevSlide1();
      });
    
      
var countDowndate = new Date("Sep 30, 2022, 13:37:25").getTime();
var x = setInterval(function(){
  var now  = new Date().getTime();
  var distance = countDowndate - now;
  var days = Math.floor(distance/(1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";
  if(distance < 0){
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Expired";
  }
}, 1000); 

var countDowndate1 = new Date("Aug 30, 2022, 13:37:25").getTime();
var x1 = setInterval(function(){
  var now1  = new Date().getTime();
  var distance1 = countDowndate1 - now1;
  var days1 = Math.floor(distance1/(1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
  document.getElementById("timer1").innerHTML = days1 + "d" + hours1 + "h" + minutes1 + "m" + seconds1 + "s";
  if(distance1 < 0){
    clearInterval(x1);
    document.getElementById("timer1").innerHTML = "Expired";
  }
}, 1000); 


import footer from "./footer.js"
import header from "./header.js"

document.getElementById('footer').innerHTML = footer()
document.getElementById('navbar').innerHTML = header()