//your code here
// Get references to input fields and add button
const nameInput = document.getElementById('item-name-input');
const priceInput = document.getElementById('item-price-input');
const addButton = document.getElementById('add-button');

// Get reference to table body
const tableBody = document.querySelector('#shopping-list tbody');

// Get reference to grand total element
const grandTotal = document.querySelector('td[data-ns-test="grandTotal"]');

// Add event listener to add button
addButton.addEventListener('click', function() {
  // Get input values
  const name = nameInput.value;
  const price = priceInput.value;

  // Validate input
  if (name === '' || price === '' || isNaN(price)) {
    alert('Please enter a valid name and price');
    return;
  }

  // Create table row
  const row = document.createElement('tr');

  // Create name and price cells
  const nameCell = document.createElement('td');
  nameCell.setAttribute('data-ns-test', 'item-name');
  nameCell.innerText = name;

  const priceCell = document.createElement('td');
  priceCell.setAttribute('data-ns-test', 'item-price');
  priceCell.innerText = price;

  // Append cells to row
  row.appendChild(nameCell);
  row.appendChild(priceCell);

  // Append row to table
  tableBody.appendChild(row);

  // Update grand total
  grandTotal.innerText = parseFloat(grandTotal.innerText) + parseFloat(price);

  // Clear input fields
  nameInput.value = '';
  priceInput.value = '';
});
