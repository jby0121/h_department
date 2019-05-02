
window.onload = function(){
    //slider
    $('.poutlet_slider').bxSlider({
        auto:true, speed:500, autoControls: true
    });

    //branch menu scroll work
    var htmlElem = document.querySelector("html");
    var branchMenu = document.querySelector(".branch_more");
    
    document.addEventListener("scroll", scrollWork);
    
    function scrollWork () {
        var scrollHight = htmlElem.scrollTop;
        if (scrollHight > 168) {
            branchMenu.style.display = "block";
        } else if (scrollHight < 168) {
            branchMenu.style.display = "";
        };
    }
}

