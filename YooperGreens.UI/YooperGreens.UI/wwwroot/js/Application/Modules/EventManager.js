var GScope;
(function (GScope) {
    var EventManager = /** @class */ (function () {
        function EventManager(context) {
            var _this = this;
            this.attach = function (action) {
                var element;
                if (_this.context.eventActions instanceof EventManager.EventAction) {
                    _this.context.eventActions = [_this.context.eventActions];
                }
                if (Utility.is(_this.context.eventActions).arry().not()) {
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
                        if (Utility.is(target).fn().ok()) {
                            result = target.call(_this.context, e);
                        }
                        else if (target[e.type]) {
                            result = target[e.type].call(_this.context, e);
                        }
                    }
                    if (_this.context.callbackComplete && Utility.is(_this.context.callbackComplete[id]).fn().ok()) {
                        _this.context.callbackComplete[id](result);
                    }
                }
                return result;
            };
        }
        EventManager.prototype.checkEventAction = function (events) {
            return events ? Utility.is(events).str().ok() ? [events] : events : ["click", "change"];
        };
        EventManager.prototype.add = function (eventAction) {
            var _this = this;
            if (this.context.eventActions instanceof EventManager.EventAction) {
                this.context.eventActions = [this.context.eventActions];
            }
            if (eventAction instanceof EventManager.EventAction) {
                eventAction = [eventAction];
            }
            else if (Utility.is(eventAction).obj().ok() && eventAction.name) {
                eventAction = [new EventManager.EventAction(eventAction)];
            }
            else if (Utility.is(eventAction).arry().not()) {
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
    GScope.EventManager = EventManager;
    (function (EventManager) {
        var EventAction = /** @class */ (function () {
            function EventAction(objectName, element, events) {
                if (Utility.is(objectName).str().ok()) {
                    this.name = objectName;
                    this.element = element;
                    this.events = Utility.is(events).str().ok() ? [events] : events;
                }
                else if (Utility.is(objectName).obj().ok()) {
                    this.name = objectName.name || null;
                    this.element = objectName.element || null;
                    this.events = objectName.events ? Utility.is(events).str().ok() ? [objectName.events] : objectName.events : null;
                }
            }
            return EventAction;
        }());
        EventManager.EventAction = EventAction;
    })(EventManager = GScope.EventManager || (GScope.EventManager = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=EventManager.js.map