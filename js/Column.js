function Column(name) {
	
	var self = this;
	
	this.id = randomString();
	this.name = name;
	this.element = createColumn();

	function createColumn() {
	
		// TWORZENIE NOWYCH WĘZŁÓW
		var column = $('<div class="column"></div>');
		var columnTitle = $('<h4 class="column-title">' + self.name + '</h4>');
		var columnDelete = $('<button class="btn-delete btn btn-sm btn-danger">Usuń kolumnę</button>');
		var columnAddCard = $('<button class="add-card btn btn-sm btn-success">Dodaj kartę</button>');
		var columnCardList = $('<ul class="card-list"></ul>');
		
		// PODPINANIE ODPOWIEDNICH ZDARZEŃ POD WĘZŁY
		columnDelete.click(function() {
	
			self.deleteColumn();
	
		});
		
		columnAddCard.click(function(event) {
	
			event.preventDefault();
			self.createCard(new Card(prompt("Wpisz zadanie do wykonania")));
	
		});
			
		// KONSTRUOWANIE ELEMENTU KOLUMNY
		column.append(columnTitle)
			.append(columnDelete)
			.append(columnAddCard)
			.append(columnCardList);
			return column;
	
		}
	
	}

Column.prototype = {

	createCard: function(card) {

	  this.element.children('ul').append(card.element);

	},

	deleteColumn: function() {

	  this.element.remove();

	}

};