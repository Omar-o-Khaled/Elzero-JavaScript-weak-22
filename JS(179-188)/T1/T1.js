// 1) By using promise:
function getData(apiLink){
    return new Promise((resolve,reject)=>{
        let myRequest=new XMLHttpRequest();
        myRequest.open("get",apiLink);
        myRequest.send();
        myRequest.onload=function(){
            if(this.status===200 && this.readyState===4){
                let data=JSON.parse(myRequest.responseText);
                resolve(data)
            }else{
                reject(Error("NO DATA FOUNDED"))
            }
        }
    })
}
getData("./T1.json")
.then(result=>{
    result.length=5;
    return result
})
.then(result=>{
    for(let i=0;i<result.length;i++){
        let div=document.createElement("div")
        let h3=document.createElement("h3");
        let p=document.createElement("p");

        h3.innerHTML=result[i].title;
        p.innerHTML=result[i].description;

        div.append(h3,p)
        document.body.append(div)
    }
    console.log(result)
})


// 2) By using XMLHttpRequest
/*
let getData=function(apiLink){
    let myxml=new XMLHttpRequest();
    myxml.open("get",apiLink);
    myxml.send();
    myxml.onreadystatechange=function(){
        if(this.status===200 && this.readyState===4){
            let data=JSON.parse(myxml.responseText);
            data.length=5;
            for(let i=0;i<data.length;i++){
                let div=document.createElement("div")
                let h3=document.createElement("h3");
                let p=document.createElement("p");

                h3.innerHTML=data[i].title;
                p.innerHTML=data[i].description;

                div.append(h3,p)
                document.body.append(div)
                console.log(data[i]);
            }
        }
    }
}
getData("./T1.json")
*/

// 3) By using (fetch & then)
/*
function getData(apiLink){
    fetch(apiLink)
    .then((result)=>{
        let myData=result.json();
        // console.log(myData)
        return myData;
    })
    .then(result=>{
        result.length=5;
        return result;
    })
    .then(result=>{
        for(let i=0;i<result.length;i++){
            let div=document.createElement("div")
            let h3=document.createElement("h3");
            let p=document.createElement("p");
    
            h3.innerHTML=result[i].title;
            p.innerHTML=result[i].description;
    
            div.append(h3,p)
            document.body.append(div)
        }
        console.log(result)
    })
}
getData("./T1.json")
*/

// 4) By using (async & await & fetch)
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
getData("./T1.json")
*/
