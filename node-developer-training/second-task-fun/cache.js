/**
 * Created by pavelmelnyk on 12.12.14.
 */

console.log('Pleas create your object with \n   var varName = new Cache(); \n or\n   var varName = Cache(); \n and use it.\n          Have fun =)\n');

function Cache() {
    var storage = {},
        me = {
            add: function (key, value) {
                if (storage[key] === undefined) {
                    if (Object.prototype.toString.call(value) === "[object Object]") {
                        value = JSON.stringify(value);
                    }

                    storage[key] = value;
                    return me;
                } throw '"'+key+'" already exist'
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
                var num = 0;
                for (el in storage) {
                    if (storage[el] === value) {
                        delete storage[el];
                        num++;
                    }
                }
                return me;
            },
            getStorage: function () {
                return storage;
            }

        }
    return me;
}
