'use strict'

const burgerButton = document.querySelector('.burger');
const menuItems = document.querySelector('.menu');

burgerButton.addEventListener('click', () => {
    menuItems.classList.toggle("menu__visible");
})