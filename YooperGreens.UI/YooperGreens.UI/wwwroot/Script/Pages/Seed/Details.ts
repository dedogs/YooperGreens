namespace GScope {
    export namespace Page {
        export class SeedDetails {
            public service: ApplicationService.SeedService;

            constructor() {
                this.service = new ApplicationService.SeedService();
            }
            seedEdit() {

                var kk = this.service.FindSeedByIdInclude("d80948ec-8474-45f6-eeb2-08d66d6a9784");
            }
        }
    }
}

var details = new GScope.Page.SeedDetails();
details.seedEdit();