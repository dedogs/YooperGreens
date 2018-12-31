var GScope;
(function (GScope) {
    var MappedIds = /** @class */ (function () {
        function MappedIds() {
        }
        MappedIds.get = function (references) {
            var key, refs = [], i;
            var ref = {};
            if (Utility.is(references).obj().ok()) {
                if (references["key"] && references["value"]) {
                    key = references["key"];
                    if (!Utility.is(references["value"]).str().ok()) {
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
            else if (Utility.is(references).arry().ok()) {
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
    GScope.MappedIds = MappedIds;
})(GScope || (GScope = {}));
//# sourceMappingURL=MappedIds.js.map