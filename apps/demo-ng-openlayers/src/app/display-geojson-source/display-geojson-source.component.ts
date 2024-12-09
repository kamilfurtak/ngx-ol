import { Component, OnInit } from '@angular/core';
import { SourceGeoJSONComponent } from 'ng-openlayers';
import { FeatureComponent } from 'ng-openlayers';
import { SourceVectorComponent } from 'ng-openlayers';
import { LayerVectorComponent } from 'ng-openlayers';
import { LayerGroupComponent } from 'ng-openlayers';
import { SourceOsmComponent } from 'ng-openlayers';
import { LayerTileComponent } from 'ng-openlayers';
import { CoordinateComponent } from 'ng-openlayers';
import { ViewComponent } from 'ng-openlayers';
import { DefaultControlComponent } from 'ng-openlayers';
import { DefaultInteractionComponent } from 'ng-openlayers';
import { MapComponent } from 'ng-openlayers';

@Component({
    selector: 'app-display-geojson-source',
    template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="4">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-group>
        <aol-layer-vector>
          <aol-source-vector>
            <aol-feature>
              <aol-source-geojson
                [url]="'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'"
              >
              </aol-source-geojson>
            </aol-feature>
          </aol-source-vector>
        </aol-layer-vector>
      </aol-layer-group>
    </aol-map>
  `,
    imports: [
        MapComponent,
        DefaultInteractionComponent,
        DefaultControlComponent,
        ViewComponent,
        CoordinateComponent,
        LayerTileComponent,
        SourceOsmComponent,
        LayerGroupComponent,
        LayerVectorComponent,
        SourceVectorComponent,
        FeatureComponent,
        SourceGeoJSONComponent,
    ]
})
export class DisplayGeojsonSourceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
