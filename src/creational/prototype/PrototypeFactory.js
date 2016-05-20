import PrototypeClassA from './PrototypeClassA';

export const UNDEFINED_TYPE_EXCEPTION = 'undefined type exception';

export default class PrototypeFactory {
    constructor(string, num) {
        this.obj = [
            new PrototypeClassA('string0', 0),
            new PrototypeClassA('string1', 1)
        ]
    }

    create(num) {
        if (this.obj[num]) {
            return this.obj[num];
        }

        throw new Error(UNDEFINED_TYPE_EXCEPTION);
    }
}
