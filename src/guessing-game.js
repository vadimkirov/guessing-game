class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.candidate =  null;
    }

    guess() {
       return  this.candidate = Math.round((this.max + this.min)/2);

    }

    lower() {
        this.max = this.candidate;

    }

    greater() {
        this.min = this.candidate;
    }
}

module.exports = GuessingGame;
