var tableData = data;

// from data.js
var tbody = d3.select("tbody");

// console.log the data from data.js
console.log(data);


//1. Loop through 'data' and console.log each ufo_event object 
data.forEach(function(ufo_event) {
    console.log(ufo_event);

});

//2. use D3 to append one table row 'tr' for each ufo_event object
data.forEach(function(ufo_event) {
    console.log(ufo_event);
    var row = tbody.append("tr");
});

//3. Use 'Object.entries' to console.log each weather report value
data.forEach(function(ufo_event) {
    console.log(ufo_event);
    var row = tbody.append("tr");

    Object.entries(ufo_event).forEach(function([key, value]) {
        console.log(key, value);
  
    });
});

//4. Use D3 to append a cell per ufo_event value 
data.forEach(function(ufo_event) {
    console.log(ufo_event);
    var row = tbody.append("tr");
    
    Object.entries(ufo_event).forEach(function([key, value]) {
        console.log(key, value);
        //append a cell too the row for each value
        var cell = row.append("td");
    });    
});

//5. Use D3 to update each cell's text with ufo_event values
data.forEach(function(ufo_event) {
    console.log(ufo_event);
    var row = tbody.append("tr");
    Object.entries(ufo_event).forEach(function([key, value]){
        console.log(key, value);
        //append a cell tp the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
//create a function
// function buildTable(data) {
//     tbody.html("");
//     data.forEach((dataRow) => {
//       let row = tbody.append("tr");
//       Object.values(dataRow).forEach((val) => {
//         let cell = row.append("td");
//           cell.text(val);
//         }
//       );
//     });
//   }

  //call the function