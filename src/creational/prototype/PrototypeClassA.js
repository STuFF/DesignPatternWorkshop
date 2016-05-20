import PrototypeAbstract from './PrototypeAbstract';

export default class PrototypeClassA extends PrototypeAbstract {
    constructor(string, num) {
        super();

        this.string = string;
        this.num = num;
    }
}
