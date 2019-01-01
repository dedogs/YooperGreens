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