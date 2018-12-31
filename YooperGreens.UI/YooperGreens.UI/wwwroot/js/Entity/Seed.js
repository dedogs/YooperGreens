"use strict";
exports.__esModule = true;
var Utility_1 = require("../Application/Utility");
var Seed = /** @class */ (function () {
    function Seed() {
    }
    Seed.prototype.SeedId = function (seedId) {
        if (!Utility_1.Utility.is(seedId).nul().ok()) {
            this._seedId = seedId;
        }
        return seedId;
    };
    Seed.prototype.Name = function (name) {
        if (!Utility_1.Utility.is(name).nul().ok()) {
            this._name = name;
        }
        return name;
    };
    Seed.prototype.Description = function (description) {
        if (!Utility_1.Utility.is(description).nul().ok()) {
            this._description = description;
        }
        return description;
    };
    Seed.prototype.Maximum = function (maximum) {
        if (!Utility_1.Utility.is(maximum).nul().ok()) {
            this._maximum = maximum;
        }
        return;
    };
    Seed.prototype.Minimum = function (minimum) {
        if (!Utility_1.Utility.is(minimum).nul().ok()) {
            this._minimum = minimum;
        }
        return;
    };
    Seed.prototype.SeedLink = function (seedLink) {
        if (!Utility_1.Utility.is(seedLink).nul().ok()) {
            this._seedLink = seedLink;
        }
        return;
    };
    Seed.prototype.SeedSupplierLink = function (seedSupplierLink) {
        if (!Utility_1.Utility.is(seedSupplierLink).nul().ok()) {
            this._seedSupplierLink = seedSupplierLink;
        }
        return;
    };
    Seed.prototype.Costs = function (costs, cost) {
        if (!Utility_1.Utility.is(costs).nul().ok()) {
            this._costs.concat(costs);
        }
        else if (!Utility_1.Utility.is(cost).nul().ok()) {
            this._costs.push(cost);
        }
        return this._costs;
    };
    Seed.prototype.GrowingInfo = function (growingInfo) {
        if (growingInfo !== null) {
            this._growingInfo = growingInfo;
        }
        return growingInfo;
    };
    return Seed;
}());
exports.Seed = Seed;
//# sourceMappingURL=Seed.js.map