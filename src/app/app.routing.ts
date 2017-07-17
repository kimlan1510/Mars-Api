import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';
import { PublicComponent } from './public/public.component';

const appRoutes: Routes =[
  {
    path: '',
    component: RoverFormComponent
  },
  {
    path: 'user/photos',
    component: UserPhotosListComponent
  },
  {
    path: 'public',
    component: PublicComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
