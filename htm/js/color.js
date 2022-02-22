var initialColor = [
	{
		colorName:"傳統色彩",
		colorHex:"#ffffff",
		rgbR:"255",
		rgbG:"255",
		rgbB:"255",
		cmykC:"0",
		cmykM:"0",
		cmykY:"0",
		cmykK:"0"
	}
];
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
		colorName:"卵石紫",
		colorHex:"#30161c",
		rgbR:"48",
		rgbG:"22",
		rgbB:"28",
		cmykC:"52",
		cmykM:"88",
		cmykY:"58",
		cmykK:"81"
	},
	{
		colorName:"瓦罐灰",
		colorHex:"#47484c",
		rgbR:"67",
		rgbG:"57",
		rgbB:"49",
		cmykC:"49",
		cmykM:"71",
		cmykY:"72",
		cmykK:"76"
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

	/*清空色票List*/
	$(".color_code-list").empty();

loadcolorCode();

});


/*  =====================  function  ========================  */



// 讀取色票資訊
function loadcolorCode(obj){

	// var colorName = colorCode[0].colorName;
	// var colorHex = colorCode[0].colorHex;
	// var rgb = colorCode[0]

	// console.log(colorName,colorHex,rgb,"loadcolorCode");

	for (var i = 0; i < colorCode.length; i++)addCodeList(colorCode[i],i);

}


//製作色票字串
function addCodeList(obj,num){

	var html_str =

	'<div class="colors" data-colorName="' + obj.colorName + '" data-colorHex="' + obj.colorHex + '"data-rgb="rgb(' + obj.rgbR + ',' + obj.rgbG + ',' + obj.rgbB + ')" data-cmyk="cmyk(' + obj.cmykC + ',' + obj.cmykM + ',' + obj.cmykY + ',' + obj.cmykC + ')">' +
		'<a href="#">' +
			'<div class="color_code" style="background-color:' + obj.colorHex + '"></div>' +
			'<div class="info">' +
				'<span class="number">' + '00' + (num + 1) + '</span>' +
				'<span class="name" style="color:' + obj.colorHex + '">'+ obj.colorName +'</span>' +
			'</div>' +
		'</a>' +
	'</div>';

	$(".color_code-list").append(html_str);

}


//添加色票字串
