window.onload = function load(){
    let currentYear = new Date().getFullYear()
    let location = document.getElementById('copyrightText');
    location.textContent = 'Copyright © Zachary Gopinath ' + currentYear;

    document.getElementById('toastId').style.opacity = '0'
    document.getElementById('outputContainer').style.opacity = '0'
}
