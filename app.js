const html = document.querySelector('html');
const header = document.getElementById('header');
const expandButton = document.getElementById('expand-button-container');
const navBar = document.getElementById('nav-bar');
const menuButtonsArray = [navBar.children[0], navBar.children[1], navBar.children[2]];

events();

function events() {
    loadContnet();
    reloadPage();
    hiddeHeader();
    showTheMenu();
    checkWidthSize();
    hiddeMenuWhencClicked();

    function loadContnet () {
        window.addEventListener('load', () => {
            window.scrollTo(0, 0);
        })
    }

    function reloadPage () {
        header.addEventListener('click', function (e) {
            let target = e.target;
        
            // if the target happens on the logo the page will reload
            if (target.classList.contains('logo') || target.classList.contains('title')) {
                window.location.reload(true);
                window.scrollTo(0, 0);
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
        header.addEventListener('click', function (event) {
            let target = event.target;
            
            // check if the target happen on the icon for the menu.
            if (target.classList.contains('btn-expand') || target.classList.contains('expand-button-container')) {
                // check if the selected div goes to the header.
                if (target.parentElement.parentElement.parentElement.classList.contains('check-tag')) {
                    show();
                    rotateIcon();

                    function show () {
                        // if the navBar doesn't have a class of nav-bar-show set it to it,that make the menu to show up. If it does delete the class. Making the menu showing up and down. 
                        navBar.classList.toggle('nav-bar-show');
                
                        // if the navBar have that class set it's transition to 250ms.
                        if (navBar.classList.contains('nav-bar-show')) {
                            navBar.style.transition = '250ms';
                        // if it doesn't have set the transition to 250ms also.
                        } else {
                            navBar.style.transition = '250ms';
                        }
                        
                        // after the navBar shown or dissapeared with the transition applied to it the transition get back to its original value, 0ms, to not affect the rest of the animation of the navBar when the screen get bigger.
                        setTimeout (
                            function () {
                                navBar.style.transition = '0ms';
                            }, 500
                        ) 

                        // Loop to every button and set the opacity back to 0;
                        menuButtonsArray.forEach( element => {
                            element.classList.toggle('nav-btn-container-opacity');
                        });
                    }

                    function rotateIcon () {
                        expandButton.classList.toggle('rotate-icon')
                    }
                // check if the other seleceted div goes to the header. 
                } else if (target.parentElement.parentElement.classList.contains('check-tag')){
                    show();
                    rotateIcon();

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

                        menuButtonsArray.forEach( element => {
                            element.classList.toggle('nav-btn-container-opacity');
                        });
                    }

                    function rotateIcon () {
                        expandButton.classList.toggle('rotate-icon')
                    }
                }
            }
        })
    }

    function hiddeMenuWhencClicked () {
        navBar.addEventListener('click', function (event) {
            let target = event.target;
            console.log(target);

            // If the target of the function happens on the buttons hidde the navBar and set the opacity of the buttons back to 0.
            if (target.classList.contains('nav-btn-container') || target.classList.contains('nav-link')) {
                navBar.classList.toggle('nav-bar-show');

                menuButtonsArray.forEach ( element => {
                    element.classList.toggle('nav-btn-container-opacity');
                })
            }
        });
    }

    function checkWidthSize () {
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 750) {
                // Check when the screen get bigger than 750px if the navBar has the class of nav-bar-show, meaning that it is vissible for the user, if it is hidde the navBar.
                if (navBar.classList.contains('nav-bar-show')) {
                    navBar.classList.remove('nav-bar-show');

                    menuButtonsArray.forEach( element => {
                        element.classList.toggle('nav-btn-container-opacity');
                    })
                }
            }
        })
    }
};