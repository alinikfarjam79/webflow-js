let headerMen = document.querySelectorAll('header > nav > ul > li');
let body = document.querySelector('body');

// header 
body.addEventListener('click', function () {
    headerMen.forEach((menu, menuindex) => {
        menu.setAttribute('data-status', 'close');
        menu.children[1].style.visibility = 'hidden';
        menu.children[1].style.opacity = '0';
        menu.children[1].style.display = 'none';
    })
})
headerMen.forEach((item, index) => {

    item.addEventListener('click', (e) => {
        e.stopPropagation()
        let status = item.getAttribute('data-status');
        if (status == 'open') {
            status = 'close';
        } else if (status == 'close') {
            status = 'open';
        }

        item.setAttribute('data-status', status);
        headerMen.forEach((menu, menuindex) => {
            if (menuindex != index) {
                menu.setAttribute('data-status', 'close');
                menu.children[1].style.visibility = 'hidden';
                menu.children[1].style.opacity = '0';
                menu.children[1].style.display = 'none';
            }
        })
        if (item.getAttribute('data-status') == 'open') {


            // item.children[1].classList.remove('hidden');
            item.children[1].style.visibility = 'visible';
            // item.children[1].classList.remove('opacity-0');
            item.children[1].style.opacity = '1';
            item.children[1].style.display = 'flex';

            // item.children[1].classList.add('visible');
            // item.children[1].classList.add('opacity-1');
            // item.children[1].classList.add('flex');
        } else if (item.getAttribute('data-status') == 'close') {

            // item.children[1].classList.remove('visible', 'opacity-1', 'flex');
            // item.children[1].classList.add('hidden', 'opacity-0');
            item.children[1].style.visibility = 'hidden';
            // item.children[1].classList.remove('opacity-0');
            item.children[1].style.opacity = '0';
            item.children[1].style.display = 'none';

        }
    })
})