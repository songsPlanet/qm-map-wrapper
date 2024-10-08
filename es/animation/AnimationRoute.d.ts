import MapWrapper from '../MapWrapper';
declare class AnimationRoute {
    private map;
    private route;
    private pauseIndex;
    private pauseStatus;
    private interval;
    private isStyle;
    constructor(map: MapWrapper, route: any);
    init(): void;
    addDashLayer(): void;
    addImageLayer(): void;
    addRouteLayer(): void;
    getIndex(): void;
    animateLine(): void;
    resetTime(): void;
    resetData(): void;
    replay(): void;
    play(): void;
    pause(): void;
    destory(): void;
}
export default AnimationRoute;
