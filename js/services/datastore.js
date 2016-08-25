/*local storage for our todos */
(function (window) {
	'use strict';

	function Store(name){
        this._dbName = name;

		if (!localStorage[name]) {
			var data = {'todo_list':[],'inprogress_list':[],'done_list':[]};
			localStorage[name] = JSON.stringify(data);
		}

    }
    
    
    Store.prototype.findAll = function () {
		return JSON.parse(localStorage[this._dbName]);
	};
    
    
    Store.prototype.save = function (item, id, callback) {
		var data = JSON.parse(localStorage[this._dbName]);
		var todos = data.todo_list;
        
        //might think of using callback later
		callback = callback || function () {};

		// If an ID was actually given, find the item and update each property
		if (id) {
			//logic for editing, to come later
		} else {            
			todos.push(item);
			localStorage[this._dbName] = JSON.stringify(data);
		}
	};

    Store.prototype.orderChanged = function (data) {
		// Stored reordered data into local storage
		localStorage[this._dbName] = JSON.stringify(data);
	};
    
	/**
	 * Will remove an item from the Store based on its ID
	 *
	 * @param {number} id The ID of the item you want to remove
	 * @param {function} callback The callback to fire after saving
	 */
	Store.prototype.remove = function (id, callback) {
		var data = JSON.parse(localStorage[this._dbName]);
		var todos = data;

		for (var i = 0; i < todos.length; i++) {
			if (todos[i].id == id) {
				todos.splice(i, 1);
				break;
			}
		}

		localStorage[this._dbName] = JSON.stringify(data);
		callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
	};

	// Export to window
	window.todoDataStore = window.todoDataStore || {};
	window.todoDataStore.Store = Store;
})(window);
