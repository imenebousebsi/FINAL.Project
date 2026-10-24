document.addEventListener("DOMContentLoaded", function () {
  // جلب عنصر النموذج (Form)
  const contactForm = document.querySelector(".contact-form form");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    // منع إعادة تحميل الصفحة عند الإرسال
    e.preventDefault();

    // جلب الحقول المطلوبة (يمكنك تعديل الأسماء أو القواعد حسب الـ HTML لديك)
    const inputs = contactForm.querySelectorAll("input, select, textarea");
    let isValid = true;
    let emailInput = null;

    // التحقق من أن جميع الحقول المعبأة ليست فارغة
    inputs.forEach((input) => {
      // إزالة حواف الخطأ القديمة إن وجدت
      input.style.borderColor = "rgba(255, 255, 255, 0.1)";

      if (input.type === "email") {
        emailInput = input;
      }

      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = "var(--crb-red, #e30613)";
      }
    });

    // التحقق من صحة البريد الإلكتروني
    if (emailInput && emailInput.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        emailInput.style.borderColor = "var(--crb-red, #e30613)";
      }
    }

    // إذا كانت هناك أخطاء
    if (!isValid) {
      alert("يرجى ملء جميع الحقول المطلوبة والتأكد من صحة البريد الإلكتروني.");
      return;
    }

    // إذا كانت البيانات صحيحة - محاكاة عملية الإرسال
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // تغيير حالة الزر أثناء الإرسال
    submitBtn.disabled = true;
    submitBtn.textContent = "جاري الإرسال...";

    setTimeout(() => {
      // إظهار تنبيه أو رسالة نجاح
      alert("شكراً لك! تم استلام رسالتك بنجاح وسنتواصل معك في أقرب وقت ممكن.");

      // إعادة ضبط الاستمارة
      contactForm.reset();

      // إعادة الزر إلى حالته الطبيعية
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }, 1200);
  });
});
