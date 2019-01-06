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