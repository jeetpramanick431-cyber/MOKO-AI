async function send() {
  const input = document.getElementById("input");
  const messages = document.getElementById("messages");
  const msg = input.value.trim();

  if (!msg) return;

  // Show user message
  messages.innerHTML += `
    <div class="message user"><b>You:</b> ${msg}</div>
  `;

  input.value = "";
  messages.scrollTop = messages.scrollHeight;

  // Typing effect
  messages.innerHTML += `
    <div class="message bot" id="typing"><b>Moko:</b> typing...</div>
  `;
  messages.scrollTop = messages.scrollHeight;

  // Dummy AI reply (testing)
  setTimeout(() => {
    document.getElementById("typing").remove();
    messages.innerHTML += `
      <div class="message bot"><b>Moko:</b> 🤖 I received: "${msg}"</div>
    `;
    messages.scrollTop = messages.scrollHeight;
  }, 800);
}
