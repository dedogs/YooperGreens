var GScope;
(function (GScope) {
    var Page;
    (function (Page) {
        var SeedDetails = /** @class */ (function () {
            function SeedDetails(service) {
                var _this = this;
                this.seedHome = function (e) {
                    _this._service.Index().done(function (indexPage) {
                        _this.mapped[SeedDetails.ElementIds.Content].innerHTML = indexPage;
                    });
                };
                this.seedDetails = function (e) {
                    _this._service.Details("").done(function (detailsPage) {
                        _this.mapped[SeedDetails.ElementIds.Content].innerHTML = detailsPage;
                    });
                };
                this._service = service;
            }
            SeedDetails.prototype.main = function () {
                var manager = new GScope.Module.EventManager(this);
                var _a = SeedDetails.ElementIds, Details = _a.Details, Home = _a.Home, Content = _a.Content;
                this.mapped = (function () {
                    return GScope.Module.MappedIds.get([
                        { key: Details, value: Details },
                        { key: Home, value: Home },
                        { key: Content, value: Content }
                    ]);
                })();
                manager.add([new GScope.Module.EventManager.EventAction(Details, this.mapped[Details], "click")]);
                manager.add([new GScope.Module.EventManager.EventAction(Home, this.mapped[Home], "click")]);
                manager.attach();
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
(new GScope.Page.SeedDetails(new GScope.Infrastructure.SeedPages())).main();
//# sourceMappingURL=Details.js.map