var GScope;
(function (GScope) {
    var Page;
    (function (Page) {
        var SeedDetails = /** @class */ (function () {
            function SeedDetails(service) {
                this._service = service;
            }
            SeedDetails.prototype.seedEdit = function () {
            };
            return SeedDetails;
        }());
        Page.SeedDetails = SeedDetails;
    })(Page = GScope.Page || (GScope.Page = {}));
})(GScope || (GScope = {}));
var details = new GScope.Page.SeedDetails(new GScope.ApplicationService.SeedService(new GScope.Infrastructure.SeedRepository()));
details.seedEdit();
//# sourceMappingURL=Details.js.map