document.querySelector("form").addEventListener("submit", myfunction)
let t = 0

function myfunction()
{
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;
    let address = document.querySelector("#address").value;

    if(name!="" && number!="" && address!="")
    {
        show()
        event.preventDefault()
        function order(str)
        {
            return new Promise(function(resolve,reject){
                setTimeout(function()
                {
                    resolve(str)
                },t)
            });
        }
        function print(res)
        {
            alert(res[0])
        }

        async function show()
        {
            let s1 = await order(["Your order is accepted"])
            print(s1)
            t = 0
            t = 3000
            let s2 = await order(["Your order is being Prepared"])
            print(s2)
            t = 8000
            let s3 = await order(["Your order is being packed"])
            print(s3)
            t = 10000
            let s4 = await order(["Your order is out for delivery"])
            print(s4)
            t = 12000
            let s5 = await order(["Order delivered"])
            print(s5)
        
        }
    }
    else{
        alert("Fill Details")
    }



}