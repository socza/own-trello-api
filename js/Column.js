function Column(name) {

	var self = this;
	
	this.id = randomString();
	this.name = name;
	this.$element = createColumn();

	function createColumn() {

		// creating the blocks
		var $column = $('<div>').addClass('column');
		var $columnTitle = $('<h4>').addClass('column-title').text(self.name);
		var $columnDelete = $('<button>').addClass('btn-delete btn btn-sm btn-danger').text('Usuń kolumnę');
		var $columnAddCard = $('<button>').addClass('add-card btn btn-sm btn-success').text('Dodaj kartę');
		var $columnCardList = $('<ul>').addClass('column-card-list');

		// binding to click event
		$columnDelete.click(function() {

			self.removeColumn();

		});

		$columnAddCard.click(function(event) {

			self.addCard(new Card(prompt("Wpisz zadanie do wykonania")));

		});

		// combining block and return the card
		$column.append($columnTitle)
			.append($columnDelete)
    		.append($columnAddCard)
    		.append($columnCardList);
    	
    	return $column;
	
	}

}

Column.prototype = {
	
	addCard: function(card) {
  	
  		this.$element.children('ul').append(card.$element);
	
	},
	
	removeColumn: function() {
  	
  		this.$element.remove();
	
	}

};