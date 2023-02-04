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