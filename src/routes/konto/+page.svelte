<script>
    let rows = [
      { account: 'Konto', amount: 100, description: 'Tekst' },
    ];
  
    let message = ''; // Holds the validation message
  
    function addNewLine() {
      rows = [...rows, { account: '', amount: 0, description: '' }];
    }
  
    function validateInteger(event, index) {
      let value = event.target.value;
      value = parseInt(value) || 0;
      rows[index].amount = value;
    }
  
    function validateRows() {
      const totalAmount = rows.reduce((total, row) => total + Number(row.amount), 0);
      message = totalAmount !== 0 ? 'Bilaget må balansere' : '';
    }
  
    $: diff = rows.reduce((total, row) => total + Number(row.amount), 0);
  </script>
  
  <style>
    .add-rows-section {
      background-color: blue;
      padding: 20px;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px; /* ensures some space beneath this section */
    }
  
    .add-rows-section h2, .message {
      color: white;
      margin-bottom: 10px;
    }
  
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
  
    .column {
      flex: 1; /* Allows each input to expand and fill the row equally */
      padding: 0 10px; /* Provides spacing between inputs */
    }
  
    .action, .message, .diff {
      margin-top: 10px;
    }
  
    button {
      padding: 5px 10px;
      margin-right: 10px; /* Adds spacing between buttons if needed */
    }
    
    /* Additional styles to adjust input width */
    input[type="text"], input[type="number"] {
      width: 100%; /* Ensures inputs take the full width of their container */
      box-sizing: border-box; /* Includes padding and border in the element's total width */
    }
  </style>
  
  <div class="add-rows-section">
    <h2>Bilag</h2>
    {#each rows as row, index}
      <div class="row">
        <div class="column">
          <input type="text" bind:value={row.account} placeholder="Account" />
        </div>
        <div class="column">
          <input type="number" bind:value={row.amount} placeholder="Amount" on:input={(e) => validateInteger(e, index)} />
        </div>
        <div class="column">
          <input type="text" bind:value={row.description} placeholder="Description" />
        </div>
      </div>
    {/each}
    <div class="action">
      <button on:click={addNewLine}>Ny Rad</button>
      <button on:click={validateRows}>Sjekk bilag</button>
    </div>
    {#if message}
    <div class="message">{message}</div>
    {/if}
    <div class="diff">Total Amount: {diff}</div>
  </div>