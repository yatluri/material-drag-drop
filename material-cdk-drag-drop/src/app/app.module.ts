import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import 'hammerjs';
// importing angular material components
import { MatGridListModule, MatCardModule } from '@angular/material';
import { AppRouteConfig } from './app.route.config';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

// importing services
import { TaskService } from './drag-drop/services/task.service';
@NgModule({
  declarations: [AppComponent, DragDropComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    AppRouteConfig
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
