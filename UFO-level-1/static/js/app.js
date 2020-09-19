var tableData = data;

// find tbody in HTML and create a variable (tbody)
var tbody = d3.select("tbody");

//take the data and append to the html table
function tableBuilder(datatable) {
    //clears out the data 
    tbody.html("");

//5. Use D3 to append input values to html
    datatable.forEach(function(ufo_event) {
        console.log(ufo_event);
        var row = tbody.append("tr");
        Object.entries(ufo_event).forEach(function([key, value]){
            console.log(key, value);
            //append a cell tp the row for each value
            let cell = row.append("td");
            cell.text(value);
        });
    });

};
  //FILTER SECTION

// Complete the event handler function for the form
function eventHandler() {
    let ufo_event = tableData;

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  // Get the value property of the input element
  var inputValue = d3.select("#datetime").property("value");

  console.log(inputValue);

  //take the filtered dates and only input that data into the table
  if (inputValue) {
       var filteredData = ufo_event.filter(ufo_event => ufo_event.datetime === inputValue);
  }  
  //create a function to create the table for the html
  tableBuilder(filteredData);
    };

   // Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers
// run the functions once the events are executed
button.on("click", eventHandler);
form.on("submit", eventHandler);

//show unfiltered data
//execute one of the functions 
tableBuilder(data);