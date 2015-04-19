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


// gallery
$(document).ready(function() {
    $("#single_1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });

    $("#single_2").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });

    $("#single_3").fancybox({
    	openEffect : 'none',
    	closeEffect	: 'none',
    	helpers : {
    		title : {
    			type : 'outside'
    		}
    	}
    });

    $("#single_4").fancybox({
    	helpers : {
    		title : {
    			type : 'over'
    		}
    	}
    });
});

$(document).ready(function() {
				$(".fancybox").fancybox();
			});
