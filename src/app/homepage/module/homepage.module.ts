import { SearchComponent } from './../components/search.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './../components/footer.component';
import { HeaderComponent } from './../components/header.component';
import { MainBodyComponent } from './../components/mainbody.component';
import { MainComponent } from './../components/main.component';
import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
@NgModule({
    declarations:[MainComponent, SearchComponent, MainBodyComponent,HeaderComponent, FooterComponent],
    imports:[ HttpClientModule, CommonModule, 
              RouterModule.forChild([{path:"",component:MainComponent}])],
    providers:[],
    exports: [MainComponent]
})

export class HomePageModule{}