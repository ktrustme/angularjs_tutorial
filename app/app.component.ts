import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
    selector: 'my-app',
    template: ` <h1>{{title}}</h1>
                <nav>
                    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                    <a routerLink="/heroes" routerLinkActive="active"  >Heroes</a>
                </nav>
                <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'] 
})
export class AppComponent { 
    title = 'Tour of Heros';
}

