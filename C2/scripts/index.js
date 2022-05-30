// Add the coffee to local storage with key "coffee"

const url = " https://masai-mock-api.herokuapp.com/coffee/menu";

fetch(url)
.then(function(res){
    return res.json();
}).then(function(res){
    display(res.menu.data)
    //console.log(res.data)
}).catch(function(err){
    console.log("err:",err)
})

function display(data)
{
    data.map(function(ele){
        let div = document.createElement("div")
        //div.setAttribute("id","bucket")

        let img = document.createElement('img')
        img.src = ele.image

        let p1 = document.createElement('p')
        p1.innerText = ele.title
        p1.setAttribute("class", "c")

        let p2 = document.createElement('p')
        p2.innerText = ele.price
        p2.setAttribute("class", "c")

        let btn = document.createElement("button")
        btn.innerText = "Add to Bucket"
        btn.setAttribute("id", "add_to_bucket")
        btn.addEventListener("click", function(){
            addproducts(ele)
        });
        div.append(img,p1,p2,btn)
        document.querySelector("#menu").append(div)
    })
}

let array = JSON.parse(localStorage.getItem("coffee")) || [];
document.querySelector("#coffee_count").innerHTML = array.length;

function addproducts(ele)
{
    array.push(ele)
    document.querySelector("#coffee_count").innerHTML = array.length;
    localStorage.setItem("coffee", JSON.stringify(array));
}
