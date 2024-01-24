document.addEventListener("DOMContentLoaded", function () {
    var nextPageLink = document.getElementById('next-page-link');

    nextPageLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '../../blogs/february/content2.html';
    });
});






