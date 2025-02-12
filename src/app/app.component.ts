import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './components/noLoginReq/homepage/homepage.component';
import { HeaderComponent } from './components/reusable/header/header.component';
import { FooterComponent } from './components/reusable/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trainApp';
}
