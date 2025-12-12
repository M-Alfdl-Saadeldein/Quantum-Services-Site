function sendWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const org = document.getElementById("org").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "249905661400"; // ضع رقمك هنا

  const text =
`الاسم: ${name}
البريد: ${email}
المؤسسة: ${org}
الرسالة: ${message}

(تم الإرسال من موقع كوانتم)`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  const msgEl = document.getElementById("msg");
  msgEl.style.display = "block";
  msgEl.style.opacity = 0;
  msgEl.style.transition = "opacity .28s ease, transform .28s ease";
  msgEl.style.transform = "translateY(-6px)";
  requestAnimationFrame(() => {
    msgEl.style.opacity = 1;
    msgEl.style.transform = "translateY(0)";
  });

  // reset form after a short delay so user sees the message
  setTimeout(() => {
    document.getElementById("contactForm").reset();
  }, 500);

  // hide message after 6s
  setTimeout(() => {
    msgEl.style.opacity = 0;
    msgEl.style.transform = "translateY(-6px)";
    setTimeout(() => { msgEl.style.display = "none"; }, 300);
  }, 6000);
}
