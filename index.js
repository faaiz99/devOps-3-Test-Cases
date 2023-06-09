const { TestCase_1 } = require('./TestCase_1');
const { TestCase_2 } = require('./TestCase_2');
const { TestCase_3 } = require('./TestCase_3');
const { TestCase_4 } = require('./TestCase_4');
const { TestCase_5 } = require('./TestCase_5');

const main = async () => {
	await TestCase_1();
	await TestCase_2();
	await TestCase_3();
	await TestCase_4();
	await TestCase_5();
};

main();
