import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@ngbracket/ngx-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'

import { AppMaterialModule } from '../app-material.module'

import { SharedComponentsModule } from '../shared-components.module'
import { FieldErrorModule } from '../user-controls/field-error/field-error.module'
import { LemonRaterModule } from '../user-controls/lemon-rater/lemon-rater.module'
import { LogoutComponent } from './logout/logout.component'
import { ProfileComponent } from './profile/profile.component'
import { UserMaterialModule } from './user-material.module'
import { UserRoutingModule } from './user-routing.module'
import { UserEntityService } from './user/user.entity.service'
import { UserResolve } from './user/user.resolve'
import { UserService } from './user/user.service'

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    UserMaterialModule,
    FieldErrorModule,
    SharedComponentsModule,
    LemonRaterModule,
    NgxMaskDirective,
  ],
  declarations: [ProfileComponent, LogoutComponent],
  providers: [UserService, UserEntityService, UserResolve, provideNgxMask()],
})
export class UserModule {}
