function toggleClass(el, className){
    el.classList.toggle(className);
}

window.onload = function(){ 
    
    body = document.getElementsByTagName('body')[0];
    menuToggle = document.getElementById('menu-toggle');
    menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function(event) {
        toggleClass(menu, 'hidden');
        toggleClass(menuToggle, 'opened');
        event.stopPropagation();
    });
    body.addEventListener('click', function(event){
        if (menuToggle.classList.contains("opened")) {
            menu.classList.add("hidden")
            menuToggle.classList.remove("opened")
        }
    })

}