var board = {
    
    name: 'Kanban Board',
  
    addColumn: function(column) {
    
        this.$element.append(column.$element);
        initSortable();
  
    },

    $element: $('#board .column-container')

};


$('.create-column').click(function() {  
    
    var name = prompt('Wpisz nazwę kolumny'); 
    var column = new Column(name);  
    board.addColumn(column);
  
});

function initSortable() {
  
    $('.column-card-list').sortable({
    
        connectWith: '.column-card-list',
        placeholder: 'card-placeholder'
  
    }).disableSelection();

}