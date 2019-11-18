module GScope {
    export module Infrastructure {
        export class SeedPages extends ApplicationService.SeedPageService<JQueryXHR> {
            Details(seedId: string): JQueryXHR {
                return $.ajax({
                    url: "/Seed/Details",
                    data: { seedId: seedId },
                    dataType: "html",
                    type: "GET"
                });
            }
            Index(): JQueryXHR {
                return $.ajax({
                    url: "/Seeds",
                    dataType: "html",
                    type: "GET"
                });
            }
        }
    }
}