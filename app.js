const btnColor = document.getElementById("btn-color")
const inputColor = document.getElementById("input-color")

btnColor.addEventListener("click", function(){
    const rgbValue = inputColor.value.replace('#', '')
    const opt = document.getElementById("option").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${rgbValue}&mode=${opt}&count=5`)
        .then(res => res.json())
        .then(data => {
            render(data.colors)
        })    
    
})

function render (scheme){
    let html =''
    for (let color of scheme){
        html += `
        <div class="color-container">
            <div class="color" style="background-color:${color.hex.value}"></div>
            <p>${color.hex.value}</p>
        </div>
        `
    }
    document.getElementById("color-container").innerHTML = html
}

