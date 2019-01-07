﻿module GScope {
    export module Page {
        export class SeedDetails {
            private static instance: SeedDetails;
            private manager: Module.EventManager;

            private mapped: any;
            private readonly _service: Infrastructure.SeedPages;

            publisher: Module.Publisher;
            publications = {
                details: {name: "details"}
            }

            private constructor(service: Infrastructure.SeedPages) {
                const { Details, Home, Content } = SeedDetails.ElementIds;

                this._service = service;
                this.publisher = new Module.Publisher(this.publications);
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
                if (!SeedDetails.instance) {
                    SeedDetails.instance = new SeedDetails(new GScope.Infrastructure.SeedPages());
                }

                return SeedDetails.instance;
            }

            seedHome = (e: Event) => {
                this._service.Index().done((indexPage) => {
                    this.mapped[SeedDetails.ElementIds.Content].innerHTML = indexPage;
                });
            };

            seedDetails = (e: Event) => {

                this._service.Details("d80948ec-8474-45f6-eeb2-08d66d6a9784").done((detailsPage) => {
                    this.mapped[SeedDetails.ElementIds.Content].innerHTML = detailsPage;
                    this.publisher.publications.publish("seedDetails",this.publications.details.name);
                })

            };
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

