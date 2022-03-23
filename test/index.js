var trivia = require("../trivia.json");
var test = require("tap").test;

test("trivia", function (t) {
    t.ok(Array.isArray(trivia), "trivia should be an array");
    t.ok((trivia.length > 100), "trivia should contain at least 100 questions");
    trivia.forEach((qa) => {
        t.ok(typeof qa["question"] === "string", "each question should contain question string");
        t.ok(typeof qa["correct_answer"] === "string", "each question should contain correct answer string");
        t.ok(Array.isArray(qa["incorrect_answers"]), "each question should contain array of incorrect answers");
        qa["incorrect_answers"].forEach((ia) => {
            t.ok(typeof ia === "string", "each incorrect answer should be a string");
        });
        t.ok(Object.keys(qa).length === 3, "each question should only contain question, correct answer, and incorrect answers");
    });
    t.end();
});