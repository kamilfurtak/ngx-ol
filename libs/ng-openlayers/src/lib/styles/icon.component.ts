import { Component, Input, Host, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Icon } from 'ol/style';

// TODO https://github.com/openlayers/openlayers/issues/12694
// import IconAnchorUnits from 'ol/style/IconAnchorUnits';
// import IconOrigin from 'ol/style/IconOrigin';
import { StyleComponent } from './style.component';
import { IconAnchorUnits, IconOrigin } from 'ol/style/Icon';

@Component({
    selector: 'aol-style-icon',
    template: ` <div class="aol-style-icon"></div> `,
    standalone: true,
})
export class StyleIconComponent implements OnInit, OnChanges {
  @Input()
  anchor: [number, number];
  @Input()
  anchorXUnits: IconAnchorUnits;
  @Input()
  anchorYUnits: IconAnchorUnits;
  @Input()
  anchorOrigin: IconOrigin;
  @Input()
  color: [number, number, number, number];
  @Input()
  crossOrigin: IconOrigin;
  @Input()
  img: HTMLCanvasElement | HTMLImageElement;
  @Input()
  offset: [number, number];
  @Input()
  offsetOrigin: IconOrigin;
  @Input()
  opacity: number;
  @Input()
  scale: number;
  @Input()
  snapToPixel: boolean;
  @Input()
  rotateWithView: boolean;
  @Input()
  rotation: number;
  @Input()
  size: [number, number];
  @Input()
  imgSize: [number, number];
  @Input()
  src: string;

  public instance: Icon;

  constructor(@Host() private host: StyleComponent) {}

  ngOnInit() {
    // console.log('creating ol.style.Icon instance with: ', this);
    this.instance = new Icon(this);
    this.host.instance.setImage(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) {
      return;
    }
    if (changes.opacity) {
      this.instance.setOpacity(changes.opacity.currentValue);
    }
    if (changes.rotation) {
      this.instance.setRotation(changes.rotation.currentValue);
    }
    if (changes.scale) {
      this.instance.setScale(changes.scale.currentValue);
    }
    if (changes.src) {
      this.instance = new Icon(this);
      this.host.instance.setImage(this.instance);
    }
    this.host.update();
    // console.log('changes detected in aol-style-icon: ', changes);
  }
}
