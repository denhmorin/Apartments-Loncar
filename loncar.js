$(document).ready(function () {
	$(window).scroll(function(){
			var window_top = $(window).scrollTop(); 
			// the "12" should equal the margin-top value for nav.stickydiv
			var div_top = $('#checkdiv').offset().top;
			if (window_top >= div_top) {
					$('nav').addClass('stickydiv');
				} else {
					$('nav').removeClass('stickydiv');
				}
		});  

// skrivanje galerije

<<<<<<< HEAD
	  $(document).on("scroll", onScroll);
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
		  
			var target = this.hash,
				menu = target;
			$target = $(target);
		   $('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 600, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
=======
		$(document).ready(function sakrij(){
		  $('#klik_svi').click(function() {
		  $('#slike_mali').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_veliki').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_dvoriste').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_novalja').animate({opacity: '0.2'}).slideUp('slow');

		  $('#slike_svi').slideDown('slow').animate({opacity: '0.8'});
		});
		}); 
		$(document).ready(function sakrij(){
		  $('#klik_mali').click(function() {
		  $('#slike_svi').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_veliki').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_dvoriste').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_novalja').animate({opacity: '0.2'}).slideUp('slow');

		  $('#slike_mali').slideDown('slow').animate({opacity: '0.8'});
		});
		}); 
		$(document).ready(function sakrij(){
		  $('#klik_veliki').click(function() {
		  $('#slike_svi').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_mali').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_dvoriste').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_novalja').animate({opacity: '0.2'}).slideUp('slow');

		  $('#slike_veliki').slideDown('slow').animate({opacity: '0.8'});
		});
		}); 
		$(document).ready(function sakrij(){
		  $('#klik_dvoriste').click(function() {
		  $('#slike_svi').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_mali').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_veliki').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_novalja').animate({opacity: '0.2'}).slideUp('slow');

		  $('#slike_dvoriste').slideDown('slow').animate({opacity: '0.8'});
		});
		}); 
		$(document).ready(function sakrij(){
		  $('#klik_novalja').click(function() {
		  $('#slike_svi').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_mali').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_veliki').animate({opacity: '0.2'}).slideUp('slow');
		  $('#slike_dvoriste').animate({opacity: '0.2'}).slideUp('slow');

		  $('#slike_novalja').slideDown('slow').animate({opacity: '0.8'});
		});
		}); 
		
// označavanje aktivne navigacije u galeriji

$(document).ready(function(){
	$('#gallery_nav li ').click(function(e) {
        e.preventDefault();
        $('li').removeClass('active');
        $(this).addClass('active');
    });
	
});
>>>>>>> origin/master

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    
	$('#navigation a').each(function () {
        var currLink = $(this);
		var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navigation ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
