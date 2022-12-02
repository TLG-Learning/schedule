// actions
const walk = (name) => `${name} walk`;
const sit = (name) => `${name} sit`;
const run = (name) => `${name} run`;

const actionCreator = (animalType, actionFn) => actionFn(animalType);

console.log(actionCreator("Lion", walk));
