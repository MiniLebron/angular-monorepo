import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:'/shared-ui',
        loadComponent: () =>
        import('@angular-monorepo/schare-ui').then((m) => m.SchareUiComponent),
    }
];
