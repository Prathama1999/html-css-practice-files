var list=document.querySelector('test');
function addElement()
{
    var userData=prompt("enter technology"); //get data from user
    var x=document.createElement('li');//create element
    x.innerText=userData;

    //append child
    //list.appendChild(x);  //at last
    //list.insertBefore(x,list.childNodes[5])
    list.insertBefore(x,list.firstElementChild.nextElementSibling);
}
function removeElement()
{
    //list.remove(); //removes all
    list.removeChild(list.childNode[5]);
    list.removeChild(List.lastElementChild);
    list.removeChild(list.firstElementChild);
}