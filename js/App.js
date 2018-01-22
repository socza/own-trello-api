// function randomString() {

// 	var chars  = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
// 	var str = '';
	
// 	for (i = 0; i < 10; i++) {

// 		str += chars[Math.floor(Math.random() * chars.length)];

// 	}

// 	return str;

// }

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  	
  	'X-Client-Id': 'X-Client-Id',
  	'X-Auth-Token': 'X-Auth-Token'

};

$.ajax({
	
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
	
		setupColumns(response.columns);
    
    }

});

function setupColumns(columns) {
 
    columns.forEach(function(column) {

    	var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);

    });

}

function setupCards(col, cards) {

	cards.forEach(function(card) {
        
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);

  	})

}

// CREATING COLUMNS
var todoColumn = new Column('Do zrobienia');
var doingColumn = new Column('W trakcie');
var correctionColumn = new Column('Do poprawy');
var doneColumn = new Column('Ukończone');

// ADDING COLUMNS TO THE BOARD
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(correctionColumn);
board.addColumn(doneColumn);

// CREATING NEW CARDS
var card1 = new Card('Nowe zadanie');
var card2 = new Card('Utwórz tablice kanban');

// ADDING CARDS TO COLUMNS
todoColumn.addCard(card1);
doneColumn.addCard(card2);