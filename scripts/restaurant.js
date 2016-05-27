var allTables = [];
var debugMode = true;

var addTable = function(){
  if( debugMode ) console.log( 'in addTable' );
  // get user input
  var name = document.getElementById('nameIn').value;
  var capacity = document.getElementById('capacityIn').value;
  // assemble new table object
  var newTable ={
    'name': name,
    'capacity': capacity,
    'status': 'empty'
  };
  // push to allTables global
  allTables.push( newTable );
  if( debugMode ) console.log( 'added table: ' + newTable.name );
  listTables();
}

var changeStatus = function(){
  if( debugMode ) console.log( 'in changeStatus' );
  // get user input
  var name = document.getElementById('statusNameIn').value;
  var status = document.getElementById('statusIn').value;

  // loop through allTables and check for the given name
  for(var i=0; i<allTables.length; i++){
    // check if this table has the name for which I'm looking
    if( allTables[i].name == name ){
      // I have found a table with the correct name
      if( debugMode ) console.log( 'updated status for table: ' + allTables[i].name );
      allTables[i].status = status;
      listTables();
      return;
    }
  }
  // no such table
  alert( "no such table!!!");
}

var listTables = function(){
  if( debugMode ) console.log( 'in listTables' );
  var outputText = '';
  for(var i=0; i<allTables.length; i++){
    // add table name to outputString
    outputText += '<p><b>' + allTables[i].name + '</b> - seats: ' + allTables[i].capacity + ' status: ' + allTables[i].status + '</p>';
  }
  // display outputText as HTML of this div
  document.getElementById('outputDiv').innerHTML = outputText;
}
