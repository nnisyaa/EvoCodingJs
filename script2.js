const table = document.querySelector('.currency');
const changesColumn = table.querySelectorAll('td:nth-child(5)');
changesColumn.forEach(function(cell) {
    if (parseFloat(cell.textContent) < 0) {
        cell.classList.add('decrease');
    }else{
        cell.classList.add('increase');
    }
});
