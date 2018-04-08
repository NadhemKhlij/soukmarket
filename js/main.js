(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

})(jQuery);
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCva26pgGmrs67Btkoq0b_Bi4HoJFjeu0Q",
    authDomain: "projet1-a6224.firebaseapp.com",
    databaseURL: "https://projet1-a6224.firebaseio.com",
    projectId: "projet1-a6224",
    storageBucket: "",
    messagingSenderId: "78642863968"
  };
  firebase.initializeApp(config);
 //tkhalich l form t refrechi
 document.getElementById("submitform").addEventListener("submit",submitform);
 function submitform(e){
e.preventDefault();
var name = getValue("name");
var email = getValue("email");
var subject = getValue("subject");
var message = getValue("message");

console.log(name);
console.log(email);
console.log(subject);
console.log(message);
SaveMessage(name,email,subject,message);
document.getElementById("submitform").reset();

 }
 function getValue(champ)
 { return document.getElementById(champ).value }

 var messagesRef = firebase.database().ref('messages');
 function SaveMessage(name,email,subject,message)
{
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name : name,
		email : email,
		subject : subject,
		message: message
	});
	}
function myFunction() {
    alert("The form was submitted");
}
