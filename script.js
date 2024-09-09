document.getElementById('count').addEventListener('click',function(){
    let text=document.getElementById('para').value
    let wordcount=countwords(text)
    let res=document.getElementById('display-output')
    res.innerHTML=wordcount;
})
function countwords(str){
    let wordarr=str.trim().split(/\s+/);
    return wordarr.filter(word => word.length >0).length; 
}