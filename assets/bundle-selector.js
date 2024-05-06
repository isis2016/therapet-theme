document.addEventListener("DOMContentLoaded", () => {
  const bundleSelectors = document.querySelectorAll(
    '[data-element-type="bundle-selector"]'
  );
  const addToCartFormInput = document.querySelector(
    'form[data-type="add-to-cart-form"] input[name="id"]'
  );

  const payFullPriceElements = document.querySelectorAll(
    '[data-element-type="pay-full-price"]'
  );
  const payPartPriceElements = document.querySelectorAll(
    '[data-element-type="pay-part-price"]'
  );
  const checkoutButton = document.querySelector("#checkout-button");

  const updatePrices = (bundle) => {
    const selectedPayPartPriceValue = bundle.querySelector(
      'input[name="payPartPrice"]'
    ).value;
    const selectedPayFullPriceValue = bundle.querySelector(
      'input[name="payFullPrice"]'
    ).value;

    payPartPriceElements.forEach((payPartPriceElement) => {
      payPartPriceElement.textContent = selectedPayPartPriceValue;
    });

    payFullPriceElements.forEach((payFullPriceElement) => {
      payFullPriceElement.textContent = selectedPayFullPriceValue;
    });
  };

  bundleSelectors.forEach((bundle, index, array) => {
    const bundleInput = bundle.querySelector('input[type="radio"]');
    const inputRadio = bundle.querySelector(
      '[data-element-type="radio-button"]'
    );
    const selectedArrow = bundle.querySelector(
      '[data-element-type="selected-arrow"]'
    );

    const updateFormInput = () => {
      if (bundleInput.checked) {
        const variantId = bundleInput.getAttribute("value");
        if (addToCartFormInput) {
          addToCartFormInput.setAttribute("value", variantId);
        }
        if (checkoutButton) {
          checkoutButton.href = `/cart/${variantId}:1`;
        }
      }
    };

    bundleInput.addEventListener("click", () => {
      updateFormInput();

      const allInputRadios = document.querySelectorAll(
        '[data-element-type="radio-button"]'
      );

      const allSelectedArrows = document.querySelectorAll(
        '[data-element-type="selected-arrow"]'
      );

      allInputRadios.forEach((radio) => {
        radio.classList.add("hidden");
      });

      inputRadio.classList.remove("hidden");

      if (allSelectedArrows) {
        allSelectedArrows.forEach((arrow) => {
          arrow.classList.add("hidden");
        });

        if (selectedArrow) {
          selectedArrow.classList.remove("hidden");
        }
      }

      updatePrices(bundle);
    });

    updateFormInput();

    if (bundleInput.checked) {
      inputRadio.classList.remove("hidden");
      updatePrices(bundle); // Update prices on page load based on the checked bundle
      if (selectedArrow) {
        selectedArrow.classList.remove("hidden");
      }
    } else {
      inputRadio.classList.add("hidden");
      if (selectedArrow) {
        selectedArrow.classList.remove("hidden");
      }
    }

    // If this is the last bundle, automatically check its radio button
    if (index === array.length - 1) {
      bundleInput.checked = true;
      bundleInput.dispatchEvent(new Event("click"));
    }
  });
});
