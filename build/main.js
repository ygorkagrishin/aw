var menu=function(){var a=$("body"),t=a.find(".js-b-menu"),i=a.find(".js-nav"),n=i.find("li > a"),c=a.find(".js-sect"),e=i.find(".js-nav__close-trigger");function s(){if(i.hasClass("active"))return i.removeClass("active")}t.click(function(){if(!i.hasClass("active"))return i.addClass("active")}),e.click(s),n.click(function(a){a.preventDefault();var t,i=$(this).attr("data-sect");c.each(function(a,n){var c=$(this);if(c.attr("data-anchor")===i)return t=c.offset().top}),s(),$("html,body").animate({scrollTop:t},700)})}();
var search=void $(".header__search").click(function(){console.log("open")});