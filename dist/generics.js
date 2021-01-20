"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Thales", hobbies: ["games"] }, { age: 28 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element!";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} element!`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sport", "Cooking"]));
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUtil = date;
    return courseGoal;
}
//# sourceMappingURL=generics.js.map