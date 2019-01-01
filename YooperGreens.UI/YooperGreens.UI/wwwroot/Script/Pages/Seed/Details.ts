namespace GScope {
    export namespace Page {
        export class SeedDetails {
            private readonly _service: ApplicationService.ISeedService;

            constructor(service: ApplicationService.ISeedService) {
                this._service = service;
            }
            seedEdit() {

            }
        }
    }
}

var details = new GScope.Page.SeedDetails(new GScope.ApplicationService.SeedService(new GScope.Infrastructure.SeedRepository()));
details.seedEdit();