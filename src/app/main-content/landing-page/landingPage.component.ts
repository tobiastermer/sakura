import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
        <app-navbar></app-navbar>
        <section>
            <h1 class="fontRaleway">SAKURA RAMEN</h1>
            <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
        </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent {}