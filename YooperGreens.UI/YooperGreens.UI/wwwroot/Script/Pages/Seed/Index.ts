module GScope {
    export module Page {
        export class SeedIndex {
            private static instance: SeedIndex;
            private manager: Module.EventManager;

            private mapped: any;
            private readonly _service: Infrastructure.SeedPages;

            publisher: Module.Publisher;
            publications = {
                details: {name: "details"}
            }

            private constructor(service: Infrastructure.SeedPages) {
                const { Details, Home, Content } = SeedIndex.ElementIds;

                this._service = service;
                //this.publisher = new Module.Publisher(this.publications);
                this.manager = new Module.EventManager(this);

                this.mapped = (() => {
                    return Module.MappedIds.get([
                        { key: Details, value: Details },
                        { key: Home, value: Home },
                        { key: Content, value: Content }
                    ])
                })();

                this.manager.add([new Module.EventManager.EventAction(Details, this.mapped[Details], "click")]);
                this.manager.add([new Module.EventManager.EventAction(Home, this.mapped[Home], "click")]);

                this.manager.attach();
            }

            static getInstance() {
                if (!SeedIndex.instance) {
                    SeedIndex.instance = new SeedIndex(new GScope.Infrastructure.SeedPages());
                }

                return SeedIndex.instance;
            }

            seedHome = (e: Event) => {
                alert("clicked");
                this._service.Index().done((indexPage) => {
                    this.mapped[SeedIndex.ElementIds.Content].innerHTML = indexPage;
                });
            };

            seedDetails = (e: Event) => {

                this._service.Details("d80948ec-8474-45f6-eeb2-08d66d6a9784").done((detailsPage) => {
                    this.mapped[SeedIndex.ElementIds.Content].innerHTML = detailsPage;
                    this.publisher.publications.publish("seedDetails",this.publications.details.name);
                })

            };
        }

        export module SeedIndex {
            export enum ElementIds {
                Details = "seedDetails",
                Home = "seedHome",
                Content = "renderContent"
            }
        }
    }
}

GScope.Page.SeedIndex.getInstance();