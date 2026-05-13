const boxitems = document.querySelectorAll('.boxitems')
const left = document.querySelectorAll('.left')
const center = document.querySelectorAll('.center')
// const center2 = document.querySelectorAll('center2')
const right = document.querySelectorAll('.right')


const observer = new IntersectionObserver((values) => {
    values.forEach((values) => {
        if (values.isIntersecting) {
            values.target.classList.add("firstgroup");
        }
    })
}, { threshold: 0.3 })
left.forEach(boxitems => observer.observe(boxitems));

const observer2 = new IntersectionObserver((values) => {
    values.forEach((values) => {
        if (values.isIntersecting) {
            values.target.classList.add("thirdgroup");
        }
    })
}, { threshold: 0.3 })
right.forEach(boxitems => observer.observe(boxitems));

const observer3 = new IntersectionObserver((values) => {
    values.forEach((values) => {
        if (values.isIntersecting) {
            values.target.classList.add("thirdgroup");
        }
    })
}, { threshold: 0.3 })
center.forEach(boxitems => observer.observe(boxitems));

