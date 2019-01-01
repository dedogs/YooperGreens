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
                return this._costId;
            };
            Cost.prototype.Size = function (size) {
                if (GScope.Utility.is(size).num().ok()) {
                    this._size = size;
                }
                return this._size;
            };
            Cost.prototype.Price = function (price) {
                if (GScope.Utility.is(price).num().ok()) {
                    this._price = price;
                }
                return this._price;
            };
            Cost.prototype.Unit = function (unit) {
                if (unit !== null) {
                    this._unit = unit;
                }
                return this._unit;
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
            GrowingInfo.prototype.Culture = function (culture) {
                if (GScope.Utility.is(culture).str().ok()) {
                    this._culture = culture;
                }
                return this._culture;
            };
            GrowingInfo.prototype.Watering = function (watering) {
                if (GScope.Utility.is(watering).str().ok()) {
                    this._watering = watering;
                }
                return this._watering;
            };
            GrowingInfo.prototype.Temperature = function (temperature) {
                if (GScope.Utility.is(temperature).str().ok()) {
                    this._temperature = temperature;
                }
                return this._temperature;
            };
            GrowingInfo.prototype.Lighting = function (lighting) {
                if (GScope.Utility.is(lighting).str().ok()) {
                    this._lighting = lighting;
                }
                return this._lighting;
            };
            GrowingInfo.prototype.Fertilizer = function (fertilizer) {
                if (GScope.Utility.is(fertilizer).str().ok()) {
                    this._fertilizer = fertilizer;
                }
                return this._fertilizer;
            };
            GrowingInfo.prototype.Diseases = function (diseases) {
                if (GScope.Utility.is(diseases).str().ok()) {
                    this._diseases = diseases;
                }
                return this._diseases;
            };
            GrowingInfo.prototype.Harvest = function (harvest) {
                if (GScope.Utility.is(harvest).str().ok()) {
                    this._harvest = harvest;
                }
                return this._harvest;
            };
            GrowingInfo.prototype.Storgage = function (storgage) {
                if (GScope.Utility.is(storgage).str().ok()) {
                    this._storgage = storgage;
                }
                return this._storgage;
            };
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
                return this._seedId;
            };
            Seed.prototype.Name = function (name) {
                if (!GScope.Utility.is(name).nul().ok()) {
                    this._name = name;
                }
                return this._name;
            };
            Seed.prototype.Description = function (description) {
                if (!GScope.Utility.is(description).nul().ok()) {
                    this._description = description;
                }
                return this._description;
            };
            Seed.prototype.Maximum = function (maximum) {
                if (!GScope.Utility.is(maximum).nul().ok()) {
                    this._maximum = maximum;
                }
                return this._maximum;
            };
            Seed.prototype.Minimum = function (minimum) {
                if (!GScope.Utility.is(minimum).nul().ok()) {
                    this._minimum = minimum;
                }
                return this._minimum;
            };
            Seed.prototype.SeedLink = function (seedLink) {
                if (!GScope.Utility.is(seedLink).nul().ok()) {
                    this._seedLink = seedLink;
                }
                return this._seedLink;
            };
            Seed.prototype.SeedSupplierLink = function (seedSupplierLink) {
                if (!GScope.Utility.is(seedSupplierLink).nul().ok()) {
                    this._seedSupplierLink = seedSupplierLink;
                }
                return this._seedSupplierLink;
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
                return this._growingInfo;
            };
            return Seed;
        }());
        Entity.Seed = Seed;
    })(Entity = GScope.Entity || (GScope.Entity = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=Seed.js.map