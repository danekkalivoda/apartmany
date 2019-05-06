import lozad from 'lozad';

(function() {
    const observer = lozad('.lozad', {
        load: function(el) {
            el.src = el.dataset.src;
            el.onload = function() {
                el.classList.add('opacity-100');
                el.nextElementSibling.classList.add('opacity-0');
            }
        },
        rootMargin: '10px 0px', // syntax similar to that of CSS Margin
        threshold: 0.1 // ratio of element convergence
    });
    observer.observe();
})();


function toggleClass(el, className){
    el.classList.toggle(className);
}

window.onload = function(){ 
    
    let body = document.getElementsByTagName('body')[0];
    let menuToggle = document.getElementById('menu-toggle');
    let menu = document.getElementById('menu');

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