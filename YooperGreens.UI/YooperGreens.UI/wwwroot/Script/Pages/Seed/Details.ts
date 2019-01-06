module GScope {
    export module Page {
        export class SeedDetails {
            private mapped: any;
            private readonly _service: Infrastructure.SeedPages;
            
            publisher: Module.Publisher;
            private publications: {} = {
                details: {}
            };

            constructor(service: Infrastructure.SeedPages) {
                this._service = service;
                this.publisher = new Module.Publisher(this.publications);
            }

            seedHome = (e: Event) => {
                this._service.Index().done((indexPage) => {
                    this.mapped[SeedDetails.ElementIds.Content].innerHTML = indexPage;
                });
            };

            seedDetails = (e: Event) => {

                this._service.Details("d80948ec-8474-45f6-eeb2-08d66d6a9784").done((detailsPage) => {
                    this.mapped[SeedDetails.ElementIds.Content].innerHTML = detailsPage;
                })

                this.publisher.publications.subscribe()
            };

            main() {
                var manager = new Module.EventManager(this);
                const { Details, Home, Content } = SeedDetails.ElementIds;

                this.mapped = (() => {
                    return Module.MappedIds.get([
                        { key: Details, value: Details },
                        { key: Home, value: Home },
                        { key: Content, value: Content }
                    ])
                })()

                manager.add([new Module.EventManager.EventAction(Details, this.mapped[Details], "click")]);
                manager.add([new Module.EventManager.EventAction(Home, this.mapped[Home], "click")]);

                manager.attach();

            }
        }

        export module SeedDetails {
            export enum ElementIds {
                Details = "seedDetails",
                Home = "seedHome",
                Content = "renderContent"
            }
        }
    }
}

(new GScope.Page.SeedDetails(new GScope.Infrastructure.SeedPages())).main();