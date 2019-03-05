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

//------------------------------------------- Get value from checkboxes-----------------------------

    var checkes=[];
    var boxes = d3.selectAll("#menuElement");

    console.log(boxes)

    boxes.each(function(){

        //console.log(this.value)
        //console.log(this.checked);

        if(this.checked==true){

            checkes.push(this.value);

        }
        

    });

    //console.log(checkes)

//------------------------------------------- Get value from checkboxes-----------------------------
      


});




/* var checked = [];
d3.select("button").on("click", function () {
    var boxes = d3.selectAll("input.checkbox:checked");
    boxes.each(function () {
        checked.push(this.value)
    });
    console.log(checked)
}); */















 







    
    





















    
    

















