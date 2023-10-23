// Generate Random Number String
function generateRandomNumberString(length) {

  // If the length is not a number, or less than/equal to zero
  if (typeof length !== 'number' || length <= 0) {
    return 'Invalid length'; // Error
  }

  // Empty String
  let result = '';

  // Loop over 'length' times
  for (let i = 0; i < length; i++) {

    // Generate a random number between 0 and 9
    const randomNumber = Math.floor(Math.random() * 10);

    // Add to the string
    result += randomNumber;
  }

  // Return results
  return result;
}

// Download file
function download(content, filename="file.txt"){

  // Create a Blob (Binary Large Object) containing the text
  const blob = new Blob([content], {type: 'text/plain'});

  // Create a URL for the Blob
  var url = window.URL.createObjectURL(blob);

  // Create a temporary anchor element
  var a = document.createElement("a");
  a.href = url;
  a.download = filename; // Set the file name

  // Trigger a click event on the anchor to initiate the download
  a.click();

  // Clean up resources
  window.URL.revokeObjectURL(url);
}

// Copy to clipboard
async function clipboard(content){
  // If the clipboard module exists in the client's browser
  if (navigator.clipboard) {
    try {
      // Copy the string to the clipboard
      await navigator.clipboard.writeText(content);

      // Successful copy alert
      console.log(set.species + " copied to clipboard successfully.");
    } catch (err) {
      // Report the failure to the error console
      console.error(
        'Failed to copy content "' + content + '"! Reason: "' + err + '"'
      );
    }
  } // Clipboard module is not available
  else {
    // Report failure to console, continue
    console.error("Clipboard interaction not supported by browser.");
  }
}

// Writable Config Textarea
const writableConfig = document.getElementById('writableConfig');

// Update page contents
async function generateWritableConfig(){

  // Update the writable config contents
  writableConfig.value = `[RuntimeConfig]
;; RuntimeConfig
mode=
netID=${inputNetworkId.value}
serialID=${inputSerialId.value}

[MuchaChargeData]
;; MuchaChargeData
camode-ch_token_consumed=0
camode-ch_token_charged=0
camode-ch_token_unit=
`;
}

// Input Network id
const inputNetworkId = document.getElementById('networkId');

// Reroll Network id
const rerollNetworkId = document.getElementById('rerollNetworkId');

// Generate random network id
async function generateNetworkId(){

  // Generate a random network id string
  const networkId = generateRandomNumberString(8);

  // Update the contents of the network id input
  inputNetworkId.value = networkId;

  // Update writable config
  generateWritableConfig();
}

// Network id

// Copy Network id
const copyNetworkId = document.getElementById('copyNetworkId');

// Copy network id click event listener
copyNetworkId.addEventListener("click", async () => {
  // Get the value from the text area
  content = inputNetworkId.value;

  // Copy the contents
  clipboard(content);
});

// Input Serial id
const inputSerialId = document.getElementById('serialId');

// Reroll Serial id
const rerollSerialId = document.getElementById('rerollSerialId');

// Generate random serial id
async function generateSerialId(){

  // Generate a random serial id string
  const serialId = generateRandomNumberString(12);

  // Update the contents of the network id input
  inputSerialId.value = serialId;

  // Update writable config
  generateWritableConfig();
}

// Copy Serial id
const copySerialId = document.getElementById('copySerialId');

// Copy serial id click event listener
copySerialId.addEventListener("click", async () => {
  // Get the value from the text area
  content = inputSerialId.value;

  // Copy the contents
  clipboard(content);
});

// Reroll Both Values Button
const rerollBoth = document.getElementById('rerollBoth');

// Copy Content Button
const copyContent = document.getElementById('copyContent');

// Copy board network id event listener

// Copy writable config to clipboard event listener
copyContent.addEventListener("click", async () => {
  // Get the value from the text area
  content = writableConfig.value;

  // Copy the contents
  clipboard(content);
});

// Download File Button
const downloadFile = document.getElementById('downloadFile');

// Download board network id event listener

// Download writable config to clipboard event listener
downloadFile.addEventListener("click", async () => {
  // Get the value from the text area
  content = writableConfig.value;

  // Copy the contents
  download(content, "WritableConfig.ini");
});

// Generate network id
generateNetworkId();

// Generate serial id
generateSerialId();