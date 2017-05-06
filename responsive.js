function init() {
	showing = 1;
	cb = document.getElementById("chatbox");
	left = document.getElementById("left");
	videojs = document.getElementById("videojs");
	sh = document.getElementById("showhide");
	responsive();
}
function showhide() {
	if (showing) {
		cb.style.width = "0px";
		left.style.width = window.innerWidth;
		sh.value = "Show chatbox";
		showing = 0;
	}
	else {
		cb.style.width = window.innerWidth - computeleft() + "px";
		left.style.width = computeleft() + "px";
		sh.value = "Hide chatbox";
		showing = 1;
	}
	responsive();
}
function computeleft() {
	if(showing) {
		cb.style.position="fixed";
		var tmpwidth = (window.innerHeight - 91 - 70) / 9 * 16;
		if (window.innerWidth <= 1000)
			return window.innerWidth;
		if (window.innerWidth - tmpwidth < 300)
			return window.innerWidth - 300;
		return tmpwidth;
	}
	else{
		return window.innerWidth;
	}
}
function responsive() {
	if (window.innerWidth > 1000) {
		cb.style.width = window.innerWidth - computeleft() + "px";
		//cb.style.height = window.innerHeight + 12 + "px";
		cb.style.height = window.innerHeight + "px";
		left.style.width = computeleft() + "px";
	}
	else {
		left.style.width = window.innerWidth + "px";
		videojs.style.width = window.innerWidth + "px";
		left.style.height = (window.innerWidth / 16 * 9) + 91 + 70 + "px";
		if (((window.innerWidth / 16 * 9) + 91 + 70) < window.innerHeight) {
			cb.style.width = window.innerWidth + "px";
			//cb.style.height = window.innerHeight - ((window.innerWidth / 16 * 9) + 91 + 70) + 12 + "px";
			cb.style.height = window.innerHeight - ((window.innerWidth / 16 * 9) + 91 + 70) + "px";
		}
		else {
			cb.style.width = "0px";
		}
	}
	if (computeleft() / 16 * 9 + 91 + 70 > window.innerHeight) {
		videojs.style.width = (window.innerHeight - 91 - 70) / 9 * 16 + "px";
		left.style.height = window.innerHeight + "px";
	}
	else {
		videojs.style.width = computeleft() + "px";
	}
	setTimeout(function() {chatboxFrame.contentWindow.location.reload();}, 1000);
}