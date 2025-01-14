import { Component } from '@angular/core';
import { createBox } from 'ol/interaction/Draw';
import { Feature } from 'ol';
import Projection from 'ol/proj/Projection';
import { fromExtent } from 'ol/geom/Polygon';
import { JsonPipe } from '@angular/common';
import {
  CollectionCoordinatesComponent,
  CoordinateComponent,
  DefaultInteractionComponent,
  DrawInteractionComponent,
  FeatureComponent,
  GeometryPolygonComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  ViewComponent,
} from 'ng-openlayers';

@Component({
    selector: 'app-draw-polygon',
    template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      @if (isDrawing) {
        <aol-interaction-draw
          type="Circle"
          [geometryFunction]="drawBoxGeometryFunction"
          (drawEnd)="endDraw($event.feature)"
        >
        </aol-interaction-draw>
      }

      <aol-view [zoom]="5">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      @if (feature) {
        <aol-layer-vector #vectorLayer>
          <aol-source-vector>
            <aol-feature>
              <aol-geometry-polygon>
                <aol-collection-coordinates [coordinates]="feature.geometry.coordinates" [srid]="'EPSG:4326'">
                </aol-collection-coordinates>
              </aol-geometry-polygon>
            </aol-feature>
          </aol-source-vector>
        </aol-layer-vector>
      }
    </aol-map>

    <div class="info">
      <div class="draw-section">
        <button (click)="drawMode()">{{ isDrawing ? 'End draw' : 'Start draw' }}</button>
        <h3>Result</h3>
        <code>
          <pre>{{ feature | json }}</pre>
        </code>
      </div>
    </div>
  `,
    styles: [
        `
      :host {
        height: 100%;
        display: flex;
      }

      aol-map {
        width: 70%;
      }

      .info {
        width: 28%;
        padding: 1rem;
      }
    `,
    ],
    imports: [
        MapComponent,
        DefaultInteractionComponent,
        DrawInteractionComponent,
        ViewComponent,
        CoordinateComponent,
        LayerTileComponent,
        SourceOsmComponent,
        LayerVectorComponent,
        SourceVectorComponent,
        FeatureComponent,
        GeometryPolygonComponent,
        CollectionCoordinatesComponent,
        JsonPipe,
    ]
})
export class DrawPolygonComponent {
  isDrawing = false;
  drawBoxGeometryFunction = createBox();
  feature;

  drawMode() {
    this.isDrawing = !this.isDrawing;
  }

  endDraw(feature: Feature) {
    const olGeomPolygon = fromExtent(feature.getGeometry().getExtent());
    olGeomPolygon.transform(new Projection({ code: 'EPSG:3857' }), new Projection({ code: 'EPSG:4326' }));
    this.feature = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: olGeomPolygon.getCoordinates(),
      },
    };
  }
}
