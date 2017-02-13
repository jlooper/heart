import { View } from "ui/core/view";
export declare class LottieView extends View {
    private _src;
    private _loop;
    private _cacheStrategy;
    private _android;
    constructor();
    readonly android: any;
    readonly _nativeView: any;
    src: string;
    loop: boolean;
    cacheStrategy: EnumCacheStrategy;
    _createUI(): void;
    playAnimation(): void;
    isAnimating(): boolean;
    setProgress(value: any): void;
    cancelAnimation(): void;
}
export declare enum EnumCacheStrategy {
    None = 0,
    Weak = 1,
    Strong = 2,
}
