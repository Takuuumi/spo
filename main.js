// const menuIcon = document.querySelector('.hamburger-menu');
// const navbar = document.querySelector('.navbar')
// menuIcon.addEventListener('click', () => {
//     navbar.classList.toggle('change')
// });
// function sample(){
//     document.getElementById("area1").innerText = "閉じる";
// }
const btn = document.getElementById('btn');
const wrapper = document.getElementById('wrapper');
// const box = document.querySelectorAll('.sixth-box');
btn.addEventListener('click', () => {
    wrapper.classList.toggle('change');
});
