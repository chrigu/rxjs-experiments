import {ReplaySubject} from 'rxjs';
import {take} from 'rxjs/operator/take';

let i = 1;

var subject$ = new ReplaySubject(2);

setInterval(() => subject$.next(i++), 500)

setTimeout(() => subject$.subscribe((x) => console.log("First: " + x)), 3000);

setTimeout(() => subject$.subscribe((x) => console.log("Second: " + x)), 6000);
