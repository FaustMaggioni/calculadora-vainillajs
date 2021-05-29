let ultimo= ''
let op=''
let prev=''
let post=''
const htmldisplay = document.querySelector('.display')
const punto = document.querySelector('#punto')

function add(a,b){
    const abis = Number(a)
    const bbis = Number(b)
    if(isNaN(abis) && isNaN(bbis)){
        return 'Syntax ERROR'
    }
    return abis+bbis
}

function substract(a,b){
    const abis = Number(a)
    const bbis = Number(b)
    if(isNaN(abis) && isNaN(bbis)){
        return 'Syntax ERROR'
    }
    return abis-bbis
}

function multiply(a,b){
    const abis = Number(a)
    const bbis = Number(b)
    if(isNaN(abis) && isNaN(bbis)){
        return 'Syntax ERROR'
    }
    return abis*bbis
}

function divide(a,b){
    const abis = Number(a)
    const bbis = Number(b)
    if(isNaN(abis) && isNaN(bbis)){
        return 'ERROR'
    }
    if(bbis==0){
        htmldisplay.style.color = 'red'
        return 'ERROR'
    }
    return abis/bbis
}

function operator(a,b,op){
    switch(op){
        case '+': return add(a,b);
        case '-': return substract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b)
    }
} 


function ejecutar(v){
    if(prev==='error'){
        prev=''
        htmldisplay.style.color = 'black'
    }
    if(v === '-' || v==='+' || v==='*' || v==='/'){
        op=v
        htmldisplay.textContent = v
        ops.forEach((item) => {
            console.log(item)
            item.style.backgroundColor = 'grey'
            item.disabled = true})
        ultimo='op'
        punto.disabled = false;
        punto.style.backgroundColor='white'
    }else{
        if(op !==''){
            post=post+v
            htmldisplay.textContent = post
            ultimo='post'
            /*res= operator(prev,v,op)
            if(res === 'ERROR'){
                alert(res)
                prev='error'
            }else{
            prev=res
            console.log(res)
            op=''}*/
        }
        else{
            prev=prev+v
            htmldisplay.textContent = prev
            ultimo='prev'
        }
    }
    
}

function calculate(){
    let res= operator(prev,post,op)
    ops.forEach((item) => {
        console.log(item)
        item.disabled = false
        item.style.backgroundColor = 'pink'}
    )
    punto.disabled = false;
    punto.style.backgroundColor='white'
    op=''
    prev=res
    post=''
    htmldisplay.textContent = prev
}
const ops = document.querySelectorAll('.op')
const nros = document.querySelectorAll('.ar')

nros.forEach((nro) => nro.addEventListener('click', (e) => ejecutar (e.target.value)))

const igual = document.querySelector('#igual')
igual.addEventListener('click', () => calculate())

const clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    prev=''
    htmldisplay.textContent = prev
})

const borrar= document.querySelector('#backspace')
borrar.addEventListener('click', ()=>{
    switch(ultimo){
        case 'op':
            op='';
            ops.forEach((item) => {
                console.log(item)
                item.disabled = false
                item.style.backgroundColor = 'pink'}
            );
            console.log(prev)
            htmldisplay.textContent = prev;
            break;
        case 'prev':
            prev= prev.substring(0,prev.length-1)
            htmldisplay.textContent = prev;
            break;
        case 'post':
            post= post.substring(0,post.length-1)
            htmldisplay.textContent = post;
            break;
        default:
            break;
    }
})


punto.addEventListener('click', () => {
    if(ultimo!='op'){
    punto.disabled = true;
    punto.style.backgroundColor='yellow'
    if(ultimo==='prev'){
        prev= prev+'.'
        htmldisplay.textContent = prev;
    }else{
        post=post+'.'
        htmldisplay.textContent = post;
    }
}
})