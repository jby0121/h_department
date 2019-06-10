window.onload = function(){
    //lang click start//
    var lang = document.querySelector(".lang");
    lang.addEventListener("click", langWork);
    function langWork (e) {
        e.preventDefault();
        var langBtn = lang.querySelector("span > a");
        if (e.target.text !== "KR") {
            return;
        };
        if (lang.classList.contains("active")) {
            lang.classList.remove("active");
        } else {
            lang.classList.add("active");
        };
    }
    //lang click end//
    
    
    //메뉴 start//
    var navMenu = document.querySelectorAll(".nav > li");
    for (var i = 0; i < navMenu.length; i++) {
        navMenu[i].addEventListener("mouseenter", openWork);
        navMenu[i].addEventListener("mouseleave", closeWork);
    }
   
    var targetDiv = document.querySelector(".wrap");
    var shadow = document.createElement("div");
    
    function openWork (e) {   
        e.currentTarget.classList.add("active");

        targetDiv.appendChild(shadow);
        shadow.style.position = "absolute";
        shadow.style.top = "168px";
        shadow.style.bottom = "0";   
        shadow.style.left = "0";
        shadow.style.right = "0";
        shadow.style.backgroundColor = "rgba(0,0,0,0.5)";
        shadow.style.zIndex = "400";
    }
    function closeWork (e) {
        e.currentTarget.classList.remove("active");
        targetDiv.removeChild(shadow);
    }
    //메뉴 end//

    //shopping_mall start//
    var shopMallList = document.querySelector(".shopping_mall");
    shopMallList.addEventListener("click", shopMallWork);
    function shopMallWork (e) {
        e.preventDefault();
        var shopMallBtn = shopMallList.querySelector("span > a");
        if (e.target !== shopMallBtn) {
            return;
        } 
        if (shopMallList.classList.contains("active")) {
            shopMallList.classList.remove("active");
        } else {
            shopMallList.classList.add("active");
        }
    }
    //shopping_mall end//

    //scrolll Work start//
    var htmlElem = document.querySelector("html");
    var goTop = document.querySelector(".go_to_top");
    document.addEventListener("scroll", scrollWork);
    function scrollWork () {
        var scrollHight = htmlElem.scrollTop
        if (scrollHight > 3) {
                shopMallList.style.display = "none";
        } else if (scrollHight < 3) {
                shopMallList.style.display = "";
        };
        if (scrollHight > 165) {
            goTop.style.display = "block";
        } else if (scrollHight < 165) {
            goTop.style.display = "";
        };
        if (scrollHight > 1820) {
            goTop.style.bottom = "360px";
        } else if (scrollHight < 1820) {
            goTop.style.bottom = "";
        };
    }
    //scrolll Work end//
        
    //family_site click start//
    var fSite = document.querySelector(".family_site");
    fSite.addEventListener("click", fSiteWork);
    function fSiteWork (e) {
        e.preventDefault();
        var fSiteBtn = fSite.querySelector("span > a");
        if (e.target !== fSiteBtn) {
            return;
        } 
        if (fSite.classList.contains("active")) {
            fSite.classList.remove("active");
        } else {
            fSite.classList.add("active");
        }
    }     
    //family_site click end//    
    


}




