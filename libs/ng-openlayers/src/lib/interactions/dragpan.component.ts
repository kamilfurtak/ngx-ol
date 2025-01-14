import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';

@Component({
    selector: 'aol-interaction-dragpan',
    template: '',
    standalone: true,
})
export class DragPanInteractionComponent implements OnInit, OnDestroy {
  @Input()
  condition: Condition;
  @Input()
  kinetic: Kinetic;

  instance: DragPan;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragPan(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
