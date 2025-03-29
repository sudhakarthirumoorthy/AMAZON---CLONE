// Array of channel images
var favChannels = [
    { img_url: "img/lionsgate.jpg" },
    { img_url: "img/discovery.jpg" },
    { img_url: "img/bbcplayer.jpg" },
    { img_url: "img/manorama.jpg" },
    { img_url: "img/hoichoi.jpg" },
    { img_url: "img/chaupal.jpg" },
    { img_url: "img/times.jpg" },
    { img_url: "img/sony.jpg" },
    { img_url: "img/mgm.jpg" },
  ]
  
  // Create and append channel divs
  function renderChannels() {
    var channelContainer = document.querySelector(".channel-btn")
    channelContainer.innerHTML = "" // Clear existing content
  
    favChannels.forEach((elem) => {
      var div = document.createElement("div")
      div.setAttribute("class", "channelDiv")
  
      var image = document.createElement("img")
      image.setAttribute("src", elem.img_url)
      image.setAttribute("alt", "Channel logo")
  
      div.appendChild(image)
      channelContainer.appendChild(div)
    })
  }
  
  // Save channels to localStorage
  function saveChannels() {
    localStorage.setItem("favChannels", JSON.stringify(favChannels))
  }
  
  // Check for responsive behavior
  function checkResponsive() {
    const width = window.innerWidth
    const textOverImages = document.querySelectorAll(".text-over-image")
  
    if (width <= 576) {
      textOverImages.forEach((div) => {
        div.style.justifyContent = "flex-start"
        div.style.paddingTop = "100px"
      })
    } else {
      textOverImages.forEach((div) => {
        div.style.justifyContent = "center"
        div.style.paddingTop = "40px"
      })
    }
  }
  
  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    renderChannels()
    saveChannels()
    checkResponsive()
  
    // Add resize listener for responsive behavior
    window.addEventListener("resize", checkResponsive)
  })
  
  