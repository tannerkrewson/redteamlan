//not in use for now
/*var endDate = new Date(1495234800000); // LAN 30

if (location.pathname == "/") {
	//if the coundown time is passed
	if (Date.now() >= endDate) {
		$(".duringLAN").show();
	} else {
		$(".beforeLAN").show();
	}

	var hasPassedCountdownTime = false;
	countdown(endDate, function(time) {
		//if the coundown time is passed, only runs once
		if (time.end >= endDate && !hasPassedCountdownTime) {
			$(".beforeLAN").hide();
			$(".duringLAN").show();
			hasPassedCountdownTime = true;
		} else if (time.end < endDate) {
			$('#countdown').html(time.toString());
		}
	});
} else if (location.pathname == "/events") {
	if (Date.now() >= endDate) {
		$(".duringLAN").show();
	}
}*/
