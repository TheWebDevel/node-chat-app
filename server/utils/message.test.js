const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        var res = generateMessage('sathish', 'Hey');
        expect(res.from).toBe('sathish');
        expect(res.text).toBe('Hey');
        expect(res.createdAt).toBeA('number');
    });
});
