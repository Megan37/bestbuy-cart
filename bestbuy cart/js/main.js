$( document ).ready(function() {
    // alert("im workin here");

    var clickButton = function() {
        // console.log("I am clicked");
        var btnId = $(this).attr("id");
        console.log(btnId + " Has Been Clicked");
    }

    var hoverButton = function() {
        console.log("I've been hovered");
    }

    $(".warranty").click(clickButton).hover(hoverButton);
});
