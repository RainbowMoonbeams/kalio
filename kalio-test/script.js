$(document).ready(function(){
    $("#FF0000").mouseover(function(){
        $(this).css("background", "red");
    });
    $("#FF0000").mouseout(function(){
        $(this).css("background", "white");
    });
    $("#0000FF").mouseover(function(){
        $(this).css("background", "blue");
    });
    $("#0000FF").mouseout(function(){
        $(this).css("background", "white");
    });
    $("#00FF00").mouseover(function(){
        $(this).css("background", "green");
    });
    $("#00FF00").mouseout(function(){
        $(this).css("background", "white");
    });
});
