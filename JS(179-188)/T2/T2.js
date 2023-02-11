// 1) By using (fetch & then)
function getData(apiLink){
    fetch(apiLink)
    .then((result)=>{let myData=result.json();return myData;})
    .then(result=>{result.length=5;return result;})
    .then(result=>{
        for(let i=0;i<result.length;i++){
            let div=document.createElement("div");
            let h3=document.createElement("h3");
            let p=document.createElement("p");
            h3.innerHTML=result[i].title;
            p.innerHTML=result[i].description;
            div.append(h3,p);
            document.body.append(div);
        }
    })
}
getData("./T2.json")

// 2) By using (async & await & fetch)
/*
async function getData(apiLink){
    let myData=await fetch(apiLink);
    let result=await myData.json();
    result.length=5;
    for(let i=0;i<result.length;i++){
        let div=document.createElement("div")
        let h3=document.createElement("h3");
        let p=document.createElement("p");

        h3.innerHTML=result[i].title;
        p.innerHTML=result[i].description;

        div.append(h3,p)
        document.body.append(div)
    }
    console.log(result);
}
getData("./T2.json")
*/
