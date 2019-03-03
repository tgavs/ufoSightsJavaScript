// from data.js
var tableData = data;

// Select the Filter Button in the HTML
var filter = d3.select("#filter-btn");



filter.on("click",function(){

    //Remove the previous search

    d3.selectAll("td").remove();

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    //parse Input Date

    var parseDate= d3.timeParse("%m/%d/%Y");

    var parseInput=parseDate(inputValue);

    console.log(parseInput);

    // Build new table records

    var tbody = d3.select("tbody");


    tableData.forEach(ufoSight => {

        if(parseDate(ufoSight.datetime)>parseInput){

            var row = tbody.append("tr").attr("scope", "row");

            Object.entries(ufoSight).forEach(([key,value])=>{

                var cell = row.append("td");

                cell.text(value);
            });   
        };
        
    });  

})














 







    
    





















    
    

















