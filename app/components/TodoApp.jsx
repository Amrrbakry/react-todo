 var React = require('react');
 var TodoList = require('TodoList');
 var AddTodo = require('AddTodo');

 var TodoApp = React.createClass({
   getInitialState: function() {
     return {
       todos: [
         {
           id: 1,
           text: 'Walk the dog!'
         },
         {
           id: 2,
           text: 'Feed the cat!'
         },
         {
           id: 3,
           text: 'learn react'
         },
         {
           id: 4,
           text: 'rule the world'
         }

       ]
     }
   },
   handleAddTodo: function(text) {
     alert('new todo: ' + text);
   },
   render: function() {
     var {todos} = this.state;
     return(
       <div className='row'>
         <div className='column medium-6 small-4'>
           <TodoList todos={todos}/>
           <AddTodo onAddTodo={this.handleAddTodo}/>
         </div>
       </div>
     );
   }
 });

 module.exports = TodoApp;
