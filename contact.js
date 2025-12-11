function sendWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const org = document.getElementById("org").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "249XXXXXXXX"; // ضع رقمك هنا

  const text =
`الاسم: ${name}
البريد: ${email}
المؤسسة: ${org}
الرسالة: ${message}

(تم الإرسال من موقع كوانتم)`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  document.getElementById("msg").style.display = "block";
}
