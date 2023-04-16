/* szebb functionbe kell majd tenni, ahogy minden anchoron végigmegy és listenert ad */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

const bar = document.getElementsByClassName('bar')[0]
const menu = document.getElementsByClassName('right-nav')[0]

bar.addEventListener('click', () => {
        menu.classList.toggle('active')
})
