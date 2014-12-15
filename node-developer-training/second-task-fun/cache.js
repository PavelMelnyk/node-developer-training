/**
 * Created by pavelmelnyk on 12.12.14.
 */

console.log('Pleas create your object with \n   var varName = new Cache(); \n or\n' +
'   var varName = Cache(); \n and use it.\n          Have fun =)\n');

function Cache() {

    if (!(this instanceof Cache)) {
        return new Cache();
    }

    this.storage = {};
    this.len = 0;
}

Cache.prototype.add = function add(key, value) {
    if (this.storage[key] === undefined && value !== undefined && key !== undefined) {
        if (Object.prototype.toString.call(value) === "[object Object]") { // make JSON if Object
            value = JSON.stringify(value);
        }

        this.storage[key] = value;
        return this;
    }
    throw 'can\'t add "' + key + '"';
}

Cache.prototype.get = function get(key) {
    return this.storage[key] || false;
};

Cache.prototype.update = function update(key, value) {
    if (this.storage[key] !== undefined && value !== undefined) {
        this.storage[key] = value;
        return this;
    } else {
        throw 'inconsistent parameter';
    }
};
Cache.prototype.delete = function deleteItem(key) {
    if (this.storage[key] !== undefined) {
        delete this.storage[key];
        return this;
    } else {
        throw 'no such element';
    }
};

Cache.prototype.clean = function clean(value) {
    for (el in this.storage) {
        if (this.storage[el] === value) {
            delete this.storage[el];
        }
    }
    return this;
};
Cache.prototype.getStorage = function getStorage() {
    return this.storage;
};
Cache.prototype.getSize = function getSize(key) {
    if (this.storage[key] !== undefined) {
        return this.storage[key].length;
    } else {
        len = 0;
        for (key in this.storage) {
            len += this.storage[key].toString().length;
        }
        return len;
    }
};
Cache.prototype.find = function find(needl) {
    result = [];
    for (element in this.storage) {
        if (this.storage[element].toString().search(RegExp(needl)) !== -1) {
            resultObject = {};
            resultObject[element] = this.storage[element];
            result.push(resultObject);
        }
    }
    return result;
}
