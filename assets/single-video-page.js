// Handle header

var styles = `
  .inactiveLink {
    pointer-events: none;
    cursor: default;
  }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)


var menuButton = document.querySelector(".menu-drawer-container")
var logo = document.querySelector(".header__heading-link")
var cartIcon = document.querySelector("#cart-icon-bubble")

var ctaHeader = document.querySelector(".ctaHeader")
var ctaButton = document.querySelector(".cta")
var guaranteeBlock = document.querySelector(".guarantee-payments")

var disclaimetText =document.querySelector(".disclaimetText")
var footerMenu = document.querySelector(".logoMenu")


logo.classList.add("inactiveLink");

menuButton.classList.add("hidden");
cartIcon.classList.add("hidden");
disclaimetText.classList.add("hidden");

ctaButton.classList.add("hidden");
ctaHeader.classList.add("hidden");
guaranteeBlock.classList.add("hidden");

footerMenu.children[0].children[0].classList.add("hidden");
footerMenu.children[0].children[4].classList.add("hidden");
footerMenu.children[0].children[5].classList.add("hidden");



setTimeout(
  function() {
    ctaButton.classList.remove("hidden");
    ctaHeader.classList.remove("hidden");
    guaranteeBlock.classList.remove("hidden");
  }, 15000);

