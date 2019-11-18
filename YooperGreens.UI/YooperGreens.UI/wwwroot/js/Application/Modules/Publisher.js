var GScope;
(function (GScope) {
    var Module;
    (function (Module) {
        var Publisher = /** @class */ (function () {
            function Publisher(stories) {
                var _this = this;
                this.publications = {
                    clear: function (story) {
                        Object.keys(_this._publications).forEach(function (story) {
                            _this._publications[name] = _this._publications[name];
                        });
                    },
                    count: function () {
                        return Object.keys(_this._publications).length;
                    },
                    exists: function (story) {
                        return typeof _this._publications[story] !== "undefined" && _this._publications[story] instanceof Publisher.Story;
                    },
                    subscriptions: function (story) {
                        if (_this._publications[story]) {
                            return (Object.keys(_this._publications[story])).length;
                        }
                        return null;
                    },
                    subscribe: function (story, subscription) {
                        if (_this._publications[story]) {
                            _this._publications[story][subscription.name] = _this._publications[story][subscription.name] || [];
                            _this._publications[story][subscription.name].push({
                                action: function (data) {
                                    return $.Deferred(function (d) {
                                        subscription.action(data);
                                        d.resolve();
                                    }).promise();
                                },
                                callback: function (data) {
                                    return $.Deferred(function (d) {
                                        subscription.callback(data);
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
                                if (GScope.Utility.is(_that._publications[publication][subscript]).arry().ok()) {
                                    for (var i = 0; i < _that._publications[publication][subscript].length; i++) {
                                        var current = _that._publications[publication][subscript][i];
                                        current.action(data).then(function () {
                                            current.callback(data);
                                        });
                                    }
                                }
                            });
                        }
                    }
                };
                this._publications = {};
                if (stories) {
                    Object.keys(stories).forEach(function (story) {
                        if (stories[story] instanceof Publisher.Story) {
                            _this._publications[stories[story].name] = stories[story];
                        }
                    });
                }
            }
            return Publisher;
        }());
        Module.Publisher = Publisher;
        (function (Publisher) {
            var Publishication = /** @class */ (function () {
                function Publishication() {
                }
                return Publishication;
            }());
            Publisher.Publishication = Publishication;
            var Story = /** @class */ (function () {
                function Story(name, subscription) {
                    this._name = name;
                    this._subscription = subscription;
                }
                Object.defineProperty(Story.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Story.prototype, "subscription", {
                    get: function () {
                        return this._subscription;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Story;
            }());
            Publisher.Story = Story;
            var Subscription = /** @class */ (function () {
                function Subscription(name, action, callback) {
                    this._name = name;
                    this._action = action;
                    this._callback = callback;
                }
                Object.defineProperty(Subscription.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Subscription.prototype, "action", {
                    get: function () {
                        return this._action;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Subscription.prototype, "callback", {
                    get: function () {
                        return this._callback;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Subscription;
            }());
            Publisher.Subscription = Subscription;
        })(Publisher = Module.Publisher || (Module.Publisher = {}));
    })(Module = GScope.Module || (GScope.Module = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=Publisher.js.map