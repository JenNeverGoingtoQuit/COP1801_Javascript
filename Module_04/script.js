// Module 4 - Tip Calculator

// 1) Verify service quality (great, ok, poor)
function isValidQuality(quality) {
  if (!quality) return false;

  const q = quality.trim().toLowerCase();
  return (q === "great" || q === "ok" || q === "poor");
}

// 2) Verify service amount is between $5.00 and $500.00
function isValidAmount(amount) {
  // amount must be a number and within range
  return !isNaN(amount) && amount >= 5 && amount <= 500;
}

// 3) Calculate tip and return the tip amount
function calculateTip(amount, quality) {
  const q = quality.trim().toLowerCase();

  let tipRate = 0;

  if (q === "great") tipRate = 0.20;
  else if (q === "ok") tipRate = 0.15;
  else if (q === "poor") tipRate = 0.10;

  return amount * tipRate;
}

// ----------------------
// Main Program
// ----------------------
const outputEl = document.getElementById("output");

// Prompt user for service amount
const serviceAmountInput = prompt("Enter the dollar amount of the service (between $5.00 and $500.00):");

// If user clicks Cancel, end
if (serviceAmountInput === null) {
  outputEl.textContent = "No service amount entered. Program ended.";
} else {
  const serviceAmount = parseFloat(serviceAmountInput);

  // Validate amount
  if (!isValidAmount(serviceAmount)) {
    outputEl.textContent = "Invalid service amount. Please enter a number between $5.00 and $500.00. Program ended.";
  } else {
    // Prompt user for service quality
    const serviceQuality = prompt("Enter service quality: great, ok, or poor");

    // If user clicks Cancel, end
    if (serviceQuality === null) {
      outputEl.textContent = "No service quality entered. Program ended.";
    } else {
      // Validate quality
      if (!isValidQuality(serviceQuality)) {
        outputEl.textContent = "Invalid service quality. Please enter: great, ok, or poor. Program ended.";
      } else {
        // Calculate tip
        const tipAmount = calculateTip(serviceAmount, serviceQuality);

        // Format money nicely to 2 decimals
        const serviceAmountFormatted = serviceAmount.toFixed(2);
        const tipAmountFormatted = tipAmount.toFixed(2);
        const qualityFormatted = serviceQuality.trim().toLowerCase();

        // Display final output on webpage (for screenshot)
        outputEl.textContent =
          "For a service amount of $" + serviceAmountFormatted +
          " with " + qualityFormatted + " service, the recommended tip is $" + tipAmountFormatted + ".";

        // Optional: also show an alert (nice for user)
        alert(outputEl.textContent);
      }
    }
  }
}
