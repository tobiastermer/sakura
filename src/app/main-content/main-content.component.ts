import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { OurMenuComponent } from './our-menu/our-menu.component';

@Component({
  selector: 'app-mainContent',
  standalone: true,
  imports: [LandingPageComponent, HowToOrderComponent, OurMenuComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
