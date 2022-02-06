import { browser } from "webextension-polyfill-ts";
import { monitorElement } from "./utility";

function init(buttonRenderer: Element) {
  console.log("[YouTube Cherry]: Initializing video download button...")

  var downloadButton = document.createElement("ytd-button-renderer")
  downloadButton.className = "style-scope ytd-menu-renderer force-icon-button style-default size-default"
  downloadButton.id = "ytcherry-downloadButton"
  downloadButton.setAttribute("use-keyboard-focused", "")
  downloadButton.setAttribute("button-renderer", "true")
  downloadButton.setAttribute("style-action-button", "")
  downloadButton.setAttribute("is-icon-button", "")

  buttonRenderer?.appendChild(downloadButton)

  monitorElement(document, "ytcherry-downloadButton", addButtonContent)
}

function addButtonContent(downloadButton: Element) {
  // Button Text
  var container = document.createElement("a")
  container.className = "yt-simple-endpoint style-scope ytd-button-renderer"
  container.tabIndex = -1

  var buttonText = document.createElement("p")
  buttonText.id = "text ytcherry-downloadButton-text"
  buttonText.className = "style-scope ytd-button-renderer style-default size-default"
  buttonText.textContent = "Download"
  // -----

  // Button Icon
  var ytButtonIcon = document.createElement("yt-icon-button")
  ytButtonIcon.className = "style-scope ytd-button-renderer style-default size-default"
  ytButtonIcon.id = "button"
  ytButtonIcon.setAttribute("touch-feedback", "")

  var buttonIcon = document.createElement("button")
  buttonIcon.className = "style-scope yt-icon-button"
  buttonIcon.setAttribute("aria-label", "Download")

  var innerButtonIcon = document.createElement("yt-icon")
  innerButtonIcon.className = "style-scope ytd-button-renderer"
  innerButtonIcon.id = "ytcherry-downloadButton-innerIcon"

  buttonIcon.appendChild(innerButtonIcon)
  ytButtonIcon.appendChild(buttonIcon)
  // -----

  // Button Tool Tip
  var tooltipContainer = document.createElement("tp-yt-paper-tooltip")
  tooltipContainer.className = "style-scope ytd-button-renderer"
  tooltipContainer.tabIndex = -1
  tooltipContainer.style.inset = "44px auto auto 353.6px"
  tooltipContainer.setAttribute("role", "tooltip")

  var tooltip = document.createElement("div")
  tooltip.id = "tooltip"
  tooltip.className = "style-scope tp-yt-paper-tooltip hidden"
  tooltip.innerHTML = "Download"

  tooltipContainer.appendChild(tooltip)
  // -----

  container.append(ytButtonIcon, buttonText, tooltipContainer)

  downloadButton.append(container)

  monitorElement(document, "ytcherry-downloadButton-innerIcon", (innerButtonIcon) => {
    innerButtonIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7302 25.5403C12.945 25.7551 13.2932 25.7551 13.508 25.5403L17.0082 22.0401C17.223 21.8253 17.223 21.4771 17.0082 21.2623C16.7934 21.0475 16.4451 21.0475 16.2303 21.2623L13.1191 24.3736L10.0078 21.2623C9.79302 21.0475 9.44478 21.0475 9.22999 21.2623C9.0152 21.4771 9.0152 21.8253 9.22999 22.0401L12.7302 25.5403ZM12.5691 14.4662V25.1514H13.6691V14.4662H12.5691Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4051 8.04272L19.8553 9.47776L21.3616 9.78212C23.0476 10.1228 24.3191 11.6184 24.3191 13.4063C24.3191 15.4501 22.6628 17.1063 20.6191 17.1063H16.6008V18.4063H20.6191C23.3808 18.4063 25.6191 16.168 25.6191 13.4063C25.6191 11.4471 24.4907 9.74957 22.849 8.93069C22.4646 8.73892 22.0519 8.59534 21.6191 8.50787C21.7652 8.1264 21.8529 7.71239 21.867 7.28069C21.8684 7.23939 21.8691 7.19792 21.8691 7.15631C21.8691 5.086 20.1894 3.40631 18.1191 3.40631C17.5297 3.40631 16.9701 3.5438 16.4736 3.78718C16.3219 3.86157 16.176 3.94585 16.037 4.03912C15.895 3.79304 15.7369 3.55758 15.564 3.3342C14.4198 1.85562 12.6315 0.906311 10.6191 0.906311C7.16595 0.906311 4.36908 3.70319 4.36908 7.15631C4.36908 7.26178 4.37299 7.36725 4.37689 7.47272C2.18939 8.24225 0.61908 10.3282 0.61908 12.7813C0.61908 15.8868 3.13861 18.4063 6.24408 18.4063H9.60077V17.1063H6.24408C3.85658 17.1063 1.91908 15.1688 1.91908 12.7813C1.91908 10.897 3.12484 9.29126 4.8083 8.69905L5.71144 8.38134L5.676 7.4246C5.67195 7.31511 5.66908 7.2337 5.66908 7.15631C5.66908 4.42116 7.88392 2.20631 10.6191 2.20631C12.4519 2.20631 14.0516 3.19949 14.9111 4.6889L15.6064 5.89371L16.7614 5.1186C17.1481 4.85909 17.6161 4.70631 18.1191 4.70631C19.4714 4.70631 20.5691 5.80397 20.5691 7.15631C20.5691 7.469 20.5102 7.76863 20.4051 8.04272Z" fill="white"/>
    </svg>
    `
  })
}

monitorElement(document, "top-level-buttons-computed", init)