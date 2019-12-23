$(".main>li").mouseover(function(){
    $(".submenu").stop().slideDown();
});
$(".main>li").mouseleave(function(){
    $(".submenu").stop().slideUp();
});

setInterval(function(){
    $(".slideimg").delay(2300);
    $(".slideimg").animate({marginTop:"-300px"},"700");
    $(".slideimg").delay(2300);
    $(".slideimg").animate({marginTop:"-600px"},"700");
    $(".slideimg").delay(2300);
    $(".slideimg").animate({marginTop:"0px"},"700");
});

$("#NoticeBTN").click(function(){
    $("#Notice").show();
    $("#NoticeBTN").css({color:"#222328"});
    $("#Gallery").hide();
    $("#GalleryBTN").css({color:"lightgray"});
})
$("#GalleryBTN").click(function(){
    $("#Gallery").show();
    $("#GalleryBTN").css({color:"#222328"});
    $("#Notice").hide();
    $("#NoticeBTN").css({color:"lightgray"});
})

$("#NoticeBTN").focus(function(){
    $("#Notice").show();
    $("#NoticeBTN").css({color:"#222328"});
    $("#Gallery").hide();
    $("#GalleryBTN").css({color:"lightgray"});
})
$("#GalleryBTN").focus(function(){
    $("#Gallery").show();
    $("#GalleryBTN").css({color:"#222328"});
    $("#Notice").hide();
    $("#NoticeBTN").css({color:"lightgray"});
})

$(".onClick").click(function(){
    $("#modal").show();
});
$("#modalcontent>button").click(function(){
    $("#modal").hide();
});