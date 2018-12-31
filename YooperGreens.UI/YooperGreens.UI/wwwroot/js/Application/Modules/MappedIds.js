var GScope;
(function (GScope) {
    var Module;
    (function (Module) {
        var MappedIds = /** @class */ (function () {
            function MappedIds() {
            }
            MappedIds.get = function (references) {
                var key, refs = [], i;
                var ref = {};
                if (GScope.Utility.is(references).obj().ok()) {
                    if (references["key"] && references["value"]) {
                        key = references["key"];
                        if (!GScope.Utility.is(references["value"]).str().ok()) {
                            ref[key] = MappedIds.get(references["value"]);
                        }
                        else {
                            ref[key] = document.getElementById(references["value"]);
                            ref["$" + key] = ref[key] ? $(ref[key]) : $("." + references["value"]);
                        }
                    }
                    else {
                        Object.keys(references).forEach(function (key) {
                            ref[key] = MappedIds.get(references[key]);
                        });
                    }
                }
                else if (GScope.Utility.is(references).arry().ok()) {
                    for (i = 0; i < references.length; i++) {
                        refs.push(MappedIds.get(references[i]));
                    }
                    for (i = 0; i < refs.length; i++) {
                        Object.keys(refs[i]).forEach(function (key) {
                            ref[key] = refs[i][key];
                        });
                    }
                }
                return ref;
            };
            return MappedIds;
        }());
        Module.MappedIds = MappedIds;
    })(Module = GScope.Module || (GScope.Module = {}));
})(GScope || (GScope = {}));
//# sourceMappingURL=MappedIds.js.map