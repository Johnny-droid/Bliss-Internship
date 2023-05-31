// Class Transaction

export class Transaction {
    constructor(json) {
        this._id = json.id;
        this._title = json.title;
        this._description = json.description;
        this._value = json.value;
        this._date = json.date;
        this._type = json.type; 
    }

    get id() {return this._id;}
    get title() {return this._title;}
    get description() {return this._description;}
    get value() {return this._value;}
    get date() {return this._date;}
    get type() {return this._type;}

    set id(id) {this._id = id;}
    set title(title) {this._title = title;}
    set description(description) {this._description = description;}
    set value(value) {this._value = value;}
    set date(date) {this._date = date;}
    set type(type) {this._type = type;}
    

    static async getTransaction(id) {
        let response = await fetch('http://localhost:3001/transactions/' + id);
        let data = await response.json();
        return new Transaction(data);
    }

    static async getTransactions() {
        let response = await fetch('http://localhost:3001/transactions');
        let data = await response.json();
        let transactions = [];
        data.forEach(data => {
            transactions.push(new Transaction(data));
        });
        return transactions;
    }

    static async getTransactionsPage(page=1, limit=10) {
        let response = await fetch('http://localhost:3001/transactions?_page=' + page + '&_limit=' + limit);
        let data = await response.json();
        let transactions = [];
        data.forEach(data => {
            transactions.push(new Transaction(data));
        });
        return transactions;
    }

    static async addTransaction(formData) {
        let response;
        const request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3001/transactions");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(formData);
        request.onload = () => {
            response = request.responseText;
        }
        return response;
    }

    static async updateTransaction(formData) {
        let response;
        const request = new XMLHttpRequest();
        request.open("PUT", "http://localhost:3001/transactions/" + JSON.parse(formData).id);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(formData);
        request.onload = () => {
            response = request.responseText;
        }
        return response;
    }

    createHTML() {
        let signal = '';
        if (!this._type) {
            signal = '-';
        }
        return `
            <li class="flex flex-wrap lg:flex-row lg:flex-nowrap lg:items-center lg:h-10 p-3 lg:p-0 border__bottom border__color--grey-dark border-t-2 lg:border-t-0 ">
                <span class="lg:w-[15%] lg:order-0 w-[75%] lg:ml-5 text-xs color--grey-superdark">${this._date}</span>
                <span class="lg:w-[60%] order-1 lg:order-none w-[100%] mt-2 lg:mt-0 lg:mr-2 text-xs color--grey-superdark ">${this._title} - ${this._description}</span>
                <span class="lg:w-[17%] order-2 lg:order-none w-[100%] flex  text-xs color--grey-superdark flex flex-row justify-end lg:justify-center">${signal}€&nbsp;${this._value}</span>
                <div  class="lg:w-[8%] lg:order-0 w-[25%] lg:mr-5 text-xs color--grey-superdark  flex flex-row justify-end lg:justify-around">
                    <button value=${this.id} class="transaction__btn--clip mr-3 lg:mr-0 min-w-max">
                        <img src="assets/icon_attach_square.png" alt="Attach Document Icon">
                    </button>
                    <button value=${this.id} class="transaction__btn--edit mr-3 lg:mr-0 min-w-max">
                        <img src="assets/icon_edit.png" alt="Edit Icon">
                    </button>
                    <button value=${this.id} class="transaction__item--delete min-w-max">
                        <img src="assets/icon_trash.png" alt="Trash Icon">
                    </button>
                </div>
            </li>`
        ;
    }
}
