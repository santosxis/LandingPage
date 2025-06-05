document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.createElement("div");
  status.id = "form-status";
  form.appendChild(status); // adiciona abaixo do botão automaticamente

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    status.textContent = "Enviando...";
    status.style.color = "#00f5ff";
    status.style.marginTop = "1rem";
    status.style.fontWeight = "bold";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        status.textContent = "✅ Mensagem enviada com sucesso!";
        status.style.color = "#00ff88";
        form.reset();

        // Redireciona após 2,5s para obrigado.html
        setTimeout(() => {
          window.location.href = "obrigado.html";
        }, 2500);
      } else {
        throw new Error("Falha no envio");
      }
    } catch (error) {
      status.textContent = "❌ Erro ao enviar. Tente novamente.";
      status.style.color = "#ff4d4d";
    }

    // Oculta mensagem após 4s se não redirecionar
    setTimeout(() => {
      status.textContent = "";
    }, 4000);
  });
});

history.replaceState(null, null, window.location.pathname);