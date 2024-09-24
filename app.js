document
  .getElementById("appointment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const carReg = document.getElementById("car-reg").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const uploadDocs = document.getElementById("upload-docs").value;
    const paymentAmount = document.getElementById("payment-amount").value;

    if (carReg && expiryDate && uploadDocs && paymentAmount) {
      alert(
        `Document renewal for car registration ${carReg} has been submitted.`
      );
    } else {
      alert("Please fill in all fields.");
    }
  });
