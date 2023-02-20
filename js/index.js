console.log("The file is loaded correctly!");

$(document).ready(function(){
    $("#home").mouseenter(function(){
        console.log("Home hovered");
        $("#homelink").css("color","#AAAAAA");
    });

    $("#home").mouseleave(function(){
        console.log("Home Left");
        $("#homelink").css("color","#000000");
    });

    $("#portfolio").mouseenter(function(){
        console.log("Portfolio hovered");
        $("#portfoliolink").css("color","#AAAAAA");
    });

    $("#portfolio").mouseleave(function(){
        console.log("Portfolio Left");
        $("#portfoliolink").css("color","#000000");
    });

    $("#blog").mouseenter(function(){
        console.log("Blog hovered");
        $("#bloglink").css("color","#AAAAAA");
    });

    $("#blog").mouseleave(function(){
        console.log("Blog Left");
        $("#bloglink").css("color","#000000");
    });

    $("#contact").mouseenter(function(){
        console.log("Contact hovered");
        $("#contactlink").css("color","#AAAAAA");
    });

    $("#contact").mouseleave(function(){
        console.log("Contact Left");
        $("#contactlink").css("color","#000000");
    });

    $("#PortfolioButton").click(function(){
        alert("The page is not yet ready");
    });
});

