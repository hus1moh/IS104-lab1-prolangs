var textBlocks = new Array( 
'Select from the list to change this box', 
'Du har selektert AppleScript.', 
'Du har selektert Asp.','Du har selektert Basic.','Du har selektert C.','Du har selektert C++.','Du har selektert Clojure.',
'Du har selektert Cobol.','Du har selektert ColdFusion.','Du har selektert Erlang.','Du har selektert Fortrean.','Du har selektert Haskell.',
'Du har selektert Java.','Du har selektert Javascript.','Du har selektert Lisp.','Du har selektert Perl.','Du har selektert Python.',
'Du har selektert Ruby.');

function changeText(elemid) { 
var ind = document.getElementById(elemid).selectedIndex; 
document.getElementById("text").innerHTML=textBlocks[ind]; 
} 
