/*
   @https://github.com/jakemadness/inaccurate-interval
*/
window.inaccurateInterval = function(callback, min, max) {
   var self        = this;
   self.callback   = callback;
   self.min        = min;
   self.max        = max;
   self.timeout    = false;
   self.running    = false;
   self.randomTime = function() {
      return Math.random() * (self.max - self.min) + self.min;
   };
   self.next = function() {
      if ( self.running ) {
         self.timeout = setTimeout(function() {
            self.callback();
            self.next();
         }, self.randomTime());
      }
   };
   self.start = function() {
      self.running = true;
      self.next();
   };
   self.stop = function() {
      clearTimeout(self.timeout);
      self.running = false;
   };
   self.start();
};
