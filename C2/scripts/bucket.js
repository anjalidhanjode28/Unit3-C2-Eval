// On clicking remove button the item should be removed from DOM as well as localstorage.

data = JSON.parse(localStorage.getItem("coffee"))
let rate = 0;
document.querySelector("#total_amount").innerHTML = rate;

data.map(function(ele, i){
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = ele.image

    let p1 = document.createElement("p")
    p1.innerText = ele.title
    p1.setAttribute("class", "c")

    let p2 = document.createElement("p")
    p2.innerText = ele.price
    rate += ele.price
    p2.setAttribute("class", "c")

    let btn = document.createElement("button")
    btn.innerText = "Remove"
    btn.setAttribute("id", "remove_coffee")
    btn.addEventListener("click", function(){
        removeproducts(ele)
    });
    div.append(img,p1,p2,btn)
    document.querySelector("#bucket").append(div)
    document.querySelector("#total_amount").innerHTML = rate;
})

function removeproducts(ele,i)
{
    data.splice(i,1)
    localStorage.setItem("coffee",JSON.stringify(data))
    window.location.reload()
}
