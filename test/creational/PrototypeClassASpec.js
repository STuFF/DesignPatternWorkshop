import { default as PrototypeClassA } from '../../src/creational/prototype/PrototypeClassA';
import { default as PrototypeFactory, UNDEFINED_TYPE_EXCEPTION } from '../../src/creational/prototype/PrototypeFactory';

describe('prototype', function() {
    const factory = new PrototypeFactory();

    it('should throw exception is type does not exists', () => {
        expect(() => { factory.create(-1) }).to.throw(UNDEFINED_TYPE_EXCEPTION);
    });

    it('should return object of type 1', () => {
        const type1 = factory.create(1);
        const expected = new PrototypeClassA('string1', 1);
        expect(type1).to.eql(expected);
    })
});
