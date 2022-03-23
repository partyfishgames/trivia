var trivia = require("../trivia.json");
var test = require("tap").test;

test("trivia", function (t) {
    t.ok(Array.isArray(trivia), "should be an array");
    t.ok((trivia.length > 100), "should have at least 100 questions");
    trivia.forEach((qa) => {
        t.ok(typeof qa["question"] === "string");
        t.ok(typeof qa["correct_answer"] === "string");
        t.ok(Array.isArray(qa["incorrect_answers"]));
        qa["incorrect_answers"].forEach((ia) => {
            t.ok(typeof ia === "string");
        })
        t.ok(Object.keys(qa).length === 3);
    });
    t.end();
});