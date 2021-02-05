import { CartComponent } from './../components/cart.component';
import { CoursesService } from './../service/courses.service';
import { DashboardSearchService } from './../service/dashboardsearch.service';
import { DashboardSearchComponent } from './../components/dashboardsearch.component';
import { DashboardheaderComponent } from './../components/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './../components/landingpage.component';
import { CoursedetailComponent } from './../components/coursedetail.component';
import { NgModule } from "@angular/core";
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[CoursedetailComponent,LandingpageComponent,DashboardheaderComponent,DashboardSearchComponent,CartComponent],
    imports:[HttpClientModule, CommonModule,FormsModule,
            RouterModule.forChild([{path:"", component:LandingpageComponent},
                                   {path:"search", component:DashboardSearchComponent},
                                   {path:"cart", component:CartComponent},
                                   {path:"coursedetail",component:CoursedetailComponent}
        ])],
    providers:[DashboardSearchService,CoursesService],
    exports:[LandingpageComponent]
})
export class DashboardModule{};