"use strict";
var view_1 = require("ui/core/view");
var LottieAnimationView = com.airbnb.lottie.LottieAnimationView;
var LottieView = (function (_super) {
    __extends(LottieView, _super);
    function LottieView() {
        return _super.call(this) || this;
    }
    Object.defineProperty(LottieView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            this._src = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "loop", {
        get: function () {
            return this._loop;
        },
        set: function (value) {
            this._loop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "cacheStrategy", {
        get: function () {
            return this._cacheStrategy;
        },
        set: function (value) {
            this._cacheStrategy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "autoPlay", {
        get: function () {
            return this._autoPlay;
        },
        set: function (value) {
            this._autoPlay = value;
        },
        enumerable: true,
        configurable: true
    });
    LottieView.prototype._createUI = function () {
        try {
            this._android = new LottieAnimationView(this._context);
            this._android.setAnimation(this._src, this._cacheStrategy);
            this._android.loop(this._loop);
            if (this._autoPlay) {
                this._android.playAnimation();
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    LottieView.prototype.playAnimation = function () {
        if (this._android) {
            this._android.playAnimation();
        }
    };
    LottieView.prototype.isAnimating = function () {
        if (this._android.isAnimating()) {
            return true;
        }
        else {
            return false;
        }
    };
    LottieView.prototype.setProgress = function (value) {
        if (value) {
            this._android.setProgress(value);
        }
    };
    LottieView.prototype.cancelAnimation = function () {
        if (this._android) {
            this._android.cancelAnimation();
        }
    };
    return LottieView;
}(view_1.View));
exports.LottieView = LottieView;
var CacheStrategy;
(function (CacheStrategy) {
    CacheStrategy[CacheStrategy["None"] = com.airbnb.lottie.LottieAnimationView.CacheStrategy.None] = "None";
    CacheStrategy[CacheStrategy["Weak"] = com.airbnb.lottie.LottieAnimationView.CacheStrategy.Weak] = "Weak";
    CacheStrategy[CacheStrategy["Strong"] = com.airbnb.lottie.LottieAnimationView.CacheStrategy.Strong] = "Strong";
})(CacheStrategy = exports.CacheStrategy || (exports.CacheStrategy = {}));
