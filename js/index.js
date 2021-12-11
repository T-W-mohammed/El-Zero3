/* */
$(function(){

// Trigger Nice Scroll Plugin

//Change header Height
$('.header').height($(window).height());
/*$('.features').height($(window).height());
$('.subscrib').height($(window).height());*/
// Scroll to next section
$('.header .arrow i').click(function(){
	$("html , body").animate({
		scrollTop:$(".features").offset().top
	},1000);
});
// show hidden items from work
$(".show-more").click(function(){
	$('.our-work .hidden').fadeIn(2000);
});
/*$('.header .arrow i').click(function(){
	$("html , body").animate({
		scrollTop:$(".header").siblings().offset().top
	},1000);
});*/
// check client 
var left = $(".testimonial  .left"),
	right= $(".testimonial .right");
	

function checkclient(){
	


$(".client:first").hasClass("active")?left.fadeOut():left.fadeIn();	
$(".client:last").hasClass("active")?right.fadeOut():right.fadeIn();	
}
checkclient();
console.log($(" .testimonial .padding .active"));

var span = $('.padding .container > span');
$('.padding .container  span').click(function(){
	if($(this).hasClass("left")){
		$(".padding  div.active").fadeOut(100 , function(){
			$(this).removeClass("active").next('.client').addClass("active").fadeIn();
			checkclient();

		});
		console.log("right");
	}else{
		$(" .testimonial .padding .active").fadeOut(100 , function(){
			$(this).removeClass("active").prev('.client').addClass("active").fadeIn();
			checkclient();
			});
			console.log("left");
	}

});


// auto slider code
	(function autoslider(){
		$('.slider .active').each(function(){
			if(!$(this).is(':last-child')){
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass("active").next().addClass("active").fadeIn();
					autoslider();
				});
			}
			else{
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn();
					autoslider();
				});
			}
		});

	}());

});


// header 

$('.header .overlay .navbar .btn')

$('.header .container .btn').click(function(){
	console.log("click");

	$(".links").css("left","0");

	let overlay = document.createElement("div");

	overlay.className = "overlay-1";

	document.body.appendChild(overlay);
});
$('.links .close i').click(function(){

	$(".links").css("left","-220px");

	$(".overlay-1").remove();

});
// header

// Create links According To The Number OF Sections

let Parent = document.querySelector(" body ");

let sections = Array.from(Parent.children);

let secNumber = sections.length;

let link = sections[0].getAttribute("class");

const links =document.querySelector(".links");


for (let i = 1 ;i < secNumber - 4 ; i++){
	
	let li = document.createElement("li");

	let a = document.createElement("a");

	a.innerHTML = sections[i].getAttribute("class");

	a.setAttribute("href","#" + sections[i].getAttribute("class"));

	sections[i].setAttribute("id",sections[i].getAttribute("class"));

	

	li.appendChild(a);

	links.appendChild(li);

		
}

$(".links li a").click(function(){

	$(".links").css("left","-220px");

	$(".overlay-1").remove();

});




// arrow to Up 

let arrowUp = document.createElement("div");

	arrowUp.className = "arrowUp";

let i = document.createElement("i");

	i.className = "fas fa-arrow-circle-up";

	arrowUp.appendChild(i);

	document.body.appendChild(arrowUp);

window.addEventListener("scroll",()=>{


	


	if(window.pageYOffset > 100){

		arrowUp.classList.add("active");
	}
	else{
		arrowUp.classList.remove("active");
	}
});


arrowUp.onclick = function(){
	window.scrollTo({

		top:0
	}); 
}
