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
});

const intervalID = window.setInterval(showAllMessages, 1000);

async function showAllMessages()
{
 const response = await fetch("/message", {
    method: "GET",
  });
  const allMessages = await response.json();
//   console.log(allMessages);
document.getElementById("messages").value = '';
  allMessages.forEach((msg) => {
        document.getElementById("messages").value += msg.text;
        document.getElementById("messages").value += "\r\n";
      });
}
