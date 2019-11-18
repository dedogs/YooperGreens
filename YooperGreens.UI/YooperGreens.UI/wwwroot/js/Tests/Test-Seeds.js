/// <reference path="../../lib/jquery/dist/jquery.js" />
/// <reference path="../bundles/application.js" />
/// <reference path="../bundles/entity.js" />
/// <reference path="../bundles/core.js" />
/// <reference path="../bundles/infrastructure.js" />
/// <reference path="../bundles/pageseed.js" />

var done1,
    scope = GScope.Page.SeedIndex.getInstance(),
    publisher = scope.publisher;

var actionMethod = function (data) {
    data.assert.ok(true);
};
var callbackMethod = function (data) {
    data.assert.ok(true);
    done1();
};

QUnit.module("Publisher", {
    beforeEach: function() {
        scope.publisher.publications.clear();
    }
});

QUnit.test("", function (assert) {
    assert.ok(GScope.Page.SeedIndex, "SeedIndex class is defined");
});
QUnit.test("", function (assert) {
    assert.ok(GScope.Page.SeedIndex.getInstance, "getInstance propety is defined.");
});
QUnit.test("", function (assert) {
    assert.ok(GScope.Page.SeedIndex.getInstance() instanceof GScope.Page.SeedIndex, "SeedIndex is initialized");
});
QUnit.test("", function (assert) {
    assert.equal(publisher.publications.count(), 1, "Currently one publication.");
});
QUnit.test("", function (assert) {
    assert.equal(scope.publications.details.name, "details", "Should be one subscriber.");
});
QUnit.test("", function (assert) {

    publisher.publications.subscribe("test1", scope.publications.details.name, actionMethod, callbackMethod);

    assert.equal(publisher.publications.subscriptions(scope.publications.details.name), 2, "Should be one subscriber.");
});
QUnit.test("", function (assert) {
    assert.expect(2);
    done1 = assert.async();

    publisher.publications.subscribe("test1", scope.publications.details.name, actionMethod, callbackMethod);
    publisher.publications.publish(scope.publications.details.name, { assert: assert });
});