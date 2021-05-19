class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(isCheckedOut) {
        this._isCheckedOut = isCheckedOut;
    }
    toggleCheckOutStatus() {
        if (this._isCheckedOut) {
            return false;
        } else {
            return true;
        }
    }
    getAverageRating() {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue;
        const sum = this.ratings.reduce(reducer);
        const averageNumb = () => sum / this.ratings.length;
        return averageNumb();
    }
    addRating(rate) {
        return this.ratings.push(rate);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = '';
        this._pages = 327;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = '';
        this._runTime = 120;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = '';
        this._songs = [''];
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}

const historyOfEverything = new Book(
    'A Short History of Nearly Everything',
    'Bill Bryson',
    544
);
console.log(historyOfEverything.toggleCheckOutStatus());
console.log(historyOfEverything.isCheckedOut);
console.log(historyOfEverything.addRating(4));
console.log(historyOfEverything.addRating(5));
console.log(historyOfEverything.addRating(5));
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
console.log(speed.toggleCheckOutStatus());
console.log(speed.isCheckedOut);
console.log(speed.addRating(1));
console.log(speed.addRating(1));
console.log(speed.addRating(5));
console.log(speed.getAverageRating());

const rock = new CD('Queen', 'A Night at the Opera', [
    'Death on Two Legs (Dedicated to...)',
    'Lazing on a Sunday Afternoon',
    "I'm in Love with My Car",
    "You're My Best Friend",
    '39',
    'Sweet Lady',
    'Seaside Rendezvous',
]);
console.log(rock.toggleCheckOutStatus());
console.log(rock.isCheckedOut);
console.log(rock.addRating(5));
console.log(rock.addRating(4.5));
console.log(rock.addRating(5));
console.log(rock.getAverageRating());
