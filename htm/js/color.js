var colorCode = [
	{
		colorName:"玉紅",
		colorHex:"#c04851",
		rgbR:"192",
		rgbG:"72",
		rgbB:"81",
		cmykC:"13",
		cmykM:"83",
		cmykY:"62",
		cmykK:"3"
	},
	{
		colorName:"锌灰",
		colorHex:"#7a7374",
		rgbR:"122",
		rgbG:"115",
		rgbB:"116",
		cmykC:"48",
		cmykM:"45",
		cmykY:"40",
		cmykK:"26"
	},
	{
		colorName:"云峰白",
		colorHex:"#d8e3e7",
		rgbR:"216",
		rgbG:"227",
		rgbB:"231",
		cmykC:"21",
		cmykM:"6",
		cmykY:"10",
		cmykK:"0"
	},
	{
		colorName:"瀑布蓝",
		colorHex:"#51c4d3",
		rgbR:"81",
		rgbG:"196",
		rgbB:"211",
		cmykC:"79",
		cmykM:"0",
		cmykY:"27",
		cmykK:"0"
	},
	{
		colorName:"淡蓝紫",
		colorHex:"#a7a8bd",
		rgbR:"167",
		rgbG:"168",
		rgbB:"189",
		cmykC:"39",
		cmykM:"31",
		cmykY:"17",
		cmykK:"2"
	}
];



/*  =====================  init  ========================  */
$(document).ready(function() {

$(".colorc_ode-list").empty();




	console.log("AAA");

	for (var i = 0; i < colorCode.length; i++)addCodeList(colorCode[i],i);

	console.log("BBB-02","CCC-03");


});


function addCodeList(obj,num){




	console.log("addCodeList裡面Num",obj,num);


	var html_str =

	'<div class="colors">' +
		'<a href="#">' +
			'<div class="color_code" style="background-color:' + obj.colorHex + '"></div>' +
			'<div class="info">' +
				'<span class="number">' + '00' + (num + 1) + '</span>' +
				'<span class="name">'+ obj.colorName +'</span>' +
			'</div>' +
		'</a>' +
	'</div>';

console.log(obj.colorName,"colorName_001");

	$(".colorc_ode-list").append(html_str);
}
