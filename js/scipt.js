const mon = document.getElementById('mnth'),
    daySelect = document.querySelector('.days'),
    prevSelect = document.getElementById('prev'),
    nextSelect = document.getElementById('next');

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const renderCal = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),
        dateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = '';

    for (i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class='inactive'>${dateOfLastMonth - i + 1}</li>`
    }

    for (i = 1; i <= lastDateOfMonth; i++) {
        let isToady = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? 'active' : '';
        liTag += `<li class='${isToady}'>${i}</li>`
    }

    for (i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class='inactive'>${i - lastDayOfMonth + 1}</li>`
    }

    mon.innerText = `${months[currMonth]} ${currYear}`
    daySelect.innerHTML = liTag;
}

renderCal();

prevSelect.addEventListener('click', () => {
    currMonth = currMonth - 1;
    if (currMonth < 0) {
        date = new Date(currYear, currMonth);
        currMonth = date.getMonth();
        currYear = date.getFullYear();
    }
    renderCal();
})

nextSelect.addEventListener('click', () => {
    currMonth = currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currMonth = date.getMonth();
        currYear = date.getFullYear();
    }
    renderCal();
})

