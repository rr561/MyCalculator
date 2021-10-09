//Display  interaction 
let num="";
let num2="";
let list=[];
let result;
const numButtons =document.querySelectorAll(".num_btn");
const update=()=>{
    document.querySelector(".display input").value=num===''?num:+num;
    
}
for(const btn of numButtons){
    btn.addEventListener('click',()=>{
        num+=btn.innerHTML;
        update();
    })
}


//Styles button interaction
const select=document.querySelector(".select");
const select_btn=document.querySelector(".select_btn");
select_btn.addEventListener('click',()=>{
    select.classList.toggle("clicked");
    if(select.classList.contains("clicked"))
    
    select.disabled=false;
else
    select.disabled=true;
})
select_btn.addEventListener('click',()=>{
    select_btn.classList.toggle("clicked_btn");
    
})



// Clear and All clear function 
const btn_clear=document.querySelectorAll(".clear_btn")
btn_clear[1].addEventListener('click',()=>{
    num=num.slice(0,-1);
    update();
})

const btn_all_clear=document.querySelectorAll(".clear_btn")
btn_all_clear[0].addEventListener('click',()=>{
    num="";
    update();
})
  

//Operations
const op_btns =document.querySelectorAll(".op_btn");
for(const  btn of op_btns)
{
    btn.addEventListener('click',()=>
    {
        if(num!="")
        {
        list.push(+num);
        list.push(btn.innerHTML);
        num="";
        }
    })
}


const eq_btn =document.querySelectorAll(".eq_btn");
eq_btn[0].addEventListener('click',()=>{
    list.push(+num);
    result=list[0];
    for(let i=1;i<=list.length;i+=2)
    {
    switch(list[i]) 
    {
        case'+':result+=list[i+1];
        break;

        case'-':result-=list[i+1];
        break;
        
        case'*':result*=list[i+1];
        break;

        case'/':result/=list[i+1];
        break;

        case'^':result=Math.pow(result,list[i+1]);
        break;

        
    }
    }
    console.log(list);
    num=result.toString();
    update();
    list=[];
})

const sqrt_bnt=document.querySelectorAll(".sqrt_btn");
sqrt_bnt[0].addEventListener('click',()=>{
    num=(Math.sqrt(+num)).toString();
    update();
})


