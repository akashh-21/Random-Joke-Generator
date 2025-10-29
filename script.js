const api = "https://official-joke-api.appspot.com/random_joke";
let result = document.querySelector("#joke");
let bnt1 = document.querySelector("#bnt1");
let bnt2 = document.querySelector("#bnt2");
let answer = document.querySelector("#answer");
console.log(result);
// console.log(bnt);
async function getdata(){
    let res = await fetch(api);
    let data = await res.json();
    return data;
};
let bool = false;
let data = ""
bnt1.addEventListener("click",async ()=>{
    if(bool)  {
        answer.innerHTML = "To the Punchline click here...";
        bool = false;
    }
    data = await getdata();
    result.innerHTML = `${data.setup}`;
});

bnt2.addEventListener("click",()=>{
    if(!bool){
        answer.innerHTML = `${data.punchline}`;
        bool = true;
    }
    
    // bnt1.addEventListener("click", ()=>{
    //     
    // });
});