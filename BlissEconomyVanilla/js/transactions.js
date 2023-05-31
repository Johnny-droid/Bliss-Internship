import { Transaction } from './classes/Transaction.js';

// ============== TRANSACTION LIST =================

const list = document.querySelector('#list_transactions');
const btnFirst = document.querySelector('#btn_first');
const btnBack = document.querySelector('#btn_back');
const btnNext = document.querySelector('#btn_next');
const btnLast = document.querySelector('#btn_last');
const transactionsCounter = document.querySelector('#transactions_counter');

let page = 1;
const limit = 10;
let max = await getNumberTransactions();
await updateList();

console.log('max: ' + max);


async function getNumberTransactions() {
    const numberTransactions = await Transaction.getTransactions().length;
    return Math.floor(numberTransactions / limit)+1;
}

async function updateList() {
    if (list) {
        let transactions = await Transaction.getTransactionsPage(page, limit);
        list.innerHTML = list.children[0].outerHTML;
        transactions.forEach(transaction => {
            list.innerHTML += transaction.createHTML();
        });

        updateButtons();
        updateCounter();
        // TODO: update max as well

        let editButtons = document.querySelectorAll('.transaction__btn--edit');
        if (editButtons.length > 0) {
            editButtons.forEach(button => {
                button.addEventListener('click', async function () {
                    closeModal();
                    currentModal = 'edit';
                    currentTransaction = button.value;
                    let transaction = await Transaction.getTransaction(currentTransaction);
                    modalInputs.forEach(input => {
                        if (input.type !== 'file')
                            input.value = transaction[input.name];
                    });
                    modalTextArea.value = transaction.description;
                    openModal('primary', 'Edit Transaction');
                });
            });
        }
    }
}

function updateButtons() {
    if (page <= 1) {
        btnFirst.disabled = true;
        btnBack.disabled = true;
    } else {
        btnFirst.disabled = false;
        btnBack.disabled = false;
    }

    if (page >= max) {
        btnNext.disabled = true;
        btnLast.disabled = true;
    } else {
        btnNext.disabled = false;
        btnLast.disabled = false;
    }
}

function updateCounter() {
    if (transactionsCounter) {
        transactionsCounter.textContent = page + ' de ' + max;
    }
}

function convertToDayMonthYear(date) {
    const newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth()+1;
    if (day < 10) {day = '0' + day;}
    if (month < 10) {month = '0' + month;}
    return day + '/' + month + '/' + newDate.getFullYear();
}


if (btnFirst) {
    btnFirst.addEventListener('click', async function () {
        page = 1;
        await updateList();
    });
}

if (btnBack) {
    btnBack.addEventListener('click', async function () {
        if (page > 1) {
            page--;
        }
        await updateList();
    });
}

if (btnNext) {
    btnNext.addEventListener('click', async function () {
        if (page < max) {
            page++;
        }
        await updateList();
    });
}

if (btnLast) {
    btnLast.addEventListener('click', async function () {
        page = max;
        await updateList();
    });
}




// ============== MODAL ==============

const modal = document.querySelector('#modal');
const modalTitle = document.querySelector('#modal__title');
const modalForm = document.querySelector('#modal__form');
const modalInputs = document.querySelectorAll('#modal__form input');
const modalTextArea = document.querySelector('#modal__form textarea');
const modalColorElements = document.querySelectorAll('.color');
const addIncomeButton = document.querySelector('#income__add');
const addExpenseButton = document.querySelector('#expense__add');
const closeModalButton = document.querySelector('#modal__close');
const cancelButton = document.querySelector('#transaction__btn--cancel');
const saveButton = document.querySelector('#transaction__btn--save');


let currentModal = null;
let currentTransaction = null;

function openModal(colorClass, title) {
    modalTitle.textContent = title;
    modalColorElements.forEach(element => {
        element.classList.replace('color', 'color--' + colorClass);
    });
    modal.classList.remove('hide');
}

function closeModal() {
    modalColorElements.forEach(element => {
        element.classList.remove('color--positive', 'color--negative', 'color--primary');
        element.classList.add('color');
    });
    modalInputs.forEach(input => {
        input.value = '';
    });
    modalTextArea.value = '';
    modal.classList.add('hide');
}

if (addIncomeButton) {
    addIncomeButton.addEventListener('click', () => {
        closeModal();
        currentModal = 'income';
        openModal('positive', 'Income');
    });
}

if (addExpenseButton) {
    addExpenseButton.addEventListener('click', () => {
        closeModal();
        currentModal = 'expense';
        openModal('negative', 'Expense');
    });
}


if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
        closeModal();
    });
}

if (cancelButton) {
    cancelButton.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()
        closeModal();
    })
}

if (saveButton) {
    saveButton.addEventListener('click', async function (event) {
        event.stopPropagation()
        event.preventDefault()
        let data = {};

        const formData = new FormData(modalForm);
        for (var [key, value] of formData.entries()) { 
            data[key] = value;
            console.log(key, value);
        }
        //Convert string to int
        data.value = parseInt(data.value);

        if (currentModal === 'income') {data.type = true;}
        else {data.type = false;}
        
        data.date = convertToDayMonthYear(data.date);

        let response;
        if (currentModal === 'edit') {
            data.id = currentTransaction;
            response = await Transaction.updateTransaction(JSON.stringify(data));
        } else {
            response = await Transaction.addTransaction(JSON.stringify(data));
        }
        
        console.log('Response: ')
        console.log(response)
        
    })
}





