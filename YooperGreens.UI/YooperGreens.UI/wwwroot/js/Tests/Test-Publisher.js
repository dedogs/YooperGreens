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

    var story = new GScope.Module.Publisher.Story("test", {});
    assert.ok(GScope.Module.Publisher.Story, "Story is available.");
    assert.equal(story.name, "test", "Story has been inialized.");
});
QUnit.test("", function (assert) {
    var story = new GScope.Module.Publisher.Story("test1", {});
    var stories = { test1: new GScope.Module.Publisher.Story("test1", {}), test2: new GScope.Module.Publisher.Story("test2", {}) };

    var publisher = new GScope.Module.Publisher(story);

    assert.ok(publisher.publications, "Publications property is available.");
    assert.ok(publisher.publications.count, "Publications count method is available.");

    assert.equal(publisher.publications.count(), 0, "Must be many stories not just one.");
});
QUnit.test("", function (assert) {
    var story1 = new GScope.Module.Publisher.Story("test1", {});
    var story2 = new GScope.Module.Publisher.Story("test2", {});
    var stories = { test1: story1, test2: story2 };


    var publisher = new GScope.Module.Publisher(stories);

    assert.equal(publisher.publications.count(), 2, "Must be many stories not just one.");
});
QUnit.test("", function (assert) {
    var story1 = new GScope.Module.Publisher.Story("test1", {});
    var story2 = new GScope.Module.Publisher.Story("test2", {});
    var stories = { test1: story1, test2: story2 };

    var publisher = new GScope.Module.Publisher(stories);

    assert.ok(publisher.publications.exists("test1"),"test1 story exists");
    assert.ok(!publisher.publications.exists("test3"), "test3 story does not exists");

});
QUnit.test("", function (assert) {
    var story = new GScope.Module.Publisher.Story("test1", {});
    var publisher = new GScope.Module.Publisher([story]);

    //publisher.publications.subscribe("subscriber1", "test1", actionMethod, callbackMethod);
    assert.equal(publisher.publications.subscriptions("test1"), 1, "Should be one subscriber.");

});
//QUnit.test("", function (assert) {
//    assert.expect(2);
//    done1 = assert.async();

//    var publisher = new GScope.Module.Publisher({ "test1": {} });

//    publisher.publications.subscribe("subscriber1", "test1", actionMethod, callbackMethod);

//    publisher.publications.publish("test1", { assert: assert, value: 1 });
//});
//QUnit.test("", function (assert) {
//    assert.expect(4);
//    done1 = assert.async();

//    var publisher = new GScope.Module.Publisher({ "test1": {} });

//    publisher.publications.subscribe("subscriber1", "test1", actionMethod, actionMethod);
//    publisher.publications.subscribe("subscriber2", "test1", actionMethod, callbackMethod);
//    publisher.publications.publish("test1", { assert: assert, value: 1 });
//});
//QUnit.test("", function (assert) {
//    assert.expect(2);
//    done1 = assert.async();

//    var o = {
//        test1: {}
//    };
//    var publisher = new GScope.Module.Publisher(o);
//    publisher.publications.subscribe("subscriber1", "test1", actionMethod, callbackMethod);

//    publisher.publications.publish("test1", { assert: assert, value: 1 });
//});
//QUnit.test("", function (assert) {
//    assert.expect(2);
//    done1 = assert.async();

//    var o = {
//        test1: {name:"test1"}
//    };
//    var publisher = new GScope.Module.Publisher(o);
//    publisher.publications.subscribe("subscriber1", "test1", actionMethod, callbackMethod);

//    publisher.publications.publish("test1", { assert: assert, value: 1 });
//});