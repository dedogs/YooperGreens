module GScope {
    export module Module {
        export class Publisher {
            component: string;

            private readonly _publications: {};

            constructor(stories: { [name: string]: Publisher.Story }) {
                this._publications = {};

                if (stories) {
                    Object.keys(stories).forEach((story: string) => {
                        if (stories[story] instanceof Publisher.Story) {
                            this._publications[stories[story].name] = stories[story];
                        }
                    })
                }
            }

            publications: Publisher.Publishication = {
                clear: (story: string): void => {
                    Object.keys(this._publications).forEach((story: string) => {
                        this._publications[name] = this._publications[name];
                    })
                },
                count: (): number => {
                    return Object.keys(this._publications).length;
                },
                exists: (story: string): boolean => {
                    return typeof this._publications[story] !== "undefined" && this._publications[story] instanceof Publisher.Story;
                },
                subscriptions: (story: string): number => {
                    if (this._publications[story]) {
                        return (Object.keys(this._publications[story])).length;
                    }

                    return null;
                },
                subscribe: (story: string, subscription:Publisher.Subscription): void => {
                    if (this._publications[story]) {
                        this._publications[story][subscription.name] = this._publications[story][subscription.name] || [];
                        this._publications[story][subscription.name].push({
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
                        })
                    }
                },
                publish: (publication: string, data: any) => {

                    if (!(this._publications[publication])) {
                        return;
                    }

                    if (this._publications[publication]) {
                        var _that = this;
                        Object.keys(this._publications[publication]).forEach(function (subscript) {
                            if (GScope.Utility.is(_that._publications[publication][subscript]).arry().ok()) {
                                for (var i = 0; i < _that._publications[publication][subscript].length; i++) {
                                    var current = _that._publications[publication][subscript][i];
                                    current.action(data).then(function () {
                                        current.callback(data);
                                    })
                                }
                            }
                        })
                    }
                }
            }
        }


        export module Publisher {
            export class Publishication {
                clear: (story: string) => void;
                count: () => number;
                exists: (publication: string) => boolean;
                subscriptions: (publication: string) => number;
                subscribe: (story: string, subscription: Publisher.Subscription) => void) => void;
                publish: (publication: string, data: any) => void;
            }
            export class Story {
                private readonly _name: string;
                private readonly _subscription: {};
                constructor(name: string, subscription: any) {
                    this._name = name;
                    this._subscription = subscription;
                }
                get name(): string {
                    return this._name;
                }
                get subscription(): {} {
                    return this._subscription;
                }
            }
            export class Subscription {
                private readonly _name:string;
                private readonly _action: (data?: any) => void;
                private readonly _callback: (data?: any) => void;

                constructor(name: string, action: (data?:any) => void, callback: (data?:any) => void) {
                    this._name = name;
                    this._action = action;
                    this._callback = callback;
                }
                get name() {
                    return this._name;
                }
                get action() {
                    return this._action;
                }
                get callback() {
                    return this._callback;
                }
                    
            }
        }
    }
}
