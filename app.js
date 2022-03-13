const header = document.getElementById('header');

reloadPage();
hiddeHeader();

function reloadPage () {
    header.addEventListener('click', function (e) {
        let target = e.target;
    
        if (target.classList.contains('logo') || target.classList.contains('title')) {
            window.location.reload(true);
        }    
    });    
}

let lastScroll = window.scrollY;

function hiddeHeader () {
    window.addEventListener('scroll', function () {

        if (lastScroll < window.scrollY) {
            console.log(header.classList);
            header.classList.add('remove');
        } else {
            header.classList.remove('remove');
        }

        lastScroll = window.scrollY;
    })
}