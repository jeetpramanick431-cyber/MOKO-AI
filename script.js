async function send() {
  const input = document.getElementById("input");
  const messages = document.getElementById("messages");
  const msg = input.value.trim();

  if (!msg) return;

  messages.innerHTML += `
    <div class="message user"><b>You:</b> ${msg}</div>
  `;

  input.value = "";
  messages.scrollTop = messages.scrollHeight;

  messages.innerHTML += `
    <div class="message bot" id="typing"><b>Moko:</b> typing...</div>
  `;
  messages.scrollTop = messages.scrollHeight;

  try {
    const res = await fetch("https://node-express--topy220.replit.app/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();

    document.getElementById("typing").remove();

    messages.innerHTML += `
      <div class="message bot"><b>Moko:</b> ${data.reply}</div>
    `;
  } catch (error) {
    document.getElementById("typing").remove();
    messages.innerHTML += `
      <div class="message bot"><b>Moko:</b> ⚠️ Connection error</div>
    `;
  }

  messages.scrollTop = messages.scrollHeight;
}
 
 
