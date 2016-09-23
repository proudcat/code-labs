// chrome.devtools.panels.create("My Panel",
//     "icon.png",
//     "devtools.html",
//     function(panel) {
//     }
// );

// chrome.devtools.panels.elements.createSidebarPane("My Sidebar",
//     function(sidebar) {
//         // sidebar initialization code here
//         sidebar.setObject({ some_data: "Some data to show" });
// });

// chrome.extension.onRequest.addListener(function(request) {
// 	chrome.devtools.inspectedWindow.eval(
// 		'console.log("-----> : " + unescape("' +
// 		escape(request.request.url) + '"))'
// 	);
// });

var counter = 1;

// var console = chrome.extension.getBackgroundPage().console;
// console.log('xxxxxxxxxxxxxxxxxxx');


chrome.devtools.network.onRequestFinished.addListener(
	function(request) {

		// chrome.devtools.inspectedWindow.eval(
		// 	'console.log("--->: " + unescape("' + escape(request.request.url) + '"))'
		// );

		// var shit = counter.toString();

		chrome.devtools.inspectedWindow.eval(
			'console.log("--->: "+'+ counter +')'
		);

		// console.log('counter',counter);
		counter++;

	});

// var counter = 1;

// chrome.devtools.network.onRequestFinished.addListener(function(request) {

// 	chrome.devtools.inspectedWindow.eval(
// 		'console.log("-----> : " + unescape("' +
// 		escape(request.request.url) + '"))'
// 	);

// 	// if (request.response.bodySize > 40) {
// 	// chrome.devtools.inspectedWindow.eval(
// 	// 	'console.log("request : [" ' + counter + '"]+ unescape("' +
// 	// 	escape(request.request.url) + '"))'
// 	// );

// 	// counter++;



// 	// 		'console.log("request : "[' + counter + ' + unescape("' +
// 	// 		escape(request.request.url) + '"))');
// });