/// <reference path="../../lib/jquery/dist/jquery.js" />
/// <reference path="../application/utility.js" />
/// <reference path="../application/modules/publisher.js" />
/// <reference path="Test-HtmlPage.html" />

var done1, done2;
var actionMethod = function (data) {
    data.assert.equal(data.value, 1);
};
var callbackMethod = function (data) {
    data.assert.equal(data.value, 1);
    done1();
};

QUnit.test("", function (assert) {
    var publisher = new GScope.Module.Publisher({ "test": {} });

    assert.equal(publisher.publications.count(), 1, "Should be one publisher.");
});
QUnit.test("", function (assert) {
    var publisher = new GScope.Module.Publisher({ "test1": {}, "test2": {} });

    assert.equal(publisher.publications.count(), 2, "Should be one publisher.");
});
QUnit.test("", function (assert) {
    var publisher = new GScope.Module.Publisher({ "test1": {} });
    assert.ok(publisher.publications.subscribe, "Exists a subscribe method");
});
QUnit.test("", function (assert) {
    var publisher = new GScope.Module.Publisher({ "test1": {} });
    assert.equal(publisher.publications.count(), 1, "Should be one publication.");

    assert.ok(publisher.publications.exists("test1"), "Should be test1 publication.");

});
QUnit.test("", function (assert) {
    var publisher = new GScope.Module.Publisher({ "test1": {} });
    assert.equal(publisher.publications.count(), 1, "Should be one publication.");

    publisher.publications.subscribe("subscriber1", "test1", actionMethod, callbackMethod);
    assert.equal(publisher.publications.subscriptions("test1"), 1, "Should be one subscriber.");

});
QUnit.test("", function (assert) {
    assert.expect(2);
    done1 = assert.async();

    var publisher = new GScope.Module.Publisher({ "test1": {} });

    publisher.publications.subscribe("subscriber1", "test1", actionMethod, callbackMethod);

    publisher.publications.publish("test1", { assert: assert, value: 1 });
});
QUnit.test("", function (assert) {
    assert.expect(4);
    done1 = assert.async();

    var publisher = new GScope.Module.Publisher({ "test1": {} });

    publisher.publications.subscribe("subscriber1", "test1", actionMethod, actionMethod);
    publisher.publications.subscribe("subscriber2", "test1", actionMethod, callbackMethod);
    publisher.publications.publish("test1", { assert: assert, value: 1 });
});
QUnit.test("", function (assert) {
    assert.expect(2);
    done1 = assert.async();

    var o = {
        test1: {}
    };
    var publisher = new GScope.Module.Publisher(o);
    publisher.publications.subscribe("subscriber1", "test1", actionMethod, callbackMethod);

    publisher.publications.publish("test1", { assert: assert, value: 1 });
});
QUnit.test("", function (assert) {
    assert.expect(2);
    done1 = assert.async();

    var o = {
        test1: {name:"test1"}
    };
    var publisher = new GScope.Module.Publisher(o);
    publisher.publications.subscribe("subscriber1", "test1", actionMethod, callbackMethod);

    publisher.publications.publish("test1", { assert: assert, value: 1 });
});