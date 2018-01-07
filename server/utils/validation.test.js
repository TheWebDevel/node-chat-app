const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should reject non string values', () => {
        var str = 2324;
        var res = isRealString(str);
        expect(res).toBe(false);
    });

    it('Should reject string only with spaces', () => {
        var str = '    ';
        var res = isRealString(str);
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var str = 'Lord of the rings';
        var res = isRealString(str);
        expect(res).toBe(true);
    });
})
