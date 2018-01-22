function Card(description) {
	
	var self = this;

	this.id = randomString();
	this.description = description;
	this.$element = createCard();

	function createCard() {
	
		// creating the blocks
		var $card = $('<li>').addClass('card');
		var $cardDelete = $('<button>').addClass('btn-delete btn btn-sm btn-danger').text('X');
		var $cardDescription = $('<p>').addClass('card-description').text(self.description);

		// binding to click event
		$cardDelete.click(function(){
    	
    		self.removeCard();
	
		});

		// combining block and return the card
		$card.append($cardDelete)
			.append($cardDescription);

		return $card;

	}

}

Card.prototype = {

	removeCard: function() {
		
		this.$element.remove();

	}

}