const header = document.getElementById('header');
const expandButton = document.getElementById('expand-button-container');
const navBar = document.getElementById('nav-bar');

events();

function events() {
    reloadPage();
    hiddeHeader();
    showTheMenu();
    checkWidthSize();

    function reloadPage () {
        header.addEventListener('click', function (e) {
            let target = e.target;
        
            // if the target happens on the logo the page will reload
            if (target.classList.contains('logo') || target.classList.contains('title')) {
                window.location.reload(true);
            }    
        });    
    }

    function hiddeHeader () {
        // asign the value of current window.scrollY to the lastScroll variable
        let lastScroll = window.scrollY;
        
        checkLastScroll()
        
        function checkLastScroll () {
            window.addEventListener('scroll', function () {
                
                // if the value of lastScroll is less than the currernt winosw.scrollY, it means that the user is scrolling down, the header will be hidden, otherwise it means that he or she is scrolling up, the header is visible
                if (lastScroll < window.scrollY) {
                    header.classList.add('remove');
                } else {
                    header.classList.remove('remove');
                }
                
                // at the end of each execution of the function the value of window.scrollY will be saved in the lastScroll variable, for the next execution.
                lastScroll = window.scrollY;
            })
        }
    }

    function showTheMenu (e) {
        header.addEventListener('click', function (e) {
            let target = e.target;
            
            // check if the target happen on the icon for the menu.
            if (target.classList.contains('btn-expand') || target.classList.contains('expand-button-container')) {
                // check if the selected div goes to the header.
                if (target.parentElement.parentElement.parentElement.classList.contains('check-tag')) {
                    show();
                    rotateIcon();

                    function show () {
                        // if the navBar doesn't have a class of nav-bar-show set it to it,that make the menu to show up. If it does delete the class. Making the menu showing up and down. 
                        navBar.classList.toggle('nav-bar-show');
                
                        
                        if (navBar.classList.contains('nav-bar-show')) {
                            navBar.style.transition = '250ms';
                        } else {
                            navBar.style.transition = '250ms';
                        }
                        
                        setTimeout (
                            function () {
                                navBar.style.transition = '0ms';
                            }, 500
                        ) 

                        // navBar.style.transition = '0ms';

                        navBar.children[0].classList.toggle('nav-btn-container-opacity');
                        navBar.children[1].classList.toggle('nav-btn-container-opacity');
                        navBar.children[2].classList.toggle('nav-btn-container-opacity');
                    }

                    function rotateIcon () {
                        expandButton.classList.toggle('rotate-icon')
                    }
                // check if the other seleceted div goes to the header. 
                } else if (target.parentElement.parentElement.classList.contains('check-tag')){
                    show();
                    rotateIcon();
                    // removeTransition();

                    function show () {
                        navBar.classList.toggle('nav-bar-show');
                
                        if (navBar.classList.contains('nav-bar-show')) {
                            navBar.style.transition = '250ms';
                        } else {
                            navBar.style.transition = '250ms';
                        }
                        
                        setTimeout (
                            function () {
                                navBar.style.transition = '0ms';
                            }, 500
                        ) 

                        // navBar.style.transition = '0ms';

                        navBar.children[0].classList.toggle('nav-btn-container-opacity');
                        navBar.children[1].classList.toggle('nav-btn-container-opacity');
                        navBar.children[2].classList.toggle('nav-btn-container-opacity');
                    }

                    function rotateIcon () {
                        expandButton.classList.toggle('rotate-icon')
                    }
                }
            }
        })
    }

    function checkWidthSize () {
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 750) {
                if (navBar.classList.contains('nav-bar-show')) {
                    navBar.classList.remove('nav-bar-show');
                }
            } else {
                console.log('lower');
            }
        })
    }
};