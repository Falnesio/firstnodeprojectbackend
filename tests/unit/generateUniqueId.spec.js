const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generaate a unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});

