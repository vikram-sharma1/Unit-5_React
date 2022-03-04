
let  button = document.querySelector("#button")

var arr = JSON.parse(localStorage.getItem("item")) || []
append(arr)

button.addEventListener("click", ()=>{
    let name = document.querySelector("#value").value
    var obj = {
       a : name
    }

    arr.push(obj)
    localStorage.setItem("item", JSON.stringify(arr))



    let data = JSON.parse(localStorage.getItem("item"))
    console.log('data:', data)
    append(data)
})

function append(data) {
    document.getElementById("output").innerHTML = null
    data.map((el,index) => {
        // console.log('el:', el)

        let div = document.createElement("div")
        // div.classList.add("outputdiv")
        div.setAttribute("class", "outputdiv")

        let name = document.createElement("h3")
        name.textContent = el.a

        let num = document.createElement("h3")
        num.innerHTML = index + 1

        let last = document.createElement("h3")
        last.innerHTML = "delete"
        last.style.cursor = "pointer"
        last.addEventListener("click", function(){
            clear(el,index)
        })


        div.append(num,name,last)

        document.getElementById("output").append(div)
    
    })
}


function clear(el,index){
    arr.splice(index,1)


    localStorage.setItem("item", JSON.stringify(arr))
    append(arr)

}
