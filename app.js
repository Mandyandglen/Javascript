// from data.js
var tableData = data;

var filterButton = d3.select("#filter-btn");
var inputElement = d3.select("#myInput");


var table_body = d3.select("tbody");
table_body.attr("class", "table table-striped")

function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

function myFunction(this_data){
    this_data.forEach(x => {
        let tb = table_body.append('tr')
        Object.entries(x).forEach(([key, value]) => {
            tb.append('td').text(value)

        })
    })
    
}
inputElement.on("keyup", function(){
    inputValue = inputElement.property("value")
    if(inputValue == 0){
        d3.select('tbody').selectAll('tr').remove();
        myFunction(tableData);
        console.log('reset');
    }else{
        d3.select('tbody').selectAll('tr').remove();

        filterDates = tableData.filter(tableData => tableData.datetime.indexOf(inputValue) >= 0 ? true : false);
        console.log("Date filter: ",filterDates.length);
        //myFunction(filterDates);

        filterCity = tableData.filter(tableData => tableData.city.indexOf(inputValue) >= 0 ? true : false);
        console.log("City filter: ",filterCity.length);
        //myFunction(filterCity);

        filterState = tableData.filter(tableData => tableData.state.indexOf(inputValue) >= 0 ? true : false);
        console.log("State filter: ",filterState.length);
        //myFunction(filterState);

        filterCountry = tableData.filter(tableData => tableData.country.indexOf(inputValue) >= 0 ? true : false);
        console.log("Country filter: ",filterCountry.length);
        //myFunction(filterCountry);

        filterShape = tableData.filter(tableData => tableData.shape.indexOf(inputValue) >= 0 ? true : false);
        console.log("Shape filter: ",filterShape.length);
        //myFunction(filterShape);

        
        console.log("TEST:   ", tableData[0].durationMinutes.indexOf(inputValue) >= 0 ? true: false);

        filterComments = tableData.filter(tableData => tableData.comments.indexOf(inputValue) >= 0 ? true : false);
        console.log("Comments filter: ",filterComments.length);
        //myFunction(filterComments);

        let combined_filter = removeDuplicates(filterDates.concat(filterCity, filterState, filterCountry, filterShape, filterComments))

        myFunction(combined_filter)
    }
    
})
myFunction(tableData)


// YOUR CODE HERE!
