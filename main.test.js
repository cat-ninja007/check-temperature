const { expect, describe, it } = require('@jest/globals');
const checkTemperature = require('./main');

test('returns "Too Cold" when temperature is below 15', () => {
    expect(checkTemperature(10)).toBe("Too Cold");
});

test('returns "Just Right" when temperature is between 15 and 25', () => {
    expect(checkTemperature(15)).toBe("Just Right");
    expect(checkTemperature(20)).toBe("Just Right");
    expect(checkTemperature(25)).toBe("Just Right");
});

test('returns "Too Hot" when temperature is above 25', () => {
    expect(checkTemperature(30)).toBe("Too Hot");
});