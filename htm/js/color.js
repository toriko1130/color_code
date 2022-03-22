var currentColor = [
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
		cmykC:"98",
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
		cmykC:"75",
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
		cmykC:"50",
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
		cmykC:"0",
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


	loadcolorCode();

	$(".color_code-list").on('click','.colors',function(event) {

		var target = $(this);

		currentInfo(target);
		bgColor();

	});

	$(".copy_btn").click(function() {
		copyVal();
	});

});


/*  =====================  function  ========================  */


// 讀取色票資訊
function loadcolorCode(obj){

	for (var i = 0; i < colorCode.length; i++)addCodeList(colorCode[i],i);

}

//製作色票字串
function addCodeList(obj,num){

	var html_str =

	'<div class="colors" data-colorname="' + obj.colorName + '" data-colorhex="' + obj.colorHex + '"data-rgb="' + obj.rgbR + ',' + obj.rgbG + ',' + obj.rgbB + '" data-cmyk="' + obj.cmykC + ',' + obj.cmykM + ',' + obj.cmykY + ',' + obj.cmykC + '">' +
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

//獲取當前色票色訊並替換
function currentInfo(obj){

	var info_obj = {
		colorName:obj.data('colorname'),
		colorHex:obj.data('colorhex'),
		corlorRGB:obj.data('rgb'),
		corlorCMYK:obj.data('cmyk'),
	}

	var cmyk_val = info_obj.corlorCMYK.split(",");
	var cmykC = cmyk_val[0];
	var cmykM = cmyk_val[1];
	var cmykY = cmyk_val[2];
	var cmykK = cmyk_val[3];

	var rgb_val = info_obj.corlorRGB.split(",");
	var rgbR = rgb_val[0];
	var rgbG = rgb_val[1];
	var rgbB = rgb_val[2];

	currentColor[0].colorHex = info_obj.colorHex;

	// 替換顏色名字
	$(".color_info .name").html(info_obj.colorName);
	// 替換色碼
	$(".color_info .HEX .value").html(info_obj.colorHex);
	// 替換CMYK
	$(".cmyk strong").eq(0).html(cmykC);
	$(".cmyk strong").eq(1).html(cmykM);
	$(".cmyk strong").eq(2).html(cmykY);
	$(".cmyk strong").eq(3).html(cmykK);
	// 替換RGB
	$(".rgb .value").eq(0).html(rgbR);
	$(".rgb .value").eq(1).html(rgbG);
	$(".rgb .value").eq(2).html(rgbB);




for (var i = 0; i < $(".chart-progress").length; i++) {

chartChange(cmyk_val[i],i);

console.log(i)


}






}

//圖表變化
function chartChange(cmykC,val){

	if (cmykC != 0 && cmykC < 50) {

		var chart_val = cmykC * 3.6

		$(".chart-progress").eq(val).css({

			"border-color": "#E0E0E0",
			"transform": "rotate(" + chart_val + "deg)",

		});

		console.log(val, "小於50")

	}else if(cmykC > 50){

		var chart_val = (cmykC - 50) * 3.6

		$(".chart-progress").eq(val).css({

			"border-color": "#7F95E0",
			"transform": "rotate(" + chart_val + "deg)"

		});

		console.log(val, "大於50")


	}else if(cmykC == 0){

		$(".chart-progress").eq(val).css({

			"border-color": "#E0E0E0",
			"transform": "rotate(0deg)"

		});

		console.log(val, "等於0")

	}else if(cmykC == 50){

		$(".chart-progress").eq(val).css({

			"border-color": "#E0E0E0",
			"transform": "rotate(180deg)"

		});

		console.log(val, "等於50")

	}

}

//背景顏色替換
function bgColor(){

	$(".warp").css("background-color",currentColor[0].colorHex);

}

// 一鍵複製
function copyVal() {

	// 製作一個範圍
	var copy_text = document.createElement("textarea");

	// 加上值
	copy_text.value = $(".HEX .value").text();

	// 寫出並選取
	document.body.appendChild(copy_text);
    copy_text.focus();
    copy_text.select();

	// 複製到剪貼簿
    document.execCommand("copy");

	// 刪除範圍
    document.body.removeChild(copy_text);

}