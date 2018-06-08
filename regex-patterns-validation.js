const options = {
    length: {
        minChar: 4,
        maxChar: 16
    },
    digitNumber: 1,
    specCharNumber: 1,
    majNumber: 1
};

const patterns = {
    checkLength: options.length.maxChar == null ? new RegExp(`.{${options.length.minChar},}`) : new RegExp(`.{${options.length.minChar},${options.length.maxChar}}`),
    digitNumber: new RegExp(`(?=(.*[0-9]){${options.digitNumber},})`),
    checkSpecialCharacter: new RegExp(`(?=(.*[$@$!%*#?&_{|}+.']){${options.specCharNumber},})`),
    checkCapitalCharacter: new RegExp(`(?=(.*[A-Z]){${options.majNumber},})`)
};

const validations = {};
const strings = ['Str1ng to {test}', 'string to test'];

for (let i in patterns) {
    validations[i] = patterns[i].test(strings[0]);
}
console.log(validations);
/**
 * {
 *     checkLength: true,
 *     digitNumber: true,
 *     checkSpecialCharacter: true,
 *     checkCapitalCharacter: true
 * }
 */

for (let i in patterns) {
    validations[i] = patterns[i].test(strings[1]);
}
console.log(validations);
/**
 * {
 *     checkLength: true,
 *     digitNumber: false,
 *     checkSpecialCharacter: false,
 *     checkCapitalCharacter: false
 * }
 */