let container = document.querySelector('.main-content__content__items'),
    pagination = document.querySelector('.main-content__content__pagination > ul'),
    clearList = document.querySelector('.main-content__content__button > button'),
    input = document.querySelector('.main-content__content__button > input');


let state = {},
    globalCurrentPage = 1;


    let request = new XMLHttpRequest();
    request.open('GET', '../index.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            state = JSON.parse(request.response);
            console.log(state);
            globalCurrentPage = 1;
            render();
        }
    });



function printPagination(currentPage) {
    pagination.innerHTML = '';
    if (!state) return;
    if ((currentPage * 8) - 8 >= state.length) {
        globalCurrentPage--;
        return render();
    }
    for (let i = 1; i <= Math.ceil(state.length / 8); i++)
        pagination.innerHTML += `
        <li class="${(i === currentPage) ? 'main-content__content__pagination_active' : ''}">${i}</li>
        `;
};

function printCollection(currentPage) {
    container.innerHTML = '';
    if (state == false) return;
    for (let i = (currentPage * 8) - 8; i < state.length && i < (currentPage * 8); i++)
        container.innerHTML += `
        <div class="main-content__content__items__item">
            <div class="main-content__content__items__item__img">
                <img src="img/${state[i].photo}" alt="">
            </div>
            <div class="main-content__content__items__item__text">
                <hr>
                    <h3>${state[i].name}</h3>
                    <p>${state[i].price} <span>${state[i].lowerPrice}</span></p>
            </div>
            <div class="main-content__content__items__item__buttons">
                <div><i class="fa fa-trash"></i></div>
                <div><i class="fa fa-shopping-cart"></i></div>
            </div>
        </div>`;
}

function startObserving() {
    pagination.addEventListener('click', paginationObserver);
    container.querySelectorAll('.fa-trash').forEach(el => el.parentElement.addEventListener('click', delObserver));
    clearList.addEventListener('click', clearButtonObserver);
    input.addEventListener('input', searchObserver);
}

function stopObserving() {
    pagination.removeEventListener('click', paginationObserver);
    container.querySelectorAll('.fa-trash').forEach(el => el.parentElement.removeEventListener('click', delObserver));
    clearList.removeEventListener('click', clearButtonObserver);
    input.removeEventListener('input', searchObserver);
}

function paginationObserver(event) {
    if (event.target.tagName === 'LI') {
        globalCurrentPage = +event.target.textContent;
        render();
    }
}

function delObserver(event) {
    state.forEach((el, index) => {
        if (el.name === event.target.parentElement.parentElement.querySelector('.main-content__content__items__item__text > h3').textContent) {
            state.splice(index, 1);
            render();
        }
    });
}

function clearButtonObserver() {
    request();
    input.value = '';
}

function searchObserver(event) {
    let temp = [];
    let request = new XMLHttpRequest();
    request.open('GET', '../index.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            state = [...JSON.parse(request.response)];
            console.log(state);
            globalCurrentPage = 1;

            state.forEach((el, index) => {
                if (event.target.value.toLowerCase() === el.name.slice(0, event.target.value.length).toLowerCase()) {

                    temp.push({...el});
                }
            });
            state = [...temp]
            render();
        }
    });

}

function render() {
    stopObserving()
    printPagination(globalCurrentPage);
    printCollection(globalCurrentPage);
    startObserving();
}
