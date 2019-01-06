var GScope;
(function (GScope) {
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
    GScope.Utility = Utility;
})(GScope || (GScope = {}));
//# sourceMappingURL=Utility.js.map
var GScope;
(function (GScope) {
    var Module;
    (function (Module) {
        var EventManager = /** @class */ (function () {
            function EventManager(context) {
                var _this = this;
                this.attach = function (action) {
                    var element;
                    if (_this.context.eventActions instanceof EventManager.EventAction) {
                        _this.context.eventActions = [_this.context.eventActions];
                    }
                    if (GScope.Utility.is(_this.context.eventActions).arry().not()) {
                        throw "Event actions on context is missing or invalid.";
                    }
                    for (var i = 0; i < _this.context.eventActions.length; i++) {
                        if (_this.context.eventActions[i] instanceof EventManager.EventAction) {
                            _this.context.eventActions[i].events = _this.checkEventAction(_this.context.eventActions[i].events);
                            element = _this.context.eventActions[i].element;
                            _this.context.eventActions[i].events.forEach(function (event) {
                                if (element) {
                                    element[(action || "add") + "EventListener"](event, _this.raiseEvent, false);
                                }
                            });
                        }
                    }
                };
                this.context = context;
                this.raiseEvent = function (e) {
                    var id = _this.context[e.target.id] ? e.target.id : e.currentTarget.id, target = _this.context[id], executeTarget = true, result = null;
                    if (target) {
                        if (_this.context.callbackHandler && _this.context.callbackHandler[e.type]) {
                            executeTarget = _this.context.callbackHandler[e.type](e);
                        }
                        else {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        if (executeTarget) {
                            if (GScope.Utility.is(target).fn().ok()) {
                                result = target.call(_this.context, e);
                            }
                            else if (target[e.type]) {
                                result = target[e.type].call(_this.context, e);
                            }
                        }
                        if (_this.context.callbackComplete && GScope.Utility.is(_this.context.callbackComplete[id]).fn().ok()) {
                            _this.context.callbackComplete[id](result);
                        }
                    }
                    return result;
                };
            }
            EventManager.prototype.checkEventAction = function (events) {
                return events ? GScope.Utility.is(events).str().ok() ? [events] : events : ["click", "change"];
            };
            EventManager.prototype.add = function (eventAction) {
                var _this = this;
                if (this.context.eventActions instanceof EventManager.EventAction) {
                    this.context.eventActions = [this.context.eventActions];
                }
                if (eventAction instanceof EventManager.EventAction) {
                    eventAction = [eventAction];
                }
                else if (GScope.Utility.is(eventAction).obj().ok() && eventAction.name) {
                    eventAction = [new EventManager.EventAction(eventAction)];
                }
                else if (GScope.Utility.is(eventAction).arry().not()) {
                    throw "Only EventAction or objects instances allowed.";
                }
                this.context.eventActions = this.context.eventActions || [];
                eventAction.forEach(function (event) {
                    _this.context.eventActions.push(event);
                });
            };
            EventManager.prototype.remove = function () {
                if (this.context.eventActions.length === 0) {
                    return false;
                }
                this.attach("remove");
                return true;
            };
            return EventManager;
        }());
        Module.EventManager = EventManager;
        (function (EventManager) {
            var EventAction = /** @class */ (function () {
                function EventAction(objectName, element, events) {
                    if (GScope.Utility.is(objectName).str().ok()) {
                        this.name = objectName;
                        this.element = element;
                        this.events = GScope.Utility.is(events).str().ok() ? [events] : events;
                    }
                    else if (GScope.Utility.is(objectName).obj().ok()) {
                        this.name = objectName.name || null;
                        this.element = objectName.element || null;
                        this.events = objectName.events ? GScope.Utility.is(events).str().ok() ? [objectName.events] : objectName.events : null;
                    }
                }
                return EventAction;
            }());
            EventManager.EventAction = EventAction;
        })(EventManager = Module.EventManager || (Module.EventManager = {}));
    })(Module = GScope.Module || (GScope.Module = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=EventManager.js.map
var GScope;
(function (GScope) {
    var Module;
    (function (Module) {
        var MappedIds = /** @class */ (function () {
            function MappedIds() {
            }
            MappedIds.get = function (references) {
                var key, refs = [], i;
                var ref = {};
                if (GScope.Utility.is(references).obj().ok()) {
                    if (references["key"] && references["value"]) {
                        key = references["key"];
                        if (!GScope.Utility.is(references["value"]).str().ok()) {
                            ref[key] = MappedIds.get(references["value"]);
                        }
                        else {
                            ref[key] = document.getElementById(references["value"]);
                            ref["$" + key] = ref[key] ? $(ref[key]) : $("." + references["value"]);
                        }
                    }
                    else {
                        Object.keys(references).forEach(function (key) {
                            ref[key] = MappedIds.get(references[key]);
                        });
                    }
                }
                else if (GScope.Utility.is(references).arry().ok()) {
                    for (i = 0; i < references.length; i++) {
                        refs.push(MappedIds.get(references[i]));
                    }
                    for (i = 0; i < refs.length; i++) {
                        Object.keys(refs[i]).forEach(function (key) {
                            ref[key] = refs[i][key];
                        });
                    }
                }
                return ref;
            };
            return MappedIds;
        }());
        Module.MappedIds = MappedIds;
    })(Module = GScope.Module || (GScope.Module = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=MappedIds.js.map
var GScope;
(function (GScope) {
    var Module;
    (function (Module) {
        var Publisher = /** @class */ (function () {
            function Publisher(publications) {
                var _this = this;
                this.publications = {
                    count: function () {
                        if (_this._publications) {
                            return Object.keys(_this._publications).length;
                        }
                        return null;
                    },
                    exists: function (publication) {
                        return typeof _this._publications[publication] !== "undefined";
                    },
                    subscriptions: function (publication) {
                        if (_this._publications[publication]) {
                            return (Object.keys(_this._publications[publication])).length;
                        }
                        return null;
                    },
                    subscribe: function (subscript, publication, action, callback) {
                        if (_this._publications[publication]) {
                            _this._publications[publication][subscript] = _this._publications[publication][subscript] || [];
                            _this._publications[publication][subscript].push({
                                action: function (data) {
                                    return $.Deferred(function (d) {
                                        action(data);
                                        d.resolve();
                                    }).promise();
                                },
                                callback: function (data) {
                                    return $.Deferred(function (d) {
                                        callback(data);
                                        d.resolve();
                                    }).promise();
                                }
                            });
                        }
                    },
                    publish: function (publication, data) {
                        if (!(_this._publications[publication])) {
                            return;
                        }
                        if (_this._publications[publication]) {
                            var _that = _this;
                            Object.keys(_this._publications[publication]).forEach(function (subscript) {
                                for (var i = 0; i < _that._publications[publication][subscript].length; i++) {
                                    var current = _that._publications[publication][subscript][i];
                                    current.action(data).then(function () {
                                        current.callback(data);
                                    });
                                }
                            });
                        }
                    }
                };
                this._publications = {};
                Object.keys(publications).forEach(function (name) {
                    _this._publications[name] = publications[name];
                });
            }
            return Publisher;
        }());
        Module.Publisher = Publisher;
    })(Module = GScope.Module || (GScope.Module = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=Publisher.js.map