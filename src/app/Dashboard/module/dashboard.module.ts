import { DashboardheaderComponent } from './../components/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './../components/landingpage.component';
import { CoursedetailComponent } from './../components/coursedetail.component';
import { NgModule } from "@angular/core";
import { CommonModule} from '@angular/common';

@NgModule({
    declarations:[CoursedetailComponent,LandingpageComponent,DashboardheaderComponent],
    imports:[HttpClientModule, CommonModule,
            RouterModule.forChild([{path:"", component:LandingpageComponent},
    ])],
    providers:[],
    exports:[LandingpageComponent]
})
export class DashboardModule{};