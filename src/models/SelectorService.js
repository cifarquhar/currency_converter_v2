import { Subject } from "rxjs";

class SelectorService {

    constructor() {
        this.subject = new Subject();
    }

    emit(value) {
        this.subject.next(value);
    }

    currencies() {
        return this.subject.asObservable();
    }
} 

export default SelectorService