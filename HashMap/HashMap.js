// HashMap.js

class HashMap {

    constructor(size = 16) {
        this.buckets = new Array(size);
        this.count = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return Math.abs(hashCode % this.buckets.length);
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        for (let i = 0; i < this.buckets[index].length; i++) {
            const pair = this.buckets[index][i];
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        this.buckets[index].push([key, value]);
        this.count++;
    }

    get(key) {
        const index = this.hash(key);

        if (!this.buckets[index]) return null;

        for (let i = 0; i < this.buckets[index].length; i++) {
            const pair = this.buckets[index][i];
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);

        if (!this.buckets[index]) return false;

        for (let i = 0; i < this.buckets[index].length; i++) {
            const pair = this.buckets[index][i];
            if (pair[0] === key) return true;
        }

        return false;
    }


    remove(key) {
        const index = this.hash(key);

        if (!this.buckets[index]) return false;


        for (let i = 0; i < this.buckets[index].length; i++) {
            const pair = this.buckets[index][i];
            if (pair[0] === key) {
                this.buckets[index].splice(i, 1);
                this.count--;
                return true;
            }
        }

        return false;

    }

    length() {
        return this.count;
    }

    clear() {
        this.buckets = new Array(this.buckets.length);
        this.count = 0;
    }

    keys() {
        const keysArray = [];

        for (let bucket of this.buckets) {
            if (bucket) {
                for (let pair of bucket) {
                    keysArray.push(pair[0]);
                }
            }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];

        for (let bucket of this.buckets) {
            if (bucket) {
                for (let pair of bucket) {
                    valuesArray.push(pair[1]);
                }
            }
        }
        return valuesArray;

    }

    entries() {
        const entriesArray = [];

        for (let bucket of this.buckets) {
            if (bucket) {
                for (let pair of bucket) {
                    entriesArray.push(pair);
                }
            }
        }
        return entriesArray;
    }

};

module.exports = HashMap;