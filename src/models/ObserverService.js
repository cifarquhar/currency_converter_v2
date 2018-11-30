import { Subject } from "rxjs";

class ObserverService {

  constructor() {
    this.subject = new Subject();
  }

  emit(value) {
    this.subject.next(value);
  }

  getObservable() {
    return this.subject.asObservable();
  }
}

export default ObserverService