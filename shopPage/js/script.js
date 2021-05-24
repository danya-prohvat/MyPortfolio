// // let container = document.querySelector('.main-content__content__items');
// // let pagination = document.querySelector('.main-content__content__pagination > ul');
// // let clearList = document.querySelector('.main-content__content__button > button');
// // let input = document.querySelector('.main-content__content__button > input');
// //
// //
// // let del, collection;
// //
// // const setData = () => {
// //     collection = [
// //         {name: 'HUAWEI MATE S', price: '$280.00', lowerPrice: '', photo: 'phone1'},
// //         {name: 'SONY XPERIA Z5', price: '$550.00', lowerPrice: '', photo: 'phone2'},
// //         {name: 'Xiaomi Mi 4i', price: '$350.00', lowerPrice: '', photo: 'phone3'},
// //         {name: 'HUAWEI G8 4G', price: '$350.00', lowerPrice: '', photo: 'phone4'},
// //         {name: 'iPhone Rose Gold', price: '$280.00', lowerPrice: '$649.00', photo: 'phone5'},
// //         {name: 'HUAWEI G9 4G', price: '$350.00', lowerPrice: '', photo: 'phone6'},
// //         {name: 'Galaxy Core Prime', price: '$399.00', lowerPrice: '', photo: 'phone7'},
// //         {name: 'Apple iPhone 6S', price: '$550.00', lowerPrice: '', photo: 'phone8'},
// //         {name: 'HUAWEI MATE S1', price: '$280.00', lowerPrice: '', photo: 'phone1'},
// //         {name: 'SONY XPERIA Z51', price: '$550.00', lowerPrice: '', photo: 'phone2'},
// //         {name: 'Xiaomi Mi 4i1', price: '$350.00', lowerPrice: '', photo: 'phone3'},
// //         {name: 'HUAWEI G8 4G1', price: '$350.00', lowerPrice: '', photo: 'phone4'},
// //         {name: 'iPhone Rose Gold1', price: '$280.00', lowerPrice: '$649.00', photo: 'phone5'},
// //         {name: 'HUAWEI G9 4G1', price: '$350.00', lowerPrice: '', photo: 'phone6'},
// //         {name: 'Galaxy Core Prime1', price: '$399.00', lowerPrice: '', photo: 'phone7'},
// //         {name: 'Apple iPhone 6S12', price: '$550.00', lowerPrice: '', photo: 'phone8'},
// //         {name: 'HUAWEI MATE S2', price: '$280.00', lowerPrice: '', photo: 'phone1'},
// //         {name: 'SONY XPERIA Z52', price: '$550.00', lowerPrice: '', photo: 'phone2'},
// //         {name: 'Xiaomi Mi 4i2', price: '$350.00', lowerPrice: '', photo: 'phone3'},
// //         {name: 'HUAWEI G8 4G2', price: '$350.00', lowerPrice: '', photo: 'phone4'},
// //         {name: 'iPhone Rose Gold2', price: '$280.00', lowerPrice: '$649.00', photo: 'phone5'},
// //         {name: 'HUAWEI G9 4G2', price: '$350.00', lowerPrice: '', photo: 'phone6'},
// //         {name: 'Galaxy Core Prime2', price: '$399.00', lowerPrice: '', photo: 'phone7'},
// //         {name: 'Apple iPhone 6S3', price: '$550.00', lowerPrice: '', photo: 'phone8'},
// //         {name: 'HUAWEI MATE S3', price: '$280.00', lowerPrice: '', photo: 'phone1'},
// //         {name: 'SONY XPERIA Z53', price: '$550.00', lowerPrice: '', photo: 'phone2'},
// //         {name: 'Xiaomi Mi 4i3', price: '$350.00', lowerPrice: '', photo: 'phone3'},
// //         {name: 'HUAWEI G8 4G3', price: '$350.00', lowerPrice: '', photo: 'phone4'},
// //         {name: 'iPhone Rose Gold3', price: '$280.00', lowerPrice: '$649.00', photo: 'phone5'},
// //         {name: 'HUAWEI G9 4G3', price: '$350.00', lowerPrice: '', photo: 'phone6'},
// //         {name: 'Galaxy Core Prime3', price: '$399.00', lowerPrice: '', photo: 'phone7'},
// //         {name: 'Apple iPhone 6S3', price: '$550.00', lowerPrice: '', photo: 'phone8'}
// //     ]
// // }
// //
// // // let request = new XMLHttpRequest();
// // // request.open('GET', 'countries.json');
// // // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// // // request.send();
// // // request.addEventListener('readystatechange', () => {
// // //     if (request.readyState === 4 && request.status == 200){
// // //         let data = JSON.parse(request.response).countries;
// // //
// // //     }
// // // });
// //
// //
// // let request = new XMLHttpRequest();
// // request.open('GET', 'json/index.json');
// // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// // request.send();
// // request.addEventListener('readystatechange', () => {
// //     if (request.readyState === 4 && request.status == 200){
// //         console.log();
// //     }
// // });
// //
// //
// //
// // const printCollection = (startPosition = 0) => {
// //     container.innerHTML = '';
// //     for (let i = startPosition; i < collection.length && i < startPosition + 8; i++)
// //         container.innerHTML += `
// //         <div class="main-content__content__items__item">
// //             <div class="main-content__content__items__item__img">
// //                 <img src="img/${collection[i].photo}.png" alt="">
// //             </div>
// //             <div class="main-content__content__items__item__text">
// //                 <hr>
// //                     <h3>${collection[i].name}</h3>
// //                     <p>${collection[i].price} <span>${collection[i].lowerPrice}</span></p>
// //             </div>
// //             <div class="main-content__content__items__item__buttons">
// //                 <div><i class="fa fa-trash"></i></div>
// //                 <div><i class="fa fa-shopping-cart"></i></div>
// //             </div>
// //         </div>`;
// //
// //     del = container.querySelectorAll('.fa-trash');
// //     del.forEach(el => {
// //         el.parentElement.addEventListener('click', ev => {
// //             let a = el.parentElement.parentElement.parentElement.querySelector('.main-content__content__items__item__text > h3');
// //             collection.forEach((el, index) => {
// //                 if (el.name == a.textContent) {
// //                     collection.splice(index, 1);
// //                     printCollection();
// //                     printPagination();
// //                 }
// //             });
// //         });
// //     });
// // };
// //
// // const printPagination = (active = 1) => {
// //     pagination.innerHTML = '';
// //     for (let i = 1; i <= Math.ceil(collection.length / 8); i++)
// //         pagination.innerHTML += `
// //         <li class="${(i == active) ? 'main-content__content__pagination_active' : ''}">${i}</li>
// //         `;
// //
// // };
// //
// // setData();
// // printCollection();
// // printPagination();
// //
// // pagination.addEventListener('click', ev => {
// //     if (ev.target.tagName === 'LI') {
// //         printCollection(ev.target.textContent * 8 - 8);
// //         printPagination(ev.target.textContent);
// //     }
// // });
// //
// // clearList.addEventListener('click', () => {
// //     setData();
// //     printCollection();
// //     printPagination();
// //     input.value = '';
// // });
// //
// // input.addEventListener('input', () => {
// //     setData();
// //     for (let i = 0; i < collection.length; i++) {
// //         if (collection[i].name.slice(0, input.value.length).toLowerCase() !== input.value.toLowerCase()) collection.splice(i--, 1);
// //     }
// //     printCollection();
// //     printPagination();
// // });
// //
// //
// //
//
// let container = document.querySelector('.main-content__content__items');
// let pagination = document.querySelector('.main-content__content__pagination > ul');
// let clearList = document.querySelector('.main-content__content__button > button');
// // let input = document.querySelector('.main-content__content__button > input');
// let state, del, activePage = 1;
//
// const request = () => fetch('../json/index.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         state = [...data];
//         printCollection();
//         printPagination(activePage);
//     })
//
// request();
//
// let flag = true;
//
//
// const printCollection = (startPosition = 0) => {
//     container.innerHTML = '';
//     if (state) {
//         for (let i = startPosition; i < state.length && i < startPosition + 8; i++)
//             container.innerHTML += `
//         <div class="main-content__content__items__item">
//             <div class="main-content__content__items__item__img">
//                 <img src="img/${state[i].photo}.png" alt="">
//             </div>
//             <div class="main-content__content__items__item__text">
//                 <hr>
//                     <h3>${state[i].name}</h3>
//                     <p>${state[i].price} <span>${state[i].lowerPrice}</span></p>
//             </div>
//             <div class="main-content__content__items__item__buttons">
//                 <div><i class="fa fa-trash"></i></div>
//                 <div><i class="fa fa-shopping-cart"></i></div>
//             </div>
//         </div>`;
//
//         del = container.querySelectorAll('.fa-trash');
//         del.forEach(el => {
//             el.parentElement.addEventListener('click', ev => {
//                 let a = el.parentElement.parentElement.parentElement.querySelector('.main-content__content__items__item__text > h3');
//                 state.forEach((el, index) => {
//                     if (el.name == a.textContent) {
//                         state.splice(index, 1);
//                         printCollection();
//                         if ((activePage * 8) - 7 >= state.length) {
//                             printPagination(activePage);
//                         } else {
//                             printPagination(activePage-1);
//                         }
//                     }
//                 });
//             });
//         });
//     }
// };
//
// const printPagination = (active = 1) => {
//     activePage = active;
//     pagination.innerHTML = '';
//     for (let i = 1; i <= Math.ceil(state.length / 8); i++)
//         pagination.innerHTML += `
//         <li class="${(i == active) ? 'main-content__content__pagination_active' : ''}">${i}</li>
//         `;
// };
//
//
//
//
//
//
// pagination.addEventListener('click', ev => {
//     if (ev.target.tagName === 'LI') {
//         printCollection(ev.target.textContent * 8 - 8);
//         printPagination(ev.target.textContent);
//     }
// });
//
// // clearList.addEventListener('click', () => {
// //     request();
// //     pagination.innerHTML = '';
// //     container.innerHTML = '';
// //     // input.value = '';
// // });
// // clearList.removeEventListener('click', () => {
// //     request();
// //     pagination.innerHTML = '';
// //     container.innerHTML = '';
// //     // input.value = '';
// // });
//
//
// clearList.addEventListener('click', ccl);
// clearList.removeEventListener('click', ccl);
//
// function ccl() {
//     request();
//     pagination.innerHTML = '';
//     container.innerHTML = '';
//     // input.value = '';
// }
//
//
//
//
// // input.addEventListener('input', () => {
// //     request();
// //     for (let i = 0; i < state.length; i++) {
// //         if (state[i].name.slice(0, input.value.length).toLowerCase() !== input.value.toLowerCase()) state.splice(i--, 1);
// //     }
// //     printCollection();
// //     printPagination();
// // });


let container = document.querySelector('.main-content__content__items'),
    pagination = document.querySelector('.main-content__content__pagination > ul'),
    clearList = document.querySelector('.main-content__content__button > button'),
    input = document.querySelector('.main-content__content__button > input');


let state = {},
    globalCurrentPage = 1;

const request = () => fetch('../json/index.json')
    .then(response => response.json())
    .then(data => {
        state = [...data];
        console.log(state);
        globalCurrentPage = 1;
        render();
    })

request();


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
    fetch('../json/index.json')
        .then(response => response.json())
        .then(data => {
            state = [...data];
            console.log(state);
            globalCurrentPage = 1;

            state.forEach((el, index) => {
                if (event.target.value.toLowerCase() === el.name.slice(0, event.target.value.length).toLowerCase()) {

                    temp.push({...el});
                }
            });
            state = [...temp]
            render();
        })

}

function render() {
    stopObserving()
    printPagination(globalCurrentPage);
    printCollection(globalCurrentPage);
    startObserving();
}


// del = container.querySelectorAll('.fa-trash');
// del.forEach(el => {
//     el.parentElement.addEventListener('click', ev => {
//         let a = el.parentElement.parentElement.parentElement.querySelector('.main-content__content__items__item__text > h3');
//         state.forEach((el, index) => {
//             if (el.name == a.textContent) {
//                 state.splice(index, 1);
//                 printCollection();
//                 if ((activePage * 8) - 7 >= state.length) {
//                     printPagination(activePage);
//                 } else {
//                     printPagination(activePage-1);
//                 }
//             }
//         });
//     });
// });


// const printCollection = (startPosition = 0) => {
//     container.innerHTML = '';
//     if (state) {
//         for (let i = startPosition; i < state.length && i < startPosition + 8; i++)
//             container.innerHTML += `
//         <div class="main-content__content__items__item">
//             <div class="main-content__content__items__item__img">
//                 <img src="img/${state[i].photo}.png" alt="">
//             </div>
//             <div class="main-content__content__items__item__text">
//                 <hr>
//                     <h3>${state[i].name}</h3>
//                     <p>${state[i].price} <span>${state[i].lowerPrice}</span></p>
//             </div>
//             <div class="main-content__content__items__item__buttons">
//                 <div><i class="fa fa-trash"></i></div>
//                 <div><i class="fa fa-shopping-cart"></i></div>
//             </div>
//         </div>`;
//     }
// };

// const printPagination = (active = 1) => {
//     activePage = active;
//     pagination.innerHTML = '';
//     for (let i = 1; i <= Math.ceil(state.length / 8); i++)
//         pagination.innerHTML += `
//         <li class="${(i == active) ? 'main-content__content__pagination_active' : ''}">${i}</li>
//         `;
// };




