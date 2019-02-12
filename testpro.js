function CheckForBasicSyntax(elems){
 


    for(let i=0;i<elems.length; i++)
    {
    
    
        var tempsss=elems[i].children.length;
    
       if(tempsss==3){
    
        return true;
       }
       else{
           return false;
       }
    
    
    
    
    }
    return false;
    
}


function UpdateElement(id,innerHTML){

    document.getElementById(id).innerHTML=innerHTML;

}

