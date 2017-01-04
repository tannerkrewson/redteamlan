
var endDate = new Date(1483747200000); //encoreLAN

if (location.pathname == "/") {
	//if the coundown time is passed
	if (Date.now() >= endDate) {
		$(".duringEncoreLAN").show();
	} else {
		$(".beforeEncoreLAN").show();
	}

	var hasPassedCountdownTime = false;
	countdown(endDate, function(time) {
		//if the coundown time is passed, only runs once
		if (time.end >= endDate && !hasPassedCountdownTime) {
			$(".beforeEncoreLAN").hide();
			$(".duringEncoreLAN").show();
			hasPassedCountdownTime = true;
		} else if (time.end < endDate) {
			$('#countdown').html(time.toString());
		}
	});
} else if (location.pathname == "/events") {
	if (Date.now() >= endDate) {
		$(".duringEncoreLAN").show();
	}
}
