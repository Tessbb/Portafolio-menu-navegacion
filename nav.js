fetch('nav.html')
.then(res => res.text())
.then(text => {
    document.getElementById('navbar-placeholder').innerHTML = text;
});
