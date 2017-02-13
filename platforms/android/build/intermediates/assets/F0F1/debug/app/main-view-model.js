"use strict";
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    HelloWorldModel.prototype.lottieLoaded = function (args) {
        console.log('lottieLoaded');
        try {
            this._myLottie = args.object;
            console.log(platform_1.isIOS ? args.object.ios : args.object.android);
        }
        catch (error) {
            console.log(error);
        }
    };
    HelloWorldModel.prototype.startLottie = function () {
        this._myLottie.playAnimation();
    };
    HelloWorldModel.prototype.stopLottie = function () {
        this._myLottie.cancelAnimation();
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFHN0MscUNBQWlDO0FBS2pDO0lBQXFDLG1DQUFVO0lBSTNDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRU0sc0NBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQztZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLG9DQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBR0wsc0JBQUM7QUFBRCxDQUFDLEFBM0JELENBQXFDLHVCQUFVLEdBMkI5QztBQTNCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgTG90dGllVmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG90dGllXCI7XG5cbmRlY2xhcmUgdmFyIGNvbTogYW55O1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwcml2YXRlIF9teUxvdHRpZTogTG90dGllVmlldztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb3R0aWVMb2FkZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZygnbG90dGllTG9hZGVkJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9teUxvdHRpZSA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXNJT1MgPyBhcmdzLm9iamVjdC5pb3MgOiBhcmdzLm9iamVjdC5hbmRyb2lkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydExvdHRpZSgpIHtcbiAgICAgICAgdGhpcy5fbXlMb3R0aWUucGxheUFuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wTG90dGllKCkge1xuICAgICAgICB0aGlzLl9teUxvdHRpZS5jYW5jZWxBbmltYXRpb24oKTtcbiAgICB9XG5cblxufSJdfQ==