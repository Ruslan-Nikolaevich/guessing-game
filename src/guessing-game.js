class GuessingGame {
   
    constructor() {
        this.minimal = 0;
        this.maximum = 0;
        this.rezultat = 0;
    }

    setRange(min, max) {
       this.minimal = min;
       this.maximum = max;
    }

    guess() {
        this.rezultat = Math.round((this.minimal + this.maximum) / 2);
        return this.rezultat;
    }

    lower() {
        this.maximum = this.rezultat; 
    }

    greater() {
        this.minimal = this.rezultat;
    }
}

module.exports = GuessingGame;
