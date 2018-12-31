var GScope;
(function (GScope) {
    var Page;
    (function (Page) {
        var SeedDetails = /** @class */ (function () {
            function SeedDetails() {
                this.service = new GScope.ApplicationService.SeedService();
            }
            SeedDetails.prototype.seedEdit = function () {
                var kk = this.service.FindSeedByIdInclude("d80948ec-8474-45f6-eeb2-08d66d6a9784");
            };
            return SeedDetails;
        }());
        Page.SeedDetails = SeedDetails;
    })(Page = GScope.Page || (GScope.Page = {}));
})(GScope || (GScope = {}));
var details = new GScope.Page.SeedDetails();
details.seedEdit();
//# sourceMappingURL=Details.js.map