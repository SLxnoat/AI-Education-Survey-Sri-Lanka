document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  fetch("https://script.google.com/macros/s/AKfycbw6HjG5G7RT59EcHoiveE7oCeM-DMNTjaKdq0u3ULAs46yrbqnCGc18RXQkWnmYFve_lw/exec", {
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
