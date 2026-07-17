let roughelement = document.getElementById("rough");
let smoothelement = document.getElementById("smooth");
let boxelement = document.getElementById("box");
let wheelelement = document.getElementById("wheel");


function roughless(){
    roughelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657901935/ezgif-3-fcdf3ec1d4.gif_a6cm5z.gif";
}

function roughhigh(){
    roughelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657901924/ezgif-5-2cf5e45354.gif_tqnpxi.gif";
}

function roughstop(){
    roughelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657902194/7428d0b7d9f24fb9affa7ce65858c48brK4oO3A7j0EkGkdO-0_fpa3fz.jpg";
}

function smoothless(){
    smoothelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657901924/ezgif-5-2cf5e45354.gif_tqnpxi.gif";
}

function smoothhigh(){
    smoothelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657901101/ezgif-3-3679d05a9a.gif_patmvj.gif";
}

function smoothstop(){
    smoothelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657902194/7428d0b7d9f24fb9affa7ce65858c48brK4oO3A7j0EkGkdO-0_fpa3fz.jpg";
}

function boxless(){
    boxelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657901935/ezgif-3-fcdf3ec1d4.gif_a6cm5z.gif";
}

function boxhigh(){
    boxelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657901101/ezgif-3-3679d05a9a.gif_patmvj.gif";
}

function boxstop(){
    boxelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657902194/7428d0b7d9f24fb9affa7ce65858c48brK4oO3A7j0EkGkdO-0_fpa3fz.jpg";
}

function wheelless(){
    wheelelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657901946/ezgif.com-gif-maker.gif_uxioon.gif";
}

function wheelhigh(){
    wheelelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657901953/ezgif.com-gif-maker-_1_.gif_klsvav.gif";
}

function wheelstop(){
    wheelelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657902205/18c93a32ed7649f5c83ba3e26e615605Ae7D8Ft7hq18Gqxz-0_kfkfxx.jpg";
}

function boxmedium(){
    boxelement.src = "https://res.cloudinary.com/djzdkmfjh/image/upload/v1657901924/ezgif-5-2cf5e45354.gif_tqnpxi.gif";
}

function displaysecondpage(){
    document.getElementById("mainpage").classList.add("content-hide")
    document.getElementById("secondpage").classList.remove("content-hide")
}

function displaymainpage(){
    document.getElementById("mainpage").classList.remove("content-hide")
    document.getElementById("secondpage").classList.add("content-hide")
}