let globalButton = document.getElementById('globalButton');
let globalButton2 = document.getElementById('globalButton2');
globalButton.addEventListener('click',toggleGlobal);
globalButton2.addEventListener('click',toggleGlobal);

function toggleGlobal() {
    let globalSidebar = document.getElementById('global');
    globalSidebar.classList.toggle('global--has-global');
}

function openSupport() {
    window.open('support.html');
}