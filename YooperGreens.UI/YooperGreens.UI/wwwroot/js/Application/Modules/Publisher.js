var GScope;
(function (GScope) {
    var Module;
    (function (Module) {
        var Publisher = /** @class */ (function () {
            function Publisher(name) {
                var _this = this;
                this.component = name;
                this.publisher = {};
                this.publisher.publications = this.publisher.publications || {};
                this.publication = function (publication) {
                    _this.publisher.publications[publication] = _this.publisher.publications[publication] || {};
                };
                this.subscribe = function (publication, subscription, dispatch) {
                    if (!_this.publisher.publications[publication]) {
                        return;
                    }
                    _this.publisher.publications[publication].subscriptions = _this.publisher.publications[publication].subscriptions || {};
                    _this.publisher.publications[publication].subscriptions[subscription] = _this.publisher.publications[publication].subscriptions[subscription] || {};
                    //Add Subscription
                    _this.publisher.publications[publication].subscriptions[subscription] = dispatch;
                };
                this.publish = function (publication, data) {
                    var context = _this;
                    if (!(_this.publisher
                        && (_this.publisher.publications && _this.publisher.publications[publication] && _this.publisher.publications[publication].subscriptions))) {
                        return;
                    }
                    Object.keys(_this.publisher.publications[publication].subscriptions).forEach(function (s) {
                        var action = function (data) {
                            var def = $.Deferred();
                            try {
                                context.publisher.publications[publication].subscriptions[s].action(data);
                                def.resolve(data);
                            }
                            catch (e) {
                                def.reject(data);
                            }
                            return def.promise();
                        }, callback = function (data) {
                            var def = $.Deferred();
                            if (context.publisher.publications[publication].subscriptions[s].callback) {
                                try {
                                    context.publisher.publications[publication].subscriptions[s].callback(data);
                                    def.resolve();
                                }
                                catch (e) {
                                    def.reject(data);
                                }
                            }
                            return def.promise();
                        }, fail = _this.publisher.publications[publication].subscriptions[s].fail;
                        action(data).done(function (data) {
                            callback(data).fail(fail);
                        }).fail(fail);
                    });
                };
                //this.getPublications = () => {
                //    if (this.publisher.subscriptions) {
                //        return Object.keys(this.publisher.subscriptions).length;
                //    }
                //    return 0;
                //}
                //this.getSubscriptions = (publication: string) => {
                //    if (this.publisher.subscriptions[publication]) {
                //        return this.publisher.subscriptions[publication].contracts.length;
                //    }
                //    return 0;
                //}
                //this.removePublication = (publication: string) => {
                //    delete this.publisher.subscriptions[publication];
                //}
                //this.removeSubscription = (publication: string, subscription: string) => {
                //    for (var i = 0; i < this.publisher.subscriptions[publication].contracts.length; i++) {
                //        if (this.publisher.subscriptions[publication].contracts[i].name === subscription) {
                //            this.publisher.subscriptions[publication].contracts.splice(i, 1);
                //            break;
                //        }
                //    }
                //}
                //this.clear = () => {
                //    this.publisher = new Publisher.Subscription();
                //}
            }
            return Publisher;
        }());
        Module.Publisher = Publisher;
        (function (Publisher) {
            var Dispatch = /** @class */ (function () {
                function Dispatch(name, action, callback, fail) {
                    this.component = "Subscription Dispatch";
                    this.name = name;
                    this.action = action;
                    this.callback = callback || null;
                    this.fail = fail || null;
                }
                return Dispatch;
            }());
            Publisher.Dispatch = Dispatch;
        })(Publisher = Module.Publisher || (Module.Publisher = {}));
    })(Module = GScope.Module || (GScope.Module = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=Publisher.js.map