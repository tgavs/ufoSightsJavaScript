// from data.js
var tableData = data;

// Select the Filter Button in the HTML
var filter = d3.select("#filter-btn");


//---------------------------< Get list of unique states>-------------------------------

/* var allStates=[]

tableData.forEach(d=> allStates.push(d.state));

console.log(allStates);

var uniqueStates= [...new Set(allStates)];

console.log(uniqueStates);

var stateList = d3.select("#statesList")

uniqueStates.forEach(state=>{

    var row = stateList.append("li")
                       .attr("id", "CheckMenu")
                       .append("input")
                       .attr("id", "menuElement")
                       .attr("type", "checkbox")
                       .property("value", state)
                       .append("text");
                       
    var texto=row.text(state);

    texto.style("color","black");
    console.log(row);
});
 */







//---------------------------</Get list of unique states>-------------------------------


//---------------------------<Filter Table Event>----------------------------------------

filter.on("click",function(){

    //Remove the previous search

    d3.selectAll("td").remove();

    // Prevent the page from refreshing
    d3.event.preventDefault();


    //-----------------------<Get Datetime Input>---------------------------------

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //console.log(inputValue);

    //parse Input Date

    var parseDate= d3.timeParse("%m/%d/%Y");

    var parseInput=parseDate(inputValue);

    console.log(parseInput);


    //-----------------------</Get Datetime Input>---------------------------------

    //---------------------- <Get value from checkboxes>-----------------------------

    var checkes = [];
    var boxes = d3.selectAll("#menuElement");

    boxes.each(function () {

        //console.log(this.value)
        //console.log(this.checked);

        if (this.checked == true) {

            checkes.push(this.value);

        }
    
    });

    console.log(checkes)

    //--------------------------</Get value from checkboxes>-----------------------------

    //--------------------------<Get City Input>------------------------------------------

    //var city = d3.select("#cityName")

    //console.log(city)

    //var cityName = city.property("value");

    //console.log(cityName)

    //---------------------------</Get City Input>------------------------------------------

    //---------------------------<Filter Data> -------------------------------------------
   

/*     var filterDate = tableData.filter(ufoSight => parseDate(ufoSight.datetime) >= parseInput);

    console.log(filterDate);
   
    var filterCity = tableData.filter(ufoSight=> String(ufoSight.city)==String(cityName));

    console.log(filterCity);

    var filterState = tableData.find(ufoSight => checkes.includes(ufoSight.state) == true);

    console.log(filterState); */

  
    var ufoSights=[];

    tableData.forEach(d=> {

        if (parseDate(d.datetime)>=parseInput

            //&& d.city == cityName

            && checkes.includes(d.state) == true

            ) {
                ufoSights.push(d);
                console.log(d);              
            }     
    });

    console.log(ufoSights)
    
    //---------------------------</Filter Data> -------------------------------------------

   // ---------------------------<Build new table records>---------------------------------------

    var tbody = d3.select("tbody");

    ufoSights.forEach(ufoSight => {

            var row = tbody.append("tr").attr("scope", "row");

            Object.entries(ufoSight).forEach(([key,value])=>{

                var cell = row.append("td");

                cell.text(value);
            });        
    }); 


 // ---------------------------</Build new table records>---------------------------------------

});

















 







    
    





















    
    

















