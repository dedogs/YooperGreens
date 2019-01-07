var GScope;
(function (GScope) {
    var Module;
    (function (Module) {
        var Publisher = /** @class */ (function () {
            function Publisher(pub) {
                var _this = this;
                this.publications = {
                    clear: function () {
                        Object.keys(_this._initPublication).forEach(function (name) {
                            _this._publications[name] = _this._initPublication[name];
                        });
                    },
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
                Object.keys(pub).forEach(function (name) {
                    _this._publications[name] = pub[name];
                });
                this._initPublication = pub;
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
        })(Publisher = Module.Publisher || (Module.Publisher = {}));
    })(Module = GScope.Module || (GScope.Module = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=Publisher.js.map