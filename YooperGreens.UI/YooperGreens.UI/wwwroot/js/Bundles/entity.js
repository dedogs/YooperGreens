var GScope;
(function (GScope) {
    var Entity;
    (function (Entity) {
        var SeedTypes;
        (function (SeedTypes) {
            SeedTypes[SeedTypes["MicroGreens"] = 0] = "MicroGreens";
            SeedTypes[SeedTypes["Garden"] = 1] = "Garden";
        })(SeedTypes = Entity.SeedTypes || (Entity.SeedTypes = {}));
        var Unit;
        (function (Unit) {
            Unit[Unit["oz"] = 0] = "oz";
            Unit[Unit["lbs"] = 1] = "lbs";
        })(Unit = Entity.Unit || (Entity.Unit = {}));
        var Cost = /** @class */ (function () {
            function Cost() {
            }
            Cost.prototype.CostId = function (costId) {
                if (GScope.Utility.is(costId).str().ok()) {
                    this._costId = costId;
                }
                return costId;
            };
            Cost.prototype.Size = function (size) {
                if (GScope.Utility.is(size).num().ok()) {
                    this._size = size;
                }
                return size;
            };
            Cost.prototype.Price = function (price) {
                if (GScope.Utility.is(price).num().ok()) {
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
        Entity.Cost = Cost;
    })(Entity = GScope.Entity || (GScope.Entity = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=Cost.js.map
var GScope;
(function (GScope) {
    var Entity;
    (function (Entity) {
        var GrowingInfo = /** @class */ (function () {
            function GrowingInfo() {
            }
            return GrowingInfo;
        }());
        Entity.GrowingInfo = GrowingInfo;
    })(Entity = GScope.Entity || (GScope.Entity = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=GrowingInfo.js.map
var GScope;
(function (GScope) {
    var Entity;
    (function (Entity) {
        var Seed = /** @class */ (function () {
            function Seed() {
            }
            Seed.prototype.SeedId = function (seedId) {
                if (!GScope.Utility.is(seedId).nul().ok()) {
                    this._seedId = seedId;
                }
                return seedId;
            };
            Seed.prototype.Name = function (name) {
                if (!GScope.Utility.is(name).nul().ok()) {
                    this._name = name;
                }
                return name;
            };
            Seed.prototype.Description = function (description) {
                if (!GScope.Utility.is(description).nul().ok()) {
                    this._description = description;
                }
                return description;
            };
            Seed.prototype.Maximum = function (maximum) {
                if (!GScope.Utility.is(maximum).nul().ok()) {
                    this._maximum = maximum;
                }
                return;
            };
            Seed.prototype.Minimum = function (minimum) {
                if (!GScope.Utility.is(minimum).nul().ok()) {
                    this._minimum = minimum;
                }
                return;
            };
            Seed.prototype.SeedLink = function (seedLink) {
                if (!GScope.Utility.is(seedLink).nul().ok()) {
                    this._seedLink = seedLink;
                }
                return;
            };
            Seed.prototype.SeedSupplierLink = function (seedSupplierLink) {
                if (!GScope.Utility.is(seedSupplierLink).nul().ok()) {
                    this._seedSupplierLink = seedSupplierLink;
                }
                return;
            };
            Seed.prototype.Costs = function (costs, cost) {
                if (!GScope.Utility.is(costs).nul().ok()) {
                    this._costs.concat(costs);
                }
                else if (!GScope.Utility.is(cost).nul().ok()) {
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
        Entity.Seed = Seed;
    })(Entity = GScope.Entity || (GScope.Entity = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=Seed.js.map