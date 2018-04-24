var Marionette = require('backbone.marionette');

var Helloworld = Marionette.LayoutView.extend({
  el: '#app-hook',
  template: require('./templates/layout.html')
});

var hello = new Helloworld();

hello.render();
