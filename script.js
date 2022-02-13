document.addEventListener("DOMContentLoaded", function() {
    let expandNewsBtn = document.getElementById('expand-news-button')
    let ids = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'];
    
    expandNewsBtn.addEventListener('click', function(e) {
        let icon = 'expand_more';
        for (let card of document.getElementsByClassName('card-vl')) {
            if (ids.includes(card.id)) {
                if (card.style.display == 'none') {
                    card.style.display = 'block';
                    icon = 'expand_less';
                } else {
                    card.style.display = 'none';
                    icon = 'expand_more';
                }
            }
        }

        expandNewsBtn.childNodes[1].textContent = icon;
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