$(document).ready(function() {
	$("li").click(function() {
		var item = $(this).text();
		$("object").attr("data", item + ".html").show().siblings("div").hide();
	});

	$("header p").click(function() {
		$("object").hide().siblings("div").show();
	});

	$(".non-prime").click(function() {
		$(".center.prime").attr("src", $(this).attr("src"));
		$("#img-main div").text($(this).attr("alt"));
	});
});