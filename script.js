//your JS code here. If required.
const para = document.getElementById("status");
const button = document.getElementById("enterBtn");

button.addEventListener('click',() => {
	para.outerHTML= `<h1>Entered Metaverse</h1>`;
})
