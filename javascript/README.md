# Inaccurate Interval
Call a function repeatedly between 2 times.

## Example: Console log "hello world" every 10 - 20s
```JS
var interval = new inaccurateInterval(function() {
   console.log('hello world');
}, 10000, 20000);
```

## Example: Stop interval
```JS
interval.stop();
```

## Example: Restart interval
```JS
interval.start();
```
