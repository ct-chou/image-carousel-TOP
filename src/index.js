import "./style.css";

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const nextDivSibling =(element) => {
    let sibling = element.nextElementSibling;
    while (sibling) {
        if (sibling.tagName === "DIV") {
            return sibling;
        }
        sibling = sibling.nextElementSibling;
    }
}

const prevDivSibling = (element) => {
    let sibling = element.previousElementSibling;
    while (sibling) {
        if (sibling.tagName === "DIV") {
            return sibling;
        }
        sibling = sibling.previousElementSibling;
    }
}

const getChildIndex = (element) => {
    let index = 0;
    let sibling = element.parentNode.firstElementChild;

    while (sibling) {
        if (sibling === element) {
            return index;
        }
        index++;
        sibling = sibling.nextElementSibling;
    }

    return -1; // Return -1 if the element is not found
};

const refreshDot = (index) => {
    const activeDot = document.querySelector(".dot.active");
    activeDot.classList.remove("active");
    const naviDots = document.querySelector(".navi-dots");
    const newActiveDot = naviDots.children[index];
    newActiveDot.classList.add("active");
}

nextBtn.addEventListener("click", () => {
    const current = document.querySelector(".current");
    const next = nextDivSibling(current);
    
    if (next) {
        current.classList.remove("current");
        current.classList.add("hide");
        next.classList.add("current");
        next.classList.remove("hide");
        const index = getChildIndex(next);
        refreshDot(index);
    } else {
        console.log("No subsequent image");
    }
});

prevBtn.addEventListener("click", () => {
    const current = document.querySelector(".current");
    const prev = prevDivSibling(current);

    if (prev) {
        current.classList.remove("current");
        current.classList.add("hide");
        prev.classList.add("current");
        prev.classList.remove("hide");
        const index = getChildIndex(prev);
        refreshDot(index);
    } else {
        console.log("No previous image");
    }
});

const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        const current = document.querySelector(".current");
        current.classList.remove("current");
        current.classList.add("hide");
        const carouselContainer = document.querySelector(".carousel-container");
        const selection = carouselContainer.children[index];
        selection.classList.add("current");
        selection.classList.remove("hide");
        refreshDot(index);
    });
});
