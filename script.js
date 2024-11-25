document.getElementById('more-info-btn').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Menos Informações';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Mais Informações';
    }
});
