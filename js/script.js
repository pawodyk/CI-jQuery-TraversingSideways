$(document).ready(function() {
    $("#button1").click(function() {
        $(this).next().slideToggle("slow");
        console.log("click click");
    });
});