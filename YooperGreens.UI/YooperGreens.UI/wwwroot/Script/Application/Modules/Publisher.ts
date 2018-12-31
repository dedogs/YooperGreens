namespace GScope {
    export class Publisher {
        component: string;

        private publisher: any;

        publication: (publication: string) => void;
        subscribe: (publication: string, subscription: string, dispatch: Publisher.Dispatch) => void;
        publish: (publication: string, data: any) => void;
        getPublications: () => number;
        getSubscriptions: (publication: string) => number;
        removePublication: (publication: string) => void;
        removeSubscription: (publication: string, subscription: string) => void;
        clear: () => void;

        constructor(name) {
            this.component = name;

            this.publisher = {}
            this.publisher.publications = this.publisher.publications || {};

            this.publication = (publication: string) => {
                this.publisher.publications[publication] = this.publisher.publications[publication] || {};
            }

            this.subscribe = (publication: string, subscription: string, dispatch: Publisher.Dispatch) => {
                if (!this.publisher.publications[publication]) {
                    return;
                }

                this.publisher.publications[publication].subscriptions = this.publisher.publications[publication].subscriptions || {};
                this.publisher.publications[publication].subscriptions[subscription] = this.publisher.publications[publication].subscriptions[subscription] || {};

                //Add Subscription
                this.publisher.publications[publication].subscriptions[subscription] = dispatch;
            }

            this.publish = (publication: string, data: any) => {
                let context = this;

                if (!(this.publisher
                    && (this.publisher.publications && this.publisher.publications[publication] && this.publisher.publications[publication].subscriptions)
                )) {
                    return;
                }

                Object.keys(this.publisher.publications[publication].subscriptions).forEach((s: string): void => {
                    var action: (data: any) => JQueryPromise<any> = (data) => {
                        var def = $.Deferred();
                        try {
                            (<Publisher.Dispatch>context.publisher.publications[publication].subscriptions[s]).action(data);
                            def.resolve(data);
                        } catch (e) {
                            def.reject(data);
                        }

                        return def.promise();
                    },
                        callback: (data: any) => JQueryPromise<any> = (data) => {
                            var def = $.Deferred();

                            if ((<Publisher.Dispatch>context.publisher.publications[publication].subscriptions[s]).callback) {
                                try {
                                    (<Publisher.Dispatch>context.publisher.publications[publication].subscriptions[s]).callback(data);
                                    def.resolve();
                                } catch (e) {
                                    def.reject(data);
                                }
                            }

                            return def.promise();
                        },
                        fail = (<Publisher.Dispatch>this.publisher.publications[publication].subscriptions[s]).fail;

                    action(data).done(function (data) {
                        callback(data).fail(fail);
                    }).fail(fail)
                })
            }

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
    }

    export namespace Publisher {
        export class Dispatch {
            component: string = "Subscription Dispatch";
            name: string;
            action: (data?: any) => void;
            callback: (data: any) => void;
            fail: (data: any) => void;

            constructor(name: string, action: (data?: any) => void, callback?: (data: any) => void, fail?: (data: any) => void) {
                this.name = name;
                this.action = action;
                this.callback = callback || null;
                this.fail = fail || null;
            }
        }
    }
}