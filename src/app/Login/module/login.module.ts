import { loginService } from './../services/login.service';
import { loginComponent } from './../components/login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
@NgModule({

    declarations:[ loginComponent ],
    imports:[HttpClientModule, CommonModule,
            RouterModule.forChild([{path:"", component:loginComponent}]) ],
    providers:[loginService],
    exports:[loginComponent]
}
)

export class LoginModule{};