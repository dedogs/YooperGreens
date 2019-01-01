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