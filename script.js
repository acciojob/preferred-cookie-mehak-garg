//your JS code here. If required.
let fontSize=document.querySelector("#fontsize");
let fontColor=document.querySelector("#fontcolor")
let btn=document.querySelector('input[type="submit"]');
btn.addEventListener("click",(e)=>{onSave(e);});
function onSave(e)
{e.preventDefault();
	document.cookie=`fontsize=${fontSize.value}`;
 document.cookie=`fontcolor=${fontColor.value}`;
 
}
function onLoad()
{
	let result;
if(document.cookie)
{
result=document.cookie.split("; ");
		fontSize.value=result[result.length-1].split("=")[1];
fontColor.value=result[result.length-2].split("=")[1];
document.body.style.fontsize=fontSize.value;
	document.body.style.color=fontColor.value;
}

}


onLoad();