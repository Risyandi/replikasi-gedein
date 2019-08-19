/**
 *  testing frontEnd : Jabar Digital Services 
 * @param decorateDivFunction 
 */

document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

function appendChildren() {
    let allDivs = document.getElementsByTagName("div");
    
    for (var index = 0; index < allDivs.length; index++) {
        var newDiv = document.createElement("div");
        allDivs.appendChild(newDiv);
        // newDiv.innerHTML = allDivs[i];
    }
}
window.onload = function () {
    appendChildren();
}
//appendChildren(function(div) {});
// console.log(document.body.innerHTML);