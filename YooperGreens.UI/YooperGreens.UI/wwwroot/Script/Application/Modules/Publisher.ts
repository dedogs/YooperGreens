module GScope {
    export module Module {
        export class Publisher {
            component: string;

            private readonly _publications: {};
            private readonly _initPublication;

            constructor(pub: {}) {
                this._publications = {};
                Object.keys(pub).forEach((name: string) => {
                    this._publications[name] = pub[name];
                })
                this._initPublication = pub;
            }

            publications: Publisher.Publishication = {
                clear: (): void => {
                    Object.keys(this._initPublication).forEach((name: string) => {
                        this._publications[name] = this._initPublication[name];
                    })
                },
                count: (): number => {
                    if (this._publications) {
                        return Object.keys(this._publications).length;
                    }

                    return null;
                },
                exists: (publication: string): boolean => {
                    return typeof this._publications[publication] !== "undefined";
                },
                subscriptions: (publication: string): number => {
                    if (this._publications[publication]) {
                        return (Object.keys(this._publications[publication])).length;
                    }

                    return null;
                },
                subscribe: (subscript: string, publication: string, action: (data: any) => void, callback: (data: any) => void): void => {
                    if (this._publications[publication]) {
                        this._publications[publication][subscript] = this._publications[publication][subscript] || [];
                        this._publications[publication][subscript].push({
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
                clear: () => void;
                count: () => number;
                exists: (publication: string) => boolean;
                subscriptions: (publication: string) => number;
                subscribe: (subscript: string, publication: string, action: (data: any) => void, callback: (data: any) => void) => void;
                publish: (publication: string, data: any) => void;
            }
        }
    }
}
