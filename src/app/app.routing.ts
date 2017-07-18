import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';
import { PublicComponent } from './public/public.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication/authentication.service';

const appRoutes: Routes =[
  {
    path: '',
    component: RoverFormComponent,
    canActivate: ['AuthGuardService']
  },
  {
    path: 'user/photos',
    component: UserPhotosListComponent
  },
  {
    path: 'public',
    component: PublicComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService,
    AuthenticationService
  ]
})

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
