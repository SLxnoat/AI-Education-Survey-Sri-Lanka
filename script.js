document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.text())
    .then((response) => {
      document.getElementById("responseMsg").innerText = "✅ Response submitted! Thank you.";
      document.getElementById("surveyForm").reset();
    })
    .catch((err) => {
      document.getElementById("responseMsg").innerText = "❌ Something went wrong. Try again.";
      console.error(err);
    });
});
