const formObj = document.getElementById("chat-form");
formObj.addEventListener("submit", async function (event) {
  event.preventDefault();
  let text = document.getElementById("text-input").value;
  document.getElementById("text-input").value = '';
  const response = await fetch("/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const msgJson = await response.json();
  document.getElementById("messages").value += msgJson.text;
  document.getElementById("messages").value += "\r\n";
//   msgJson.forEach((msg) => {
//     document.getElementById("messages").value += msg.text;
//   });
});
