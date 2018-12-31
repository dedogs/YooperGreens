
namespace GScope {
    export namespace Module {
        export class EventManager {
            raiseEvent: (e: any) => void;
            context: any;

            private checkEventAction(events) {
                return events ? Utility.is(events).str().ok() ? [events] : events : ["click", "change"];
            }

            public add(eventAction): void {
                if (this.context.eventActions instanceof EventManager.EventAction) {
                    this.context.eventActions = [this.context.eventActions];
                }

                if (eventAction instanceof EventManager.EventAction) {
                    eventAction = [eventAction];
                } else if (Utility.is(eventAction).obj().ok() && eventAction.name) {
                    eventAction = [new EventManager.EventAction(eventAction)];
                } else if (Utility.is(eventAction).arry().not()) {
                    throw "Only EventAction or objects instances allowed.";
                }

                this.context.eventActions = this.context.eventActions || [];
                eventAction.forEach((event) => {
                    this.context.eventActions.push(event);
                })
            }

            public remove(): boolean {
                if (this.context.eventActions.length === 0) {
                    return false;
                }
                this.attach("remove");
                return true;
            }

            constructor(context: any) {
                this.context = context;

                this.raiseEvent = (e) => {
                    var id = this.context[e.target.id] ? e.target.id : e.currentTarget.id,
                        target = this.context[id],
                        executeTarget = true,
                        result = null;
                    if (target) {
                        if (this.context.callbackHandler && this.context.callbackHandler[e.type]) {
                            executeTarget = this.context.callbackHandler[e.type](e);
                        } else {
                            e.preventDefault();
                            e.stopPropagation();
                        }

                        if (executeTarget) {
                            if (Utility.is(target).fn().ok()) {
                                result = target.call(this.context, e);
                            } else if (target[e.type]) {
                                result = target[e.type].call(this.context, e);
                            }
                        }

                        if (this.context.callbackComplete && Utility.is(this.context.callbackComplete[id]).fn().ok()) {
                            this.context.callbackComplete[id](result);
                        }
                    }
                    return result;
                }
            }

            public attach = (action?: string) => {
                var element: any;
                if (this.context.eventActions instanceof EventManager.EventAction) {
                    this.context.eventActions = [this.context.eventActions];
                }

                if (Utility.is(this.context.eventActions).arry().not()) {
                    throw "Event actions on context is missing or invalid.";
                }

                for (var i = 0; i < this.context.eventActions.length; i++) {
                    if (this.context.eventActions[i] instanceof EventManager.EventAction) {
                        this.context.eventActions[i].events = this.checkEventAction(this.context.eventActions[i].events);
                        element = this.context.eventActions[i].element;
                        this.context.eventActions[i].events.forEach(event => {
                            if (element) {
                                element[(action || "add") + "EventListener"](event, this.raiseEvent, false);
                            }
                        });
                    }
                }
            }
        }

        export namespace EventManager {
            export class EventAction {
                name: any;
                element: any;
                events: any;
                constructor(objectName: any, element?: any, events?: any) {

                    if (Utility.is(objectName).str().ok()) {
                        this.name = objectName;
                        this.element = element;
                        this.events = Utility.is(events).str().ok() ? [events] : events;
                    } else if (Utility.is(objectName).obj().ok()) {
                        this.name = objectName.name || null;
                        this.element = objectName.element || null;
                        this.events = objectName.events ? Utility.is(events).str().ok() ? [objectName.events] : objectName.events : null;
                    }
                }
            }
        }
    }
}