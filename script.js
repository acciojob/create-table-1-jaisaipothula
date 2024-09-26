// Function to insert a new row at the top of the table
function insert_Row() {
    // Get the table by its ID
    const table = document.getElementById('sampleTable');

    // Create a new row
    const newRow = table.insertRow(1); // Insert at index 1 to add above the first data row

    // Create new cells for the new row
    const cell1 = newRow.insertCell(0); // Left cell
    const cell2 = newRow.insertCell(1); // Right cell

    // Set the text content of the new cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
}
