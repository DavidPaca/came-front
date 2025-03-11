import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { RouterModule } from '@angular/router';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { SliderComponent } from './components/slider/slider.component';
// import { AboutOfComponent } from './components/about-of/about-of.component';
// import { TeamComponent } from './components/team/team.component';
// import { OurServicesComponent } from './components/our-services/our-services.component';
// import { ContactsComponent } from './components/contacts/contacts.component';
// import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, NavbarComponent, SliderComponent, AboutOfComponent, TeamComponent, OurServicesComponent, ContactsComponent, FooterComponent, HomeComponent],
  // imports: [RouterOutlet, HomeComponent, RouterModule],
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 

}
