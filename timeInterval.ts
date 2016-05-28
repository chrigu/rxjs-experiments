import {Observable} from 'rxjs';
import {take} from 'rxjs/operator/take';

var subject$ = Observable.interval(500).take(60);

setTimeout(() => subject$.subscribe((x) => console.log("First: " + x)), 3000);

setTimeout(() => subject$.subscribe((x) => console.log("Second: " + x)), 6000);
