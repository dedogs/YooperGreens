var GScope;
(function (GScope) {
    var Page;
    (function (Page) {
        var SeedDetails = /** @class */ (function () {
            function SeedDetails(service) {
                var _this = this;
                this.publications = {
                    details: { name: "details" }
                };
                this.seedHome = function (e) {
                    _this._service.Index().done(function (indexPage) {
                        _this.mapped[SeedDetails.ElementIds.Content].innerHTML = indexPage;
                    });
                };
                this.seedDetails = function (e) {
                    _this._service.Details("d80948ec-8474-45f6-eeb2-08d66d6a9784").done(function (detailsPage) {
                        _this.mapped[SeedDetails.ElementIds.Content].innerHTML = detailsPage;
                        _this.publisher.publications.publish("seedDetails", _this.publications.details.name);
                    });
                };
                var _a = SeedDetails.ElementIds, Details = _a.Details, Home = _a.Home, Content = _a.Content;
                this._service = service;
                this.publisher = new GScope.Module.Publisher(this.publications);
                this.manager = new GScope.Module.EventManager(this);
                this.mapped = (function () {
                    return GScope.Module.MappedIds.get([
                        { key: Details, value: Details },
                        { key: Home, value: Home },
                        { key: Content, value: Content }
                    ]);
                })();
                this.manager.add([new GScope.Module.EventManager.EventAction(Details, this.mapped[Details], "click")]);
                this.manager.add([new GScope.Module.EventManager.EventAction(Home, this.mapped[Home], "click")]);
                this.manager.attach();
            }
            SeedDetails.getInstance = function () {
                if (!SeedDetails.instance) {
                    SeedDetails.instance = new SeedDetails(new GScope.Infrastructure.SeedPages());
                }
                return SeedDetails.instance;
            };
            return SeedDetails;
        }());
        Page.SeedDetails = SeedDetails;
        (function (SeedDetails) {
            var ElementIds;
            (function (ElementIds) {
                ElementIds["Details"] = "seedDetails";
                ElementIds["Home"] = "seedHome";
                ElementIds["Content"] = "renderContent";
            })(ElementIds = SeedDetails.ElementIds || (SeedDetails.ElementIds = {}));
        })(SeedDetails = Page.SeedDetails || (Page.SeedDetails = {}));
    })(Page = GScope.Page || (GScope.Page = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=Details.js.map