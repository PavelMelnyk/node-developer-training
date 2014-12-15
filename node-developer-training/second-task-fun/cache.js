/**
 * Created by pavelmelnyk on 12.12.14.
 */

console.log('Pleas create your object with \n   var varName = new Cache(); \n or\n'+
            '   var varName = Cache(); \n and use it.\n          Have fun =)\n');

function Cache() {
    var storage = {},
        len = 0;
        me = {
            add: function (key, value) {
                if (storage[key] === undefined && value !== undefined && key !== undefined) {
                    if (Object.prototype.toString.call(value) === "[object Object]") {
                        value = JSON.stringify(value);
                    }

                    storage[key] = value;
                    return me;
                }
                throw 'can\'t add "'+key+'"';
            },
            get: function (key) {
                return storage[key] || false;
            },
            update: function (key, value) {
                if (storage[key] !== undefined && value !== undefined) {
                    storage[key] = value;
                    return me;
                } else {
                    throw 'inconsistent parameter';
                }
            },
            delete: function (key) {
                if (storage[key] !== undefined) {
                    delete storage[key];
                    return me;
                } else {
                    throw 'no such element';
                }
            },
            clean: function (value) {
                for (el in storage) {
                    if (storage[el] === value) {
                        delete storage[el];
                    }
                }
                return me;
            },
            getStorage: function () {
                return storage;
            },
            getSize: function (key) {
                if (storage[key] !== undefined) {
                    return storage[key].length;
                } else {
                    len = 0;
                    for (key in storage) {
                        len += storage[key].toString().length;
                    }
                    return len;
                }
            },
            find: function (needl) {
                result = [];
                for (element in storage) {
                    if(storage[element].toString().search(RegExp(needl))) {
                        resultObject = {};
                        resultObject[element] = storage[element];
                        result.push(resultObject);
                    }
                }
                return result;
            }

        }
    return me;
}
