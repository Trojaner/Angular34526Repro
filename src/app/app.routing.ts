import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
export const ModuleRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, { initialNavigation: 'enabled', anchorScrolling: 'enabled' });
