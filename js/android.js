window.onerror = function(error) {
	alert(error); // Fire when errors occur. Just a test, not always do this.
};

var showAndroidToast = function(toast) {
		if (isAndroidDefined()) {
			Android.showToast(toast);
		} else {
	    try {
	    	webkit.messageHandlers.showToast.postMessage("Hello from javascript");
	    } catch(err) {
				window.alert("Sorry, no Android or Swift available. Native message will only work when called from WebView inside locosonic app.\n\n called: Android.showToast()");
	    }
		}
	};

	var playSound = function() {
		if (isAndroidDefined()) {
			Android.playSound();
			Android.showToast("Gallery sound started");
		} else {
			try {
	    	webkit.messageHandlers.playSound.postMessage("");
				webkit.messageHandlers.showToast.postMessage("Gallery sound started");
			} catch(err) {
				window.alert(err);
	    }
		}
	};

	var playSoundDelayed = function() {
		setTimeout(function(){
				playSound();
		}, 3000);
	}

	var isAndroidDefined = function() {
		try {
			return Android !== undefined;
		}
		catch(err) {
			return false;
		}
	}
