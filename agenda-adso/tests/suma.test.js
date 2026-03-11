import test from 'node:test';
import assert from 'node:assert/strict';
function suma(a, b) {
    return a + b;
}
test('suma 3 + 3 = 6', () => {
    assert.equal(suma(3, 3), 6);
});