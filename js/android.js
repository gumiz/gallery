	var showAndroidToast = function(toast) {
		if (isAndroidDefined()) {
			Android.showToast(toast);
		} else {
			window.alert("Sorry, no Android available. Native message will only work when called from WebView inside locosonic app.\n\n called: Android.showToast()");
		}
	};

	var playSound = function() {
		if (isAndroidDefined()) {
			Android.playSound();
			Android.showToast("Gallery sound started");
		} else {
			window.alert("Sorry, no Android available. Native message will only work when called from WebView inside locosonic app.\n\n called: Android.playSound()");
		}
	};

	var playSoundDelayed = function() {
		setTimeout(function(){
				playSound(); 
				Android.showToast("Automatic gallery sound started");
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