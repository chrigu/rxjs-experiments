import {Observable} from 'rxjs';
import {take} from 'rxjs/operator/take';

let obs$ = Observable.interval(500).take(60).publish();

obs$.subscribe(x => console.log("First: ", x));

setTimeout(() => obs$.connect(), 3*1000);

setTimeout(() => {
    obs$.subscribe(x => console.log("Second: ", x));
}, 6*1000);
