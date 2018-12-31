"use strict";
exports.__esModule = true;
var Utility_1 = require("../Application/Utility");
var Seed = /** @class */ (function () {
    function Seed() {
    }
    Seed.prototype.SeedId = function (seedId) {
        if (seedId !== null) {
            this._seedId = seedId;
        }
        return seedId;
    };
    Seed.prototype.Name = function (name) {
        if (name !== null) {
            this._name = name;
        }
        return name;
    };
    Seed.prototype.Description = function (description) {
        if (description !== null) {
            this._description = description;
        }
        return description;
    };
    Seed.prototype.Maximum = function (maximum) {
        if (maximum !== null) {
            this._maximum = maximum;
        }
        return;
    };
    Seed.prototype.Minimum = function (minimum) {
        if (minimum !== null) {
            this._minimum = minimum;
        }
        return;
    };
    Seed.prototype.SeedLink = function (seedLink) {
        if (seedLink !== null) {
            this._seedLink = seedLink;
        }
        return;
    };
    Seed.prototype.SeedSupplierLink = function (seedSupplierLink) {
        if (seedSupplierLink !== null) {
            this._seedSupplierLink = seedSupplierLink;
        }
        return;
    };
    Seed.prototype.Costs = function (costs) {
        if (costs !== null) {
            if (Utility_1.Utility.is(costs).arry().ok()) {
                this._costs.concat(costs);
            }
            else {
                this._costs.push(costs);
            }
        }
        return;
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