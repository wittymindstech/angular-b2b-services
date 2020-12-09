import { HomeDashboardComponent } from './../components/homedashboard.component';
import { HomePageService } from './../services/home.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './../components/home.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations:[HomeComponent,HomeDashboardComponent],
    imports:[HttpClientModule,CommonModule,
            RouterModule.forChild([{path:"",component:HomeComponent}])],
    providers:[HomePageService],
    exports:[HomeComponent]
})

export class homeModule{}