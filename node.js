export default class Node {
    constructor(value = null) {
        this.value = value || null;
        this.nextNode = null;
    }
}