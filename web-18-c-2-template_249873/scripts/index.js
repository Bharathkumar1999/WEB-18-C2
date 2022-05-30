// Add the coffee to local storage with key "coffee"


const url="https://masai-mock-api.herokuapp.com/coffee/menu";

async function getData(){
    // let users=await fetch(url);

    // console.log(users);
    try{
        let res= await fetch(url);

        let products= await res.json(); // collect data
        append(products);
        console.log(products);
        //console.log(res);
        //append(users.data);

        //console.log(users.data);
    } catch(err){
        console.log(err);
    }
}

getData();

//append(products)

function append(data){
    let container=document.getElementById("coffee");
    data.forEach(function(el){
        let img=document.createElement("img");
        img.src= el.image;

        let h2=document.createElement("h2");
        h2.innerText=el.title;

        let p=document.createElement("p");
        p.innerText=el.price;

        let div=document.createElement("div");
        div.append(img,h2,p);

        container.append(div);

    });
}

