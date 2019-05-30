window.onload = function() {
    $('body').scrollspy({ target: '#navbar' })
    if ($(document).scrollTop() > 50) {
      $('.logo-image').removeClass('hidden');
      $('nav').addClass('shrink');
      $('nav').removeClass('shrinkback');
    } else {
      $('nav').removeClass('shrink');
      $('.nav').addClass('shrinkback');
      $('.logo-image').fadeOut();
    }
    if ($(document).scrollTop() > 1000) {
        var officerPhotosBox = document.getElementsByClassName("overbox");
        var officerPhotos = document.getElementsByClassName("overbox-content");
        var titleOvertext = document.getElementsByClassName("title overtext");
        var taglineOvertext = document.getElementsByClassName("tagline overtext");

        var boxHeight = 0, titleHeight = 0, taglineHeight = 0;
        for (var i=0,max=officerPhotos.length;i<max;i++){
            boxHeight = officerPhotosBox[i].offsetHeight,
            titleHeight = titleOvertext[i].offsetHeight,
            taglineHeight = taglineOvertext[i].offsetHeight,
            officerPhotosBox[i].style.paddingTop = (boxHeight - titleHeight - taglineHeight)/2 + "px"
        }
    }


$(window).resize(function(){
    if ($(document).scrollTop() > 1000) {
        var officerPhotosBox = document.getElementsByClassName("overbox");
        var officerPhotos = document.getElementsByClassName("overbox-content");
        var titleOvertext = document.getElementsByClassName("title overtext");
        var taglineOvertext = document.getElementsByClassName("tagline overtext");

        var boxHeight = 0, titleHeight = 0, taglineHeight = 0;
        for (var i=0,max=officerPhotos.length;i<max;i++){
            boxHeight = officerPhotosBox[i].offsetHeight,
            titleHeight = titleOvertext[i].offsetHeight,
            taglineHeight = taglineOvertext[i].offsetHeight,
            officerPhotosBox[i].style.paddingTop = (boxHeight - titleHeight - taglineHeight)/2 + "px"
        }
    }
});
$(window).scroll(function() {
    if ($(document).scrollTop() < $(window).height()) {
        $('.nav-main').addClass('active');
    }
    if ($(document).scrollTop() > 80) {
      $('.logo-image').removeClass('hidden');
    $('nav').addClass('shrink');
    $('nav').removeClass('shrinkback');
    $('.logo-image').fadeIn();
    if ($(document).scrollTop() > 1000) {
        var officerPhotosBox = document.getElementsByClassName("overbox");
        var officerPhotos = document.getElementsByClassName("overbox-content");
        var titleOvertext = document.getElementsByClassName("title overtext");
        var taglineOvertext = document.getElementsByClassName("tagline overtext");

        var boxHeight = 0, titleHeight = 0, taglineHeight = 0;
        for (var i=0,max=officerPhotos.length;i<max;i++){
            boxHeight = officerPhotosBox[i].offsetHeight,
            titleHeight = titleOvertext[i].offsetHeight,
            taglineHeight = taglineOvertext[i].offsetHeight,
            officerPhotosBox[i].style.paddingTop = (boxHeight - titleHeight - taglineHeight)/2 + "px"
        }
    }
  } else {
    $('nav').removeClass('shrink');
    $('nav').addClass('shrinkback');
    $('.logo-image').fadeOut();
  }
});
$(".anchor").click(function(e) {
    e.preventDefault();
    anchor = $(this).attr('href');
    $("html, body").animate({
      'scrollTop':   $(anchor).offset().top-60
  }, 1000);
});
console.log("\"I do my own web programming\"")
}
// START CALHACKS CODE. CREDIT TO THE CALHACKS TEAM: http://www.calhacks.io/
$(document).ready(function() {
    $('.flag').click(function(){flag = true; console.log(flag);});
    $(".section").click(loadTeacherOnMouse);
  $(".nunna").click(function() {
    if (nunna) return;
    startRaining(rate_of_rain);
    $(".section").unbind("click", loadTeacherOnMouse);
    $(".section").on("click", nunnaOnMouse);
    nunna = true;
  });

});
var teachers = ["bukofzer/06f6554b2df84ce7", "hernan/37a2456caa84f35d", "kim/e7cbe11d0e81b5dc",
  "kinman/6711f7407979e44b", "kriehn/66177578f87130e3", "kulhandjian/b19dafa11b2168ec", "mouffak/83aed7b8c8577dde",
  "na/cbc0237b0c1c5479", "papanunna/809b669da1db6609", "raeisi/889dd184f0c635fb", "wang/5b979a3e9e357fd1"];

function randomTeacher() {
  var rand = Math.floor(Math.random() * teachers.length);
  var html = "<img src='https://emoji.slack-edge.com/T0DQ38JKC/" + teachers[rand] + ".png'>";
  return $(html);
}

function loadTeachers(num, container) {
  var $container = $(container);
  for (var i = 0; i < num; i++) {
    var teacher = randomTeacher();
    $container.append(teacher);
    return teacher;
  }
}

function loadTeacherOnMouse(e) {
  if (!($(window).width() > 480 && flag)) return;

  var $container = $(this);
  var offset = $container.offset();
  var teacher = loadTeachers(1, $container);
  var size = min_nunna_size + Math.floor(Math.random() * (nunna_size_variance + 40));
  teacher.css({
    left: e.pageX - offset.left,
    top: e.pageY - offset.top,
    position: "absolute",
    height: size,
    width: "auto"
  });
}


function nunnaOnMouse(e) {
  var $container = $(this);
  var offset = $container.offset();
}

var flag = false;
var nunna = false;

Nunna.prototype.create = function() {
  this.img = $("<img class='spin' src='https://emoji.slack-edge.com/T0DQ38JKC/babynunna/48d9cdf9691dd76e.png'>")
    .mouseenter(function() {
      this.img.attr("src", "https://emoji.slack-edge.com/T0DQ38JKC/papanunna/809b669da1db6609.png");
    }.bind(this));
  $("body").append(this.img);
  this.img.css({
    zIndex: 100,
    transition: "0.3s linear",
    width: this.size,
    position: "fixed",
    top: this.y,
    left: this.x
  });
}

var raining_nunna = false;
var rate_of_rain = 2000;
var nunna_batch = 10;
var rain_offset_x = 50;
var rain_offset_y = -200;
var rain_variance = 300;
var min_nunna_size = 30;
var nunna_size_variance = 66;
var min_acceleration = 4;
var acceleration_variance = 12;
var nunna_death_time = 10000;
var nunna_refresh_rate = 200;


function startRaining(wait) {
  rainNunnas(Math.floor(nunna_batch * Math.random()));
  setTimeout(function() {
    startRaining(wait)
  }, wait);
}

function rainNunnas(num) {
  while(num) {
    num--;
    rainNunna({
      x: -rain_offset_x + Math.floor(Math.random() * (screen.width + 2 * rain_offset_x)),
      y: rain_offset_y - Math.floor(Math.random() * rain_variance)
    });
  }
}

function rainNunna(starting, size) {
  var size = size ? size : min_nunna_size + Math.floor(Math.random() * nunna_size_variance);
  var nunna = new Nunna(starting, size, min_acceleration + Math.random() * acceleration_variance);
  nunna.fall();
  setTimeout(function() {
    nunna.die()
  }.bind(this), nunna_death_time);
  return nunna;
}

window.rainNunna = rainNunna;

function Nunna(starting, size, acceleration) {
  this.x = starting.x;
  this.y = starting.y;
  this.size = size;
  this.acceleration = acceleration;
  this.velocity_x;
  this.velocity_y;
  this.time = 0;
  this.img;
  this.moving = true;
  this.time_interval = nunna_refresh_rate;
  this.create();
}

Nunna.prototype.fall = function() {

  this.img.css({
    top: this.calcY()
  });
  if (this.moving) {
    setTimeout(function() {
      this.fall();
    }.bind(this), this.time_interval);
  }
}

Nunna.prototype.calcY = function() {
  this.y += 1/2 * this.acceleration * (this.time * this.time);
  this.time += this.time_interval * 0.001;
  return this.y;
}

Nunna.prototype.calcX = function() {
  return this.x += 2;
}

Nunna.prototype.decompose = function() {
  var time = this.time + this.time_interval * 2 * 0.001;
  var direction = (Math.random() > .5) ? -1 : 1;
  var variance = Math.floor(Math.random() * 60) * direction;
  var nunna = rainNunna({x: this.x + variance, y: this.y}, this.size / 2);
  nunna.time = time;
}

Nunna.prototype.shrink = function() {
  this.size = this.size / 2;
  this.img.css({
    width: this.size
  })
}

Nunna.prototype.turnToSix = function() {
  this.img.attr("src", "assets/img/six.png")
}

Nunna.prototype.die = function() {
  this.img.remove();
  this.moving = false;
}

// END CALHACKS CODE
