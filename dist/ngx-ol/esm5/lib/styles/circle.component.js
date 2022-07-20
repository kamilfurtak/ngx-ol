import { __decorate, __param } from "tslib";
import { Component, Input, Host } from '@angular/core';
import { Circle } from 'ol/style';
import { StyleComponent } from './style.component';
var StyleCircleComponent = /** @class */ (function () {
    function StyleCircleComponent(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    StyleCircleComponent.prototype.update = function () {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    };
    StyleCircleComponent.prototype.ngAfterContentInit = function () {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new Circle(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    };
    StyleCircleComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes.radius) {
            this.instance.setRadius(changes.radius.currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    };
    StyleCircleComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    };
    StyleCircleComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "fill", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "radius", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "snapToPixel", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "stroke", void 0);
    StyleCircleComponent = __decorate([
        Component({
            selector: 'aol-style-circle',
            template: " <ng-content></ng-content> "
        }),
        __param(0, Host())
    ], StyleCircleComponent);
    return StyleCircleComponent;
}());
export { StyleCircleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUF5RCxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsTUFBTSxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQ7SUFhRSw4QkFBNEIsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFaekMsa0JBQWEsR0FBRyxjQUFjLENBQUM7SUFZYSxDQUFDO0lBRXBEOzs7O09BSUc7SUFDSCxxQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQiw2REFBNkQ7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaURBQWtCLEdBQWxCO1FBQ0UsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdEQ7UUFDRCw2R0FBNkc7SUFDL0csQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQW5DaUMsY0FBYyx1QkFBbkMsSUFBSTs7SUFSakI7UUFEQyxLQUFLLEVBQUU7c0RBQ0c7SUFFWDtRQURDLEtBQUssRUFBRTt3REFDTztJQUVmO1FBREMsS0FBSyxFQUFFOzZEQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFO3dEQUNPO0lBWEosb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBY2EsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQWJSLG9CQUFvQixDQWlEaEM7SUFBRCwyQkFBQztDQUFBLEFBakRELElBaURDO1NBakRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3QsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaXJjbGUsIEZpbGwsIFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtY2lyY2xlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUNpcmNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc3R5bGUtY2lyY2xlJztcbiAgcHVibGljIGluc3RhbmNlOiBDaXJjbGU7XG5cbiAgQElucHV0KClcbiAgZmlsbDogRmlsbDtcbiAgQElucHV0KClcbiAgcmFkaXVzOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNuYXBUb1BpeGVsOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzdHJva2U6IFN0cm9rZTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XG5cbiAgLyoqXG4gICAqIFdPUkstQVJPVU5EOiBzaW5jZSB0aGUgcmUtcmVuZGVyaW5nIGlzIG5vdCB0cmlnZ2VyZWQgb24gc3R5bGUgY2hhbmdlXG4gICAqIHdlIHRyaWdnZXIgYSByYWRpdXMgY2hhbmdlLlxuICAgKiBzZWUgb3BlbmxheWVycyAjNjIzMyBhbmQgIzU3NzVcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoISF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5DaXJjbGUgaW5zdGFuY2VcXCdzIHJhZGl1cycpO1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSYWRpdXModGhpcy5yYWRpdXMpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkNpcmNsZSBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENpcmNsZSh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKGNoYW5nZXMucmFkaXVzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1jaXJjbGUsIHNldHRpbmcgbmV3IHJhZGl1czogJywgY2hhbmdlc1sncmFkaXVzJ10uY3VycmVudFZhbHVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtc3R5bGUtY2lyY2xlJyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKG51bGwpO1xuICB9XG59XG4iXX0=