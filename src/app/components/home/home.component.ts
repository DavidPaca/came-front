import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { AboutOfComponent } from '../about-of/about-of.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { TeamComponent } from '../team/team.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, AboutOfComponent, OurServicesComponent, TeamComponent, ContactsComponent, FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
