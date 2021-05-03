function getByClass()
{
    var x=document.getElementsByClassName('demo')
    console.log(x);

for(const key in x)
{
    x[key].innerHTML="get ele my className"
    x[key].style.background="grey"
}
}
function getByTag()
{
    var x=document.getElementsByName('p')
    console.log(x);
    for(let key in x)
    {
        x[key].style.background="yellow"   
    }
}
function getByQuerySelector()
{
    var x=document.getElementsByTagName('p')//tag name
    var x=document.getElementById('#test')//id
    var x=document.getElementsByClassName('.demo')//class
    x.style.color="blue"
    x.style.fontSize="60px"
    console.log(x);
}