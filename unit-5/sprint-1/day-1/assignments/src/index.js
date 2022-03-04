

import "./index.css"

import image from "./big.png"


let logo = document.createElement("img")
logo.src = image




let name = document.createElement("h1")
name.textContent = "Webpack TO-Do List"



let img = document.querySelector("#logo")
img.append(logo,name)

import "./append"
