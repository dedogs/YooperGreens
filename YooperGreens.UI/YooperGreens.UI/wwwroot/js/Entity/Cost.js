"use strict";
exports.__esModule = true;
var Utility_1 = require("../Application/Utility");
var SeedTypes;
(function (SeedTypes) {
    SeedTypes[SeedTypes["MicroGreens"] = 0] = "MicroGreens";
    SeedTypes[SeedTypes["Garden"] = 1] = "Garden";
})(SeedTypes = exports.SeedTypes || (exports.SeedTypes = {}));
var Unit;
(function (Unit) {
    Unit[Unit["oz"] = 0] = "oz";
    Unit[Unit["lbs"] = 1] = "lbs";
})(Unit = exports.Unit || (exports.Unit = {}));
var Cost = /** @class */ (function () {
    function Cost() {
    }
    Cost.prototype.CostId = function (costId) {
        if (Utility_1.Utility.is(costId).str().ok()) {
            this._costId = costId;
        }
        return costId;
    };
    Cost.prototype.Size = function (size) {
        if (Utility_1.Utility.is(size).num().ok()) {
            this._size = size;
        }
        return size;
    };
    Cost.prototype.Price = function (price) {
        if (Utility_1.Utility.is(price).num().ok()) {
            this._price = price;
        }
        return price;
    };
    Cost.prototype.Unit = function (unit) {
        if (unit !== null) {
            this._unit = unit;
        }
        return unit;
    };
    return Cost;
}());
exports.Cost = Cost;
//# sourceMappingURL=Cost.js.map