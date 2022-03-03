document.addEventListener("DOMContentLoaded", function() {
    let expandNewsBtn = document.getElementById('expand-news-button')
    let ids = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'];
    
    expandNewsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        for (let card of document.getElementsByClassName('card-vl')) {
            if (ids.includes(card.id)) {
                card.classList.toggle('hidden');
            }
        }
        expandNewsBtn.childNodes[1].textContent = expandNewsBtn.childNodes[1].textContent === 'expand_more' ? 'expand_less' : 'expand_more'; 
    });

    // Dropdown nav.

    let btn = document.getElementById('menu-collapse-button');
    let nav = document.getElementById('hamburger-nav');

    nav.style.display = 'none';
    btn.addEventListener('click', function(e) {
        
        let newDisplay = 'none';
        let menuIcon = 'menu';

        if (nav.style.display == 'none') {
            newDisplay = 'flex';
            menuIcon = 'clear';
        }
        
        nav.style.display = newDisplay;

        for (let child of btn.childNodes) {
            if (child.localName == 'span') {
                child.textContent = menuIcon;
            }
        }

    });

});
