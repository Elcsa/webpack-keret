import './style.css';

let lista=[]

document.addEventListener('DOMContentLoaded',async()=>{
    let response=await fetch('/quotes.json');
    let eredmeny=await response.json();
    for(let e of eredmeny.quotes){
        lista.push(e)
    }
    document.getElementById('oszesidezet').addEventListener('click',async()=>{
        document.getElementById('listaa').textContent=""
        response=await fetch('/quotes.json');
        eredmeny=await response.json();
        lista.sort((a,b)=>a.author.localeCompare(b.author))
        for(let e of lista){
            let li=document.createElement('li')
            li.innerHTML = "<q>"+e.quote + "</q>" + "<br>"+e.author
        }
    })
})