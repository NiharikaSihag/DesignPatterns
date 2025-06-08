class Niharika {
    constructor() {
        if (new.target === Niharika) {
            throw new Error("Cannot instantiate abstract class Niharika directly.");
        }
    }

    validate() {
        if (this.makeMoney === undefined || this.money === undefined) {
            throw new Error("Must implement abstract members: money and makeMoney()");
        }
    }

    calculateMoney() {
        console.log(5000);
    }
}

class N extends Niharika {
    constructor() {
        super();
        this.money = 5000;
        this.validate(); // Safe to call here
    }

    makeMoney() {
        return 10000;
    }
}

const n = new N();
console.log(n.money);           // 5000
console.log(n.makeMoney());     // 10000
n.calculateMoney();             // 5000
