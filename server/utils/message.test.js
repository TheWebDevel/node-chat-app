const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        var res = generateMessage('sathish', 'Hey');
        expect(res.from).toBe('sathish');
        expect(res.text).toBe('Hey');
        expect(res.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct message object with url', () => {
        var from = 'Admin';
        var lat = '34.343434';
        var lon = '34.3435';
        var res = generateLocationMessage(from,lat,lon);
        expect(res).toInclude({
            url: `https://www.google.com/maps?q=${lat},${lon}`,
        });
        expect(res.createdAt).toBeA('number');
    });
});
