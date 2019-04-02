$(".open-slide").on("click", function(){
    $("i.fa-bars").css("visibility", "hidden")
    $("i.fa-times").css("visibility","visible")
    $(".side-nav").css("width","250px")
})
$(".close-slide").on("click", () => {
    $("i.fa-bars").css("visibility", "visible")
    $("i.fa-times").css("visibility","hidden")
    $(".side-nav").css("width","0px")
})
$(".side-nav a").on("click", ()=>{
    $("i.fa-bars").css("visibility", "visible")
    $("i.fa-times").css("visibility","hidden")
    $(".side-nav").css("width","0px");
})