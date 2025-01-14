import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollectionCoordinatesComponent } from 'ng-openlayers';
import { GeometryPolygonComponent } from 'ng-openlayers';
import { StyleFillComponent } from 'ng-openlayers';
import { StyleStrokeComponent } from 'ng-openlayers';
import { StyleCircleComponent } from 'ng-openlayers';
import { StyleComponent } from 'ng-openlayers';
import { GeometryPointComponent } from 'ng-openlayers';
import { FeatureComponent } from 'ng-openlayers';
import { SourceVectorComponent } from 'ng-openlayers';
import { SourceClusterComponent } from 'ng-openlayers';
import { LayerVectorComponent } from 'ng-openlayers';
import { SourceOsmComponent } from 'ng-openlayers';
import { LayerTileComponent } from 'ng-openlayers';
import { CoordinateComponent } from 'ng-openlayers';
import { ViewComponent } from 'ng-openlayers';
import { ControlFullScreenComponent } from 'ng-openlayers';
import { DefaultControlComponent } from 'ng-openlayers';
import { DefaultInteractionComponent } from 'ng-openlayers';
import { MapComponent } from 'ng-openlayers';

@Component({
    selector: 'app-cluster',
    template: `
    <aol-map [width]="'100%'" [height]="'100%'">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-fullscreen></aol-control-fullscreen>
    
      <aol-view [zoom]="14">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>
    
      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
    
      <aol-layer-vector>
        <aol-source-cluster [distance]="distance">
          <aol-source-vector>
            @for (p of points; track p) {
              <aol-feature>
                <aol-geometry-point>
                  <aol-coordinate [x]="p.x" [y]="p.y" [srid]="'EPSG:4326'"></aol-coordinate>
                </aol-geometry-point>
              </aol-feature>
            }
          </aol-source-vector>
    
          <aol-style>
            <aol-style-circle [radius]="10">
              <aol-style-stroke [color]="'#fff'"></aol-style-stroke>
              <aol-style-fill [color]="'#3399CC'"></aol-style-fill>
            </aol-style-circle>
          </aol-style>
        </aol-source-cluster>
      </aol-layer-vector>
    
      <aol-layer-vector>
        <aol-source-vector>
          <aol-feature>
            <aol-geometry-polygon>
              <aol-collection-coordinates
                [coordinates]="[
                  [
                    [1.47, 43.545],
                    [1.51, 43.545],
                    [1.51, 43.565],
                    [1.47, 43.565]
                  ]
                ]"
                [srid]="'EPSG:4326'"
                >
              </aol-collection-coordinates>
            </aol-geometry-polygon>
            <aol-style>
              <aol-style-stroke [color]="'red'" [width]="2"></aol-style-stroke>
              <aol-style-fill [color]="[255, 0, 0, 0.1]"></aol-style-fill>
            </aol-style>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>
    </aol-map>
    
    <div class="control">
      <span>Distance : </span>
      <input type="range" min="0" max="255" [(ngModel)]="distance" />
      <span> ({{ distance }})</span>
    </div>
    `,
    styles: [
        `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      aol-map {
        flex: 1 1 auto;
      }

      .control {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 20px;
      }
    `,
    ],
    imports: [
        MapComponent,
        DefaultInteractionComponent,
        DefaultControlComponent,
        ControlFullScreenComponent,
        ViewComponent,
        CoordinateComponent,
        LayerTileComponent,
        SourceOsmComponent,
        LayerVectorComponent,
        SourceClusterComponent,
        SourceVectorComponent,
        FeatureComponent,
        GeometryPointComponent,
        StyleComponent,
        StyleCircleComponent,
        StyleStrokeComponent,
        StyleFillComponent,
        GeometryPolygonComponent,
        CollectionCoordinatesComponent,
        FormsModule,
    ]
})
export class ClusterComponent implements OnInit {
  distance = 60;
  points: Array<{ x: number; y: number }> = [];

  ngOnInit() {
    // Generate random points
    const nbPoints = 2000;
    for (let i = 0; i < nbPoints; ++i) {
      this.points.push({
        x: this.getRandomInRange(1.47, 1.51, 4),
        y: this.getRandomInRange(43.545, 43.565, 4),
      });
    }
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }
}
