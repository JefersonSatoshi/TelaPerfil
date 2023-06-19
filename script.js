function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
  
    if (html.classList.contains('light')) {
      img.setAttribute("src", "./assets/avatar-light.png")
      img.setAttribute("alt", "Foto do mayk Brito, usando óculos escuro e jaqueta escura, sem barba e fundo colorido")
    } else {
      img.setAttribute("src", "./assets/avatar.png")
      img.setAttribute("alt", "Foto de mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo")
    }
}