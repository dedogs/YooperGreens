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