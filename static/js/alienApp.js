// import the table data from app.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// build a Table

function buildTable(data) {
    // clear existing data
    tbody.html("");
    // loop through the new data objects
    data.forEach((dataRow) => {
    // append that row to the body of the table
        let row = tbody.append("tr");
    // loop through each field in the dataRow and add the values to the table as a cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }        
        );
    });
};

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check for a date entered by user, and fiilter using it
    if (date) {
        // apply the date filter to the data
        filteredData = filteredData.filter(row => row.datetime === date);
      }
    // rebuild the table using the new filtered data
    // NOTE: if no filter is present, the table will be the base objects
    buildTable(filteredData);
}

// handle a click on the filter
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table
buildTable(tableData);