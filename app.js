const header = document.getElementById('header');

header.addEventListener('click', function (e) {
    let target = e.target;

    if (target.classList.contains('logo') || target.classList.contains('title')) {
        window.location.reload(true);
    }    
});