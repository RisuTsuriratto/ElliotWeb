document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('expand-news-button').addEventListener('click', function(e) {
        for (card of document.getElementsByClassName('card-vl')) {
            card.style.display = 'block';
        }
    });
});
