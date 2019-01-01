var GScope;
(function (GScope) {
    var Infrastructure;
    (function (Infrastructure) {
        var SeedPages = /** @class */ (function () {
            function SeedPages() {
            }
            SeedPages.prototype.Details = function (seedId) {
                return $.ajax({
                    url: "/Seeds/Details",
                    data: { seedId: seedId },
                    dataType: "html",
                    type: "GET"
                });
            };
            SeedPages.prototype.Index = function () {
                return $.ajax({
                    url: "/Seeds",
                    dataType: "html",
                    type: "GET"
                });
            };
            return SeedPages;
        }());
        Infrastructure.SeedPages = SeedPages;
    })(Infrastructure = GScope.Infrastructure || (GScope.Infrastructure = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=SeedPages.js.map
var GScope;
(function (GScope) {
    var Infrastructure;
    (function (Infrastructure) {
        var SeedRepository = /** @class */ (function () {
            function SeedRepository() {
            }
            SeedRepository.prototype.FindByIdInclude = function (seedId) {
                throw new Error("Method not implemented.");
            };
            SeedRepository.prototype.FindById = function (seedId) {
                throw new Error("Method not implemented.");
            };
            SeedRepository.prototype.Create = function (seed) {
                throw new Error("Method not implemented.");
            };
            SeedRepository.prototype.ReadAll = function () {
                throw new Error("Method not implemented.");
            };
            SeedRepository.prototype.Update = function (item) {
                throw new Error("Method not implemented.");
            };
            SeedRepository.prototype.Delete = function (item) {
                throw new Error("Method not implemented.");
            };
            SeedRepository.prototype.Count = function () {
                throw new Error("Method not implemented.");
            };
            return SeedRepository;
        }());
        Infrastructure.SeedRepository = SeedRepository;
    })(Infrastructure = GScope.Infrastructure || (GScope.Infrastructure = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=SeedRepository.js.map