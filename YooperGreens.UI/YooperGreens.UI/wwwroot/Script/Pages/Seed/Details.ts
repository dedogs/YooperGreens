namespace GScope {
    export namespace Page {
        export class SeedDetails {
            private mapped: any;
            private readonly _service: ApplicationService.ISeedPageService<JQueryXHR>;

            constructor(service: ApplicationService.ISeedPageService<JQueryXHR>) {
                this._service = service;
            }

            seedHome = (e: Event) => {
                this._service.Index().done((indexPage) => {
                    this.mapped[SeedDetails.ElementIds.Content].innerHTML = indexPage;
                });
            };

            seedDetails = (e: Event) => {

                this._service.Details("").done((detailsPage) => {
                    this.mapped[SeedDetails.ElementIds.Content].innerHTML = detailsPage;
                })
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

        export namespace SeedDetails {
            export enum ElementIds {
                Details = "seedDetails",
                Home = "seedHome",
                Content = "renderContent"
            }
        }
    }
}

(new GScope.Page.SeedDetails(new GScope.Infrastructure.SeedPages())).main();