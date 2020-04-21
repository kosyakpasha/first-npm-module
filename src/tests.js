import assert from 'assert';

import { arrModule } from "./arr";
import { stringModule } from "./string";

const expectedArr1 = [0, 1];
const expectedArr2 = [0, 1, 2, 3, 4];
const resultArr1 = arrModule([0], 1);
const resultArr2 = arrModule([0, 1, 2], 3, 4);

const expectedString1 = 'Hello, I am a string module!';
const expectedString2 = 'Hello world!';
const resultString1 = stringModule('Hello,', ' I', ' am', ' a string module!');
const resultString2 = stringModule('Hello', ' world!');

assert.deepEqual(expectedArr1, resultArr1);
assert.deepEqual(expectedArr2, resultArr2);
assert.equal(expectedArr1.length, expectedArr1.length);

assert.equal(expectedString1, resultString1);
assert.equal(expectedString2, resultString2);
assert.equal(expectedString1.length, expectedString1.length);
