# Inaccurate Interval
Call a function repeatedly between 2 times in JavaScript.

## Example
```JS
var interval = new window.inaccurateInterval(function() {
   console.log('hello world');
}, 10000, 20000);
```

**Stop Interval**
```JS
interval.stop();
```
