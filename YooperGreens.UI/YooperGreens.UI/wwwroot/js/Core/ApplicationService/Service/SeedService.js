"use strict";
exports.__esModule = true;
var Seed_1 = require("../../../Entity/Seed");
var SeedService = /** @class */ (function () {
    function SeedService() {
    }
    SeedService.prototype.Count = function () {
        return 0;
    };
    SeedService.prototype.CreateSeed = function (seed) {
        return new Seed_1.Seed();
    };
    SeedService.prototype.DeleteSeed = function (seed) {
        return new Seed_1.Seed();
    };
    SeedService.prototype.FindSeedById = function (seedId) {
        return new Seed_1.Seed();
    };
    SeedService.prototype.FindSeedByIdInclude = function (seedId) {
        return new Seed_1.Seed();
    };
    SeedService.prototype.GetAllSeeds = function () {
        return [];
    };
    SeedService.prototype.UpdateSeed = function (seed) {
        return new Seed_1.Seed();
    };
    return SeedService;
}());
exports.SeedService = SeedService;
//# sourceMappingURL=SeedService.js.map