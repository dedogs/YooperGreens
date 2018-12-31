"use strict";
exports.__esModule = true;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.is = function (o) {
        var _okay = true, _or = false, _and = true, toStringx = Object.prototype.toString, setLogic = function (condition) {
            _okay = (_or) ? _okay || condition : _okay && condition;
        }, obj = {
            absoluteURI: function () {
                setLogic((/^(?:[a-z]+:)?\/\//i).test(o));
                return obj;
            },
            email: function () {
                setLogic((/^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i).test(o));
                return obj;
            },
            password: function () {
                setLogic((/^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{6,}$/g).test(o));
                return obj;
            },
            fn: function () {
                var condition = (toStringx.call(o) === "[object Function]");
                setLogic(condition);
                return obj;
            },
            empty: function () {
                setLogic((toStringx.call(o) === "[object String]") && o.length === 0);
                return obj;
            },
            str: function () {
                setLogic((toStringx.call(o) === "[object String]"));
                return obj;
            },
            arry: function () {
                setLogic((toStringx.call(o) === "[object Array]"));
                return obj;
            },
            num: function () {
                setLogic((toStringx.call(o) === "[object Number]"));
                return obj;
            },
            bool: function () {
                setLogic((toStringx.call(o) === "[object Boolean]"));
                return obj;
            },
            nul: function () {
                setLogic((o === null || toStringx.call(o) === "[object Null]"));
                return obj;
            },
            nan: function () {
                setLogic((toStringx.call(o) === "[object Number]" && o !== o));
                return obj;
            },
            obj: function () {
                setLogic((toStringx.call(o) === "[object Object]"));
                return obj;
            },
            undef: function () {
                setLogic((o === void 0));
                return obj;
            },
            argumentType: function () {
                setLogic((toStringx.call(o) === "[object Arguments]"));
                return obj;
            },
            date: function () {
                setLogic(!isNaN(Date.parse(o)));
                return obj;
            },
            or: function () {
                _or = true;
                _and = false;
                return obj;
            },
            and: function () {
                _or = false;
                _and = true;
                return obj;
            },
            ok: function () {
                return _okay;
            },
            not: function () {
                return !(_okay);
            }
        };
        return obj;
    };
    Utility.formatString = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var position;
        if (args.length === 0 || typeof args[0] !== "string") {
            return "";
        }
        var result = args[0].replace(new RegExp("{[0-9]+}", "g"), function (item) {
            var intVal = parseInt(item.substring(1, item.length - 1));
            return args[intVal + 1] ? args[intVal + 1] : "";
        });
        if (result === args[0]) {
            position = 1;
            result = args[0].replace(new RegExp("[0#]+", "g"), function (item) {
                var len = item.length, decimalPosition = item.indexOf("0"), convertItem = "" + args[position], itemLength = convertItem.length;
                if (len > itemLength) {
                    for (var i = 0; i < len - itemLength; i++) {
                        if (decimalPosition === 0) {
                            convertItem += "0";
                        }
                        else {
                            convertItem = "0" + convertItem;
                        }
                    }
                }
                position += 1;
                return convertItem;
            });
        }
        return result;
    };
    Utility.triggerEvemt = function (el, eventName) {
        var event;
        if (document.createEvent) {
            event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, true);
        }
        event.eventName = eventName;
        if (el.dispatchEvent) {
            el.dispatchEvent(event);
        }
        else if (el[eventName]) {
            el[eventName]();
        }
        else if (el['on' + eventName]) {
            el['on' + eventName]();
        }
    };
    Utility.guid = function () {
        var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var chars = CHARS, uuid = new Array(36), rnd = 0, r;
        for (var i = 0; i < 36; i++) {
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                uuid[i] = '-';
            }
            else if (i == 14) {
                uuid[i] = '4';
            }
            else {
                if (rnd <= 0x02)
                    rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join('');
    };
    return Utility;
}());
exports.Utility = Utility;
//# sourceMappingURL=Utility.js.map