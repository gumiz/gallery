	var showAndroidToast = function(toast) {
		if (isAndroidDefined()) {
			Android.showToast(toast);
		} else {
	    try {
	    	webkit.messageHandlers.swiftHandler.showToast(toast);
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
	    	webkit.messageHandlers.swiftHandler.playSound();
				webkit.messageHandlers.swiftHandler.showToast("Gallery sound started");
	    } catch(err) {
				window.alert("Sorry, no Android or Swift available. Native message will only work when called from WebView inside locosonic app.\n\n called: Android.showToast()");
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
