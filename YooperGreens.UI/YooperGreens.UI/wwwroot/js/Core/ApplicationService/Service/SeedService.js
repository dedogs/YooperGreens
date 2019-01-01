var GScope;
(function (GScope) {
    var ApplicationService;
    (function (ApplicationService) {
        var SeedService = /** @class */ (function () {
            function SeedService(repository) {
                this._repository = repository;
            }
            SeedService.prototype.Count = function () {
                return 0;
            };
            SeedService.prototype.CreateSeed = function (seed) {
                return new GScope.Entity.Seed();
            };
            SeedService.prototype.DeleteSeed = function (seed) {
                return new GScope.Entity.Seed();
            };
            SeedService.prototype.FindSeedById = function (seedId) {
                return new GScope.Entity.Seed();
            };
            SeedService.prototype.FindSeedByIdInclude = function (seedId) {
                return this._repository.FindByIdInclude(seedId);
            };
            SeedService.prototype.GetAllSeeds = function () {
                return [];
            };
            SeedService.prototype.UpdateSeed = function (seed) {
                return new GScope.Entity.Seed();
            };
            return SeedService;
        }());
        ApplicationService.SeedService = SeedService;
    })(ApplicationService = GScope.ApplicationService || (GScope.ApplicationService = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=SeedService.js.map