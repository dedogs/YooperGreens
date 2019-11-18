var GScope;
(function (GScope) {
    var Page;
    (function (Page) {
        var SeedIndex = /** @class */ (function () {
            function SeedIndex(service) {
                var _this = this;
                this.publications = {
                    details: { name: "details" }
                };
                this.seedHome = function (e) {
                    alert("clicked");
                    _this._service.Index().done(function (indexPage) {
                        _this.mapped[SeedIndex.ElementIds.Content].innerHTML = indexPage;
                    });
                };
                this.seedDetails = function (e) {
                    _this._service.Details("d80948ec-8474-45f6-eeb2-08d66d6a9784").done(function (detailsPage) {
                        _this.mapped[SeedIndex.ElementIds.Content].innerHTML = detailsPage;
                        _this.publisher.publications.publish("seedDetails", _this.publications.details.name);
                    });
                };
                var _a = SeedIndex.ElementIds, Details = _a.Details, Home = _a.Home, Content = _a.Content;
                this._service = service;
                //this.publisher = new Module.Publisher(this.publications);
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
            SeedIndex.getInstance = function () {
                if (!SeedIndex.instance) {
                    SeedIndex.instance = new SeedIndex(new GScope.Infrastructure.SeedPages());
                }
                return SeedIndex.instance;
            };
            return SeedIndex;
        }());
        Page.SeedIndex = SeedIndex;
        (function (SeedIndex) {
            var ElementIds;
            (function (ElementIds) {
                ElementIds["Details"] = "seedDetails";
                ElementIds["Home"] = "seedHome";
                ElementIds["Content"] = "renderContent";
            })(ElementIds = SeedIndex.ElementIds || (SeedIndex.ElementIds = {}));
        })(SeedIndex = Page.SeedIndex || (Page.SeedIndex = {}));
    })(Page = GScope.Page || (GScope.Page = {}));
})(GScope || (GScope = {}));
GScope.Page.SeedIndex.getInstance();
//# sourceMappingURL=Index.js.map