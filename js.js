const DesktopMenu = document.querySelector(".desktop-menu");
const EmailMenu = document.querySelector(".navbar-email");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerMenu = document.querySelector(".menu");




/*aside controls */ 
const shoppingC = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

EmailMenu.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
shoppingC.addEventListener('click', toggleDesktopCart);



function toggleDesktopMenu() {
    const isDesktopMenu = EmailMenu.classList.contains("inactive");
    if(!isDesktopMenu){
        aside.classList.add("inactive");
    }

     DesktopMenu.classList.toggle("inactive");
}


function toggleMobileMenu(){

    const isMobileMenu = aside.classList.contains("inactive");

    if(!isMobileMenu){
        aside.classList.add("inactive");

    }
    mobileMenu.classList.toggle("inactive");
}



function toggleDesktopCart() {

    const isShopCart = mobileMenu.classList.contains("inactive");

    if(!isShopCart){
        mobileMenu.classList.add("inactive");

    }

    aside.classList.toggle("inactive");

}
