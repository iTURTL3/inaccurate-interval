/*
   @https://github.com/jakemadness/inaccurate-interval
*/
window.inaccurateInterval = function(callback, min, max) {
   var self        = this;
   self.callback   = callback;
   self.timeout    = false;
   self.running    = false;
   self.randomTime = function() {
      return Math.random() * (max - min) + min;
   };
   self.next = function() {
      self.timeout = setTimeout(function() {
         self.callback();
         self.next();
      }, self.randomTime());
   };
   self.start = function() {
      if ( !self.running ) {
         self.running = true;
         self.next();
      }
   };
   self.stop = function() {
      if ( self.running ) {
         clearTimeout(self.timeout);
         self.running = false;
      }
   };
   self.start();
};
