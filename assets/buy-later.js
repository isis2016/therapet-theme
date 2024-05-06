const payNow = document.querySelector('[data-payment-option="pay-now"]');
const payLater = document.querySelector('[data-payment-option="pay-later"]');
const payNowRadio = payNow.querySelector("[data-option-radio]");
const payLaterRadio = payLater.querySelector("[data-option-radio]");
const shopPayBtn = document.querySelector("#shoppay-checkout");

payNow.addEventListener("click", () => {
  payNowRadio.classList.add("border-[6px]");
  payNowRadio.classList.remove("border");
  payLaterRadio.classList.remove("border-[6px]");
  payLaterRadio.classList.add("border");
  shopPayBtn.classList.add("hidden");
});

payLater.addEventListener("click", () => {
  payLaterRadio.classList.add("border-[6px]");
  payLaterRadio.classList.remove("border");
  payNowRadio.classList.remove("border-[6px]");
  payNowRadio.classList.add("border");
  shopPayBtn.classList.remove("hidden");
});
