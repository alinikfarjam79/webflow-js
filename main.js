// import { scroll } from "./motion";\
const { animate, scroll } = Motion;

let headerMen = document.querySelectorAll('header > nav > ul > li');
let body = document.querySelector('body');
let TextMotion = document.querySelector('.text');
// const { animate, scroll } = window.Motion;
const motionSections = document.querySelectorAll('.cont')
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

// motion
// scroll(animate(".progress", { scaleX: [0, 1] }, { ease: "linear" }));
// motionSections.forEach((section) => {
// section.classList.add('cont');
//     const header = section.querySelector("h2")
//     scroll(animate(header, { y: [-400, 400] }, { ease: "linear" }), {
//         target: header,
//     })
// })
// 


// motion sections
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            // entry.target.style.scale = "0.7"
            if (entry.isIntersecting) {
                entry.target.classList.add('cont2')
                const header = entry.target.querySelector("h2");

                if (header) {
                    // entry.target.style.scale = "0.7"
                    // header.style.opacity = "0";
                    // header.style.transform = "translateY(100px)";

                    animate(header,
                        { opacity: 1, y: 0 },
                        { ease: "easeOut", duration: 1 }
                    );
                    // animate(entry.target, { transform: ["scale(0.7)", "scale(1)"] }, { ease: 'linear', duration: 0.7 })

                    // observer.unobserve(entry.target);
                }
            } else {
                entry.target.classList.remove('cont2')
            }
        });
    },
    { threshold: 0.4 }
);

motionSections.forEach((section) => observer.observe(section));


//motion text section 
const ob = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                const p = entry.target.querySelectorAll("p");
                console.log(p);

                if (p) {
                    p.forEach((par, index) => {
                        if (index == 0) {
                            scroll(animate(par,
                                { left: [0, -800], },
                                { ease: "easeOut", duration: 0.1 }
                            ))
                        } else {
                            scroll(animate(par,
                                { right: [-800, -1100], },
                                { ease: "easeOut", duration: 0.1 }
                            ))
                        }
                    })

                    // animate(header,
                    //     { opacity: 1, y: 0 },
                    //     { ease: "easeOut", duration: 1 }
                    // );
                    // animate(entry.target, { transform: ["scale(0.7)", "scale(1)"] }, { ease: 'linear', duration: 0.7 })

                    // observer.unobserve(entry.target);
                }
            } else {
                entry.target.classList.remove('cont2')
            }
        });
    },
    { threshold: 0.2 }
);
ob.observe(TextMotion)
// motionSections.forEach((section) => );
