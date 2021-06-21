    const btn = document.querySelector('.addCard'),
        modal = document.querySelector('.popup'),
        addCardBtn = document.querySelector('.addCardBtn'),
        task = document.querySelector('.task'),
        development = document.querySelector('.development'),
        executor = document.querySelector('.executor');

    const toDo = document.querySelector('.toDo'),
        doing = document.querySelector('.doing'),
        done = document.querySelector('.done'),
        boardItems = document.querySelectorAll('.board__item'),
        boardDel = document.querySelector('.board__del > h2'),
        scroll = calcScroll();

    let htmlCards,
        cards = [];

    class Card {
        constructor(task, development, executor, status = 'toDo', id, active = false) {
            this.task = task;
            this.development = development;
            this.executor = executor;
            this.status = status;
            this.id = id;
            this.active = active;
        }
    }

    cardsInitialisation();

    btn.addEventListener('click', e => {
        if (e.target) e.preventDefault();
        openModal();
    });

    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });

    addCardBtn.addEventListener('click', event => {
        if (task.value && development.value && executor.value) {
            cards.push(new Card(task.value, development.value, executor.value, 'toDo', (cards.length) ? cards[cards.length - 1].id + 1 : 1));
            printAllCard(cards);
            task.value = '';
            development.value = '';
            executor.value = '';
            closeModal();
        }
    });

    boardItems.forEach((el) => {
        el.addEventListener('dragover', dragover);
        el.addEventListener('dragenter', dragenter);
        el.addEventListener('dragleave', dragleave);
        el.addEventListener('drop', drop);
    });


    boardDel.addEventListener('dragover', dragover);
    boardDel.addEventListener('dragenter', dragenter);
    boardDel.addEventListener('dragleave', dragleave);
    boardDel.addEventListener('drop', dropDel);

    function cardsInitialisation() {
        if (localStorage.getItem('cardsList')) cards = [...JSON.parse(localStorage.getItem('cardsList'))];
        printAllCard(cards);
    }

    function saveToLocalStorage() {
        localStorage.setItem('cardsList', JSON.stringify(cards));
    }

    function dragstart(event) {
        setTimeout(() => {
            this.classList.add('hideCard');
        }, 0);
        cards.forEach((el, i) => {
            if (this.id == el.id) cards[i].active = true;
        });
    }

    function dragend(event) {
        this.classList.remove('hideCard');
        cards.forEach((el, i) => {
            if (this.id == el.id) cards[i].active = false;
        });
    }

    function dragover(ev) {
        ev.preventDefault();
    }

    function dragenter(ev) {
        if (ev.target == boardDel) boardDel.classList.add('board__del_hovered');
        if (ev.target !== this) this.querySelector('.plug').classList.add('hovered');
    }

    function dragleave(ev) {
        if (ev.target == boardDel) boardDel.classList.remove('board__del_hovered');
        if (ev.target !== this) this.querySelector('.plug').classList.remove('hovered');
    }

    function drop(ev) {
        cards.forEach((el, i) => {
            if (el.active === true) cards[i].status = this.classList.value.split(' ')[1];
            cards[i].active = false;
        });
        boardItems.forEach((el) => {
            el.querySelector('.plug').classList.remove('hovered');
        });
        printAllCard(cards);
    }

    function dropDel(ev) {
        cards.forEach((el, i) => {
            if (el.active === true) cards.splice(i, 1);
        });
        boardDel.classList.remove('board__del_hovered')
        printAllCard(cards);
    }

    function printAllCard(card) {
        toDo.querySelector('div').innerHTML = '';
        doing.querySelector('div').innerHTML = '';
        done.querySelector('div').innerHTML = '';
        saveToLocalStorage();
        cards.forEach((el) => printCard(el));
        htmlCards = document.querySelectorAll('.card');
        htmlCards.forEach((el) => {
            el.addEventListener('dragstart', dragstart);
            el.addEventListener('dragend', dragend);
        });
    }

    function printCard(el) {
        document.querySelector('.' + el.status + ' > div').innerHTML += `
        <div class="card" draggable="true" id=${el.id}>
            <div class="card__task">
                    <p>${el.task}</p>
                </div>
                <div class="card__department">
                    <h3>${el.development}</h3>
                </div>
                <div class="card__executor">
                    <h3>${el.executor}</h3>
            </div>
        </div>`;
    }

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${document.body.clientHeight > document.documentElement.clientHeight ? scroll : 0}px`;
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
