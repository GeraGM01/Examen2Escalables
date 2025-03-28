import { Routes } from '@angular/router';
import { NewTvShowComponent } from './pages/new-tv-show/new-tv-show.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TvShowDetailsComponent } from './pages/tv-show-details/tv-show-details.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        title: "Home"
    },
    {
        path: "new-tv-show",
        component: NewTvShowComponent,
        title: "New TV Show"
    },
    {
        path: "new-show",
        redirectTo: "new-tv-show",
        pathMatch: "full"
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "not-found",
        component: NotFoundComponent,
        title: "Not found"
    },
    {
        path: "tv-show-details/:name",
        component: TvShowDetailsComponent,
        title: "TV Show Details"
    },
    {
        path: "**",
        redirectTo: "not-found",
        pathMatch: "full"
    }
];
