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
if(document.cookie)
{
	let result=document.cookie.map((item)=>{
		return [item.split("=")[0],item.split("=")[1]];
	})
}
  fontSize.value=result[0][1];
	fontColor.value=result[1][1];
	document.body.style.fontsize=fontSize.value;
	document.body.style.color=fontColor.value;
}
onLoad();