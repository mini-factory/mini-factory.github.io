$(document).ready(function() {
	$("li").click(function() {
		var item = $(this).text();
		$("object").attr("data", item + ".html").show().siblings("div").hide();
	});

	$("header p").click(function() {
		$("object").hide().siblings("div").show();
	});
});