import React, { useState } from "react"
import ReactDOM from "react-dom/client"

const divsToUpdate = document.querySelectorAll(".tailwind-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  const root = ReactDOM.createRoot(div)
  root.render(<OurComponent {...data} />)
  div.classList.remove("tailwind-update-me")
})

function OurComponent(props) {
  const [showSkyColor, setShowSkyColor] = useState(false)
  const [showGrassColor, setShowGrassColor] = useState(false)

  return  <div class="react-div"></div>
}
