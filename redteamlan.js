
//show the countdown
if (location.pathname == "/") {
	var endDate = new Date(1483747200000);
	countdown(endDate, function(time) {
		$('#countdown').html(time.toString());
	});
}
