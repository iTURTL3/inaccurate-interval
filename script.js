var inaccurateInterval = function(callback, min, max) {
   var self        = this;
   self.callback   = callback;
   self.min        = min;
   self.max        = max;
   self.running    = false;
   self.randomTime = function() {
      return Math.random() * (self.max - self.min) + self.min;
   };
   self.next = function() {
      if ( self.running ) {
         setTimeout(function() {
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
      self.running = false;
   };
   self.start();
};
