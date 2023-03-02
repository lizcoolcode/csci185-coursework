const scrollElements = document.querySelectorAll(".scroll-element");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};


const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 1.25)) {
            el.classList.add("scrolled");
        } 
        else if (elementOutofView(el)) {
            el.classList.remove("scrolled");
        }
    })
}

window.addEventListener("scroll", handleScrollAnimation);