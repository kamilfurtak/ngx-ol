import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ArcgisImageComponent } from './arcgis-image/arcgis-image.component';
import { BasicComponent } from './basic/basic.component';
import { ClusterComponent } from './cluster/cluster.component';
import { ColorSelectHoverComponent } from './color-select-hover/color-select-hover.component';
import { CursorPositionComponent } from './cursor-position/cursor-position.component';
import { DisplayGeojsonSourceComponent } from './display-geojson-source/display-geojson-source.component';
import { DisplayGeometryComponent } from './display-geometry/display-geometry.component';
import { DrawPolygonComponent } from './draw-polygon/draw-polygon.component';
import { ExamplesItemComponent } from './examples-item/examples-item.component';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { ImageStaticComponent } from './image-static/image-static.component';
import { ImageWMSComponent } from './image-wms/image-wms.component';
import { MapPositionComponent } from './map-position/map-position.component';
import { MarkerComponent } from './marker/marker.component';
import { ModifyPolygonComponent } from './modify-polygon/modify-polygon.component';
import { OverviewComponent } from './overview/overview.component';
import { RasterComponent } from './raster/raster.component';
import { SelectInteractionComponent } from './select-interaction/select-interaction.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { SwipeComponent } from './swipe/swipe.component';
import { TileJsonComponent } from './tile-json/tile-json.component';
import { UTFGridComponent } from './utfgrid/utfgrid.component';
import { ViewProjectionUpdateComponent } from './view-projection-update/view-projection-update.component';
import { AngularOpenlayersModule } from 'ng-openlayers';
import { GraticuleDemoComponent } from './graticule/graticule-demo.component';
import { OverlayDemoComponent } from './overlay/overlay-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularOpenlayersModule,
    ReactiveFormsModule,
    HammerModule,
    AngularOpenlayersModule,
    BasicComponent,
    ClusterComponent,
    RasterComponent,
    ExamplesListComponent,
    ExamplesItemComponent,
    MapPositionComponent,
    CursorPositionComponent,
    DisplayGeometryComponent,
    DisplayGeojsonSourceComponent,
    DrawPolygonComponent,
    ModifyPolygonComponent,
    SideBySideComponent,
    SwipeComponent,
    OverlayDemoComponent,
    ColorSelectHoverComponent,
    MarkerComponent,
    ArcgisImageComponent,
    UTFGridComponent,
    ImageWMSComponent,
    SelectInteractionComponent,
    ImageStaticComponent,
    TileJsonComponent,
    OverviewComponent,
    ViewProjectionUpdateComponent,
    GraticuleDemoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
