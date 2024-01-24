function openBlog(blogPath) {
    console.log("Navigating to: ", blogPath);
    window.location.href = blogPath;
}

document.addEventListener("DOMContentLoaded", function () {
    var folder2 = document.querySelector('.folder2');

    folder2.addEventListener('click', function () {
        window.location.href = 'songs/index.html';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var folder2 = document.querySelector('.folder3');

    folder2.addEventListener('click', function () {
        window.location.href = 'That person/index.html';
    });
});