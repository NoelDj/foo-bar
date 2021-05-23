"use strict";

window.addEventListener('DOMContentLoaded', init)

const orderedItems = []
function init() {

    loadData()
    selectDomElements()
    setPreviousData()
    console.log(orderedItems)
    console.log('ordered')


    localStorage.setItem("items", JSON.stringify(orderedItems));
}

function loadData() {
    const data = JSON.parse(localStorage.getItem("orderedItems"));
    orderedItems.push(...data)
    handleData(orderedItems)
    setPrice(orderedItems)
}

function setPreviousData(){

    localStorage.setItem("items", JSON.stringify(orderedItems));
    console.log(orderedItems)
}

function handleData(data) {
    data.forEach(appendProducts);
}


function appendProducts(product) {
    const copy = document.querySelector('template').content.cloneNode(true)

    console.log(product)
    copy.querySelector('.name').textContent = product.name + ' ' + product.size + ' ' + product.container
    copy.querySelector('.price').textContent = product.price * product.amount + ' DKK'
    copy.querySelector('img').src = '/images/' + product.label
    copy.querySelector('.orders').textContent = product.amount

    if(product.amount==1){
       copy.querySelector('[data-action=decrease]').style.opacity = .5
    }

    copy.querySelectorAll('.amount button').forEach(element => {
        element.addEventListener('click', (e) => {
            const target = e.target.dataset.action
            if (target == 'increase') {
                product.amount++
            } else {
                product.amount--
                if (product.amount == 0) {
                    product.amount = 1
                }
            }

            document.querySelector('main section').innerHTML = ''
            orderedItems.forEach(appendProducts);
            setPrice(orderedItems)

        })
    })


    copy.querySelector('.remove').addEventListener('click', () => {
        removeOrder(product)
       setPrice(orderedItems)
       setPreviousData()
    })
    document.querySelector('main section').appendChild(copy)
}

function changeAmount(copy, item) {
    console.log(copy.querySelector('.orders'))
}

function removeOrder(item) {
    console.log(item.name)

    const index = orderedItems.indexOf(item)
    console.log(index)
    if (index > -1) {
        orderedItems.splice(index, 1);
    } else {
        orderedItems = []
    }
    console.log(orderedItems)
    document.querySelector('main section').innerHTML = ''
    orderedItems.forEach(appendProducts)
}

function setPrice(data) {
    console.log(data)
    if (data.length > 0) {
        const map = data.map((string) => string.price*string.amount)
        const total = (map.reduce((a, b) => a + b))
        document.querySelector('.total').textContent = total
    } else {
        document.querySelector('.total').textContent = 0
    }

}

function selectDomElements() {}
