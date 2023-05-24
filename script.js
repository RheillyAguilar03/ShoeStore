
const menuButton = document.getElementById('menu-button')
const exitButton = document.getElementById('exit-button')
const menuLinks = document.getElementById('menu-links')
const navigation = document.getElementById('navigation')

menuButton.onclick = () => {
    menuLinks.classList.add('show')
    menuButton.classList.add('conceal')
    exitButton.classList.add('appear')
}


exitButton.onclick = () => {
    menuLinks.classList.remove('show')
    menuButton.classList.remove('conceal')
    exitButton.classList.remove('appear')
}

window.onscroll = () => {
    this.scrollY > 20 ? navigation.classList.add('sticky') : navigation.classList.remove('sticky')
}


const productInfo = document.querySelector('.product-info')
const list = document.querySelectorAll('.list')
const item = document.querySelectorAll('.item')

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for(let x = 0;  x < list.length; x++) {
            list[x].classList.remove('active')
        }
        this.classList.add('active')
        const dataFilter = this.getAttribute('data-filter')

        for(let y = 0; y < item.length; y++) {
            item[y].classList.add('hide')
            item[y].classList.remove('active')
            productInfo.innerHTML = "Best Seller"

            if(item[y].getAttribute('data-item') === dataFilter) {
                item[y].classList.add('active')
                item[y].classList.remove('hide')
                productInfo.innerHTML = "New Arrival"
            } else if (dataFilter === "all") {
                item[y].classList.remove('hide')
                productInfo.innerHTML = ""
            }
        }
    })
}




const addtoCart = document.querySelectorAll('.add')
const cartNumber = document.querySelector('.cartNumber')
let cart = 0 

for(add of addtoCart) {
    //console.log('click')
    add.addEventListener('click', (e) => {
        cart += 1
        cartNumber.innerHTML = cart
    })
}