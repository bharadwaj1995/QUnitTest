window.onload = function() {

const paragraphTrueValue= "This is Web Apps Class";

QUnit.test( "UnitTest", function( assert ) {

  
//Article section test cases
  const articelElement = document.getElementsByTagName("article");

  assert.ok(CheckForBasicSyntax(articelElement),"passed!");

//Paragraph test cases
  const pElement= document.getElementById("SubjectCode").innerHTML;

  assert.equal(pElement,paragraphTrueValue,"passed!");

  UpdateElement("SubjectCode",paragraphTrueValue);

  const pElementAfterChange= document.getElementById("SubjectCode").innerHTML;
  assert.equal(pElementAfterChange,paragraphTrueValue,"passed!");


  //console.log(elems);

});




}
