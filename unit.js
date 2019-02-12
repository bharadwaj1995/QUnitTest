window.onload = function() {
 

QUnit.test( "UnitTest", function( assert ) {

  var elems = document.body.getElementsByTagName("article");

  assert.ok(CheckForBasicSyntax(elems),"passed!");



 

  //console.log(elems);

});

function CheckForBasicSyntax(elems){
 


for(let i=0;i<elems.length; i++)
{


    var tempsss=elems[i].children.length;

   if(tempsss==3){

    return true;
   }




}
return false;

}


}
