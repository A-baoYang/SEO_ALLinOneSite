$(document).ready(function() {
    $('.dropdown a.dropdown-toggle').on("hover", function(e){
        $(this).this('ul').toggle();
        e.stopProagation();
        e.preventDefault();
    });
});