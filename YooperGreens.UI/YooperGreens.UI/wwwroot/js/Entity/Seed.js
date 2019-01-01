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