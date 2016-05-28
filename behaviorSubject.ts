import {BehaviorSubject, Observable} from 'rxjs';
import {take} from 'rxjs/operator/take';

let subject$ = new BehaviorSubject("init value");
let i = 0;

function getObs(): Observable<string> {
    setTimeout(() => subject$.next("next " + i), 2000);
    i++;
    return subject$.asObservable();
}

let first$ = getObs();
first$.subscribe(x => console.log("First:", x),
    (error) => console.log("Frist: An error occured ", error));

setTimeout(() => {
    let second$ = getObs();
    second$.subscribe(x => console.log('Second: ' + x), 
    error => console.log("Second error: " + error))
}, 3000)
