var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var ToDo = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('./templates/todoitem.html')
});

var TodoList = Marionette.CompositeView.extend({
  el: '#app-hook',
  template: require('./templates/todolist.html'),

  childView: ToDo,
  childViewContainer: 'ul',

  ui: {
    assignee: '#id_assignee',
    form: 'form',
    text: '#id_text',
  },

  triggers: {
    'submit @ui.form': 'add:todo:item'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onAddTodoItem: function() {
    this.collection.add({
      assignee: this.ui.assignee.val(),
      text: this.ui.text.val()
    });
  },

  itemAdded: function() {
    this.ui.assignee.val('');
    this.ui.text.val('');
  }
});

var todo = new TodoList({
  collection: new Backbone.Collection([
    {
      assignee: 'Scott',
      text: 'Write a book about Marionette',
    },
    {
      assignee: 'Andrew',
      text: 'Do some coding'
    }
  ])
});

todo.render();
