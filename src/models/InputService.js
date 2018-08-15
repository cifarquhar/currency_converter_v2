import { Subject } from "rxjs";

class InputService {
	
	constructor() {
		this.subject = new Subject();
	}
	
	emit(value) {
		this.subject.next(value);
	}
	
	values() {
		return this.subject.asObservable();
	}
}

export default InputService