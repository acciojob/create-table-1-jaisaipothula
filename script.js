// Function to insert a new row at the top of the table
document.getElementById('addRowBtn').addEventListener('click', function() {
    // Get the table body by its ID
    const tableBody = document.querySelector('#sampleTable tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Create new cells for the new row
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');

    // Set the text content of the new cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';

    // Append cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Append the new row to the table body
    tableBody.insertBefore(newRow, tableBody.firstChild); // Insert at the top
});