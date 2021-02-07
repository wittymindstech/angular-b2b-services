import { RegisterService } from './../services/register.service';
import { registerComponent } from './../components/registration.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@NgModule({

    declarations:[ registerComponent, ],
    imports:[HttpClientModule, CommonModule,FormsModule,
            RouterModule.forChild([{path:"", component:registerComponent},
            ])],
    providers:[RegisterService],
    exports:[registerComponent]
}
)

export class RegisterModule{};