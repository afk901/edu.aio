(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	// Sticky Menu
	$(window).scroll(function () {
		var height = $('.top-header').innerHeight();
		if ($('header').offset().top > 10) {
			$('.top-header').addClass('hide');
			$('.navigation').addClass('nav-bg');
			$('.navigation').css('margin-top', '-' + height + 'px');
		} else {
			$('.top-header').removeClass('hide');
			$('.navigation').removeClass('nav-bg');
			$('.navigation').css('margin-top', '-' + 0 + 'px');
		}
	});

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

	//Hero Slider
	$('.hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 7500,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: true,
		arrows: true,
		fade: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
		dots: true
	});
	$('.hero-slider').slickAnimation();

	// venobox popup
	$(document).ready(function () {
		$('.venobox').venobox();
	});


	// filter
	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.filter-controls li').on('click', function () {
			$('.filter-controls li').removeClass('active');
			$(this).addClass('active');
		});
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

})(jQuery);

function show() {

    // var name = document.getElementById("name").value;
    // var id= document.getElementById("id").value;
    var email= document.getElementById("email").value;

	var result = email.split(".", 1);
     firebase.database().ref('Newsletter/' + result).set({
            // name : name,
            // id : id,
            email : email
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("Submission Done !");
            }
          });
 } 

 function submitContact() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	var result = email.split(".", 1);

     firebase.database().ref('Contact/' + name).set({
            name : name,
			subject : subject,
            email : email,
			message : message
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("Message sent !");
            }
          });
 }

 function submitComment(e) {
	//  var name = document.getElementById("name").value;
	//  var email = document.getElementById("email").value;
	//  var comment = document.getElementById("comment").value;

	//  var result = email.split(".",1);

	//  firebase.database().ref('BlogComment/' + result).set({
	// 	name : name, 
	// 	email : email,
	// 	comment : comment
	//   }, function(error) {
	// 	if (error) {
	// 	  // The write failed...
	// 	} else {
	// 		alert("Thank you for your opinion !");
	// 	}
	//   });
	// var name = document.getElementById("name").value;
    // var id= document.getElementById("id").value;

	e.preventDefault();
	var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
	var comment= document.getElementById("comment").value;


	
	var result = email.split(".", 1);
     firebase.database().ref('Comments/' + result).set({
            name : name,
            // id : id,
            email : email,
			comment : comment
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("Submission Done !");
            }
          });
 }	

//  var ref = "Comments/";
// var refRes = firebase.database().ref(ref);
// refRes.on('value', data => {
//   alldata = data.val();
//   if (alldata === null || alldata === undefined) {
//       console.log("No data found!");
//     } else {
//     keys = Object.keys(alldata);
//     //keys.reverse();
//     console.log(alldata);
//     console.log(keys);
//   }
// }, errHandle);


// function errHandle(e){
//   console.log(e);
// }

function getData() {
	var ref = "Comments/";
	var refRes = firebase.database().ref(ref);
	refRes.on('value', data => {
	alldata = data.val();
	if (alldata === null || alldata === undefined) {
		console.log("No data found!");
		} else {
		keys = Object.keys(alldata);
		//keys.reverse();
		console.log(alldata);
		console.log(keys);
	}
	}, errHandle);


}

function errHandle(e){
  console.log(e);
}