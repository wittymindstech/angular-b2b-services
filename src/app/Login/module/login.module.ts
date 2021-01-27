import { loginService } from './../services/login.service';
import { loginComponent } from './../components/login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@NgModule({

    declarations:[ loginComponent, ],
    imports:[HttpClientModule, CommonModule,FormsModule,
            RouterModule.forChild([{path:"", component:loginComponent},
            ])],
    providers:[loginService],
    exports:[loginComponent]
}
)

export class LoginModule{};