# Inaccurate Interval
Call a function repeatedly between 2 times.

## Example
```JS
var interval = new window.inaccurateInterval(function() {
   console.log('hello world');
}, 10000, 20000);
```

## Stop interval
```JS
interval.stop();
```

## Restart interval
```JS
interval.start();
```
