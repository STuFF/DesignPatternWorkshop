export default class PrototypeAbstract {
    clone() {
        return Object.assign({}, this);
    }
}
