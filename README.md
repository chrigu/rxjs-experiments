# RxJS tinkering

Just some basic tests with RxJS. 

## Setup

`npm install -g typings`

`npm install`

`typings install`

## Run

`npm run xyz.ts`

## Files

### behaviorSubject.ts

BehaviorSubject with 2 subscribers.

### behaviorSubject.error.ts

BehaviorSubject that errors with 2 subscribers.

### replaySubject.ts

ReplaySubject with 2 subscribers.

### timeInterval.ts

Cold observable with timeInterval

### publish.ts

Connectable observable (hot) with 2 subscribers.

### publish.refCount.ts

Connectable observable [recCounted](http://reactivex.io/documentation/operators/refcount.html) (hot) with 2 subscribers.
