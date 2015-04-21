window.onscroll = changePos;

function changePos() {
    var navigation = document.getElementById("navigation");
    if (window.pageYOffset > 0) {
        navigation.style.position = "fixed";
        navigation.style.top = "0";
    } else {
        navigation.style.position = "";
        navigation.style.top = "";
    }
}window.onscroll = changePos;

// skrivanje galerije

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

