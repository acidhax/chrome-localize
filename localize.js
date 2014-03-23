$(function () {
	var elements = $("*").filter(function() {
	    return $(this).data("localize") !== undefined;
	});
	elements.each(function () {
		var msg = chrome.i18n.getMessage($(this).data('localize'));
		if (msg && msg != "") {
			this.innerHTML = chrome.i18n.getMessage($(this).data('localize'));
		}
		console.log($(this).data('localize'), msg);
	});
});