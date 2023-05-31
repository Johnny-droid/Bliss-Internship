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
    
    // New code (after React)

    static sort(transactions, field, order) {
        let sortedTransactions = transactions.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            if (a[field] > b[field]) {
                return 1;
            }
            return 0;
        });
        if (order === 'desc') {
            sortedTransactions.reverse();
        }   
        return sortedTransactions;
    }

}
