var tl;
function onLoad() {
	var eventSource = new Timeline.DefaultEventSource();

	var theme = Timeline.ClassicTheme.create();
	theme.event.bubble.width = 400;
	theme.event.bubble.height = 400;
	theme.event.track.height = 15;
	theme.event.tape.height = 8;
	var bandInfos = [
		Timeline.createBandInfo({
			eventSource:    eventSource,
			width:          "70%",
			intervalUnit:   interval1,
			timeZone: timeZone,
			intervalPixels: 100,
			theme: theme
		}),
		Timeline.createBandInfo({
			overview:       true,
			eventSource:    eventSource,
			width:          "10%",
			intervalUnit:   interval2,
			timeZone: timeZone,
			theme: theme,
			intervalPixels: 200
		}),
		Timeline.createBandInfo({
			overview:       true,
			eventSource:    eventSource,
			width:          "10%",
			intervalUnit:   interval3,
			timeZone: timeZone,
			intervalPixels: 200
		}),
		Timeline.createBandInfo({
			overview:       true,
			eventSource:    eventSource,
			width:          "10%",
			intervalUnit:   interval4,
			timeZone: timeZone,
			intervalPixels: 200
		})
	];
	bandInfos[1].syncWith = 0;
	bandInfos[1].highlight = true;
	bandInfos[2].syncWith = 0;
	bandInfos[2].highlight = true;
	bandInfos[3].syncWith = 0;
	bandInfos[3].highlight = true;

	tl = Timeline.create(document.getElementById("my-timeline"), bandInfos);
	Timeline.loadXML(XMLFile, function(xml, url) {
		eventSource.loadXML(xml, url); });
	setupFilterHighlightControls(document.getElementById("controls"),
tl,[0,1,2,3], theme);
}
var resizeTimerID = null;
function onResize() {
	if (resizeTimerID == null) {
		resizeTimerID = window.setTimeout(function() {
			resizeTimerID = null;
			tl.layout();
		}, 500);
	}
}
