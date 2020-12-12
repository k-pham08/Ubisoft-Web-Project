function langClick(){
    document.getElementById('lang-button').classList.toggle('active-lang');
    document.getElementById('vn-button').classList.toggle('langdown');
}
function searchClick(){
    document.querySelector("#input-search").classList.toggle("search-active");
}
function preloadInit(){
    const preload = document.querySelector(".preloader");
    const body = document.querySelector("html");
    const main = document.querySelector(".main");
    setTimeout(() => {
        preload.style.opacity = 0;
        preload.style.zIndex = -30;
        body.style.overflowY = 'visible';
        main.style.opacity = 1;
    }, 4000);
}
preloadInit();