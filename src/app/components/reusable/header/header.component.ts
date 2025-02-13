import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavMenuComponent } from "./nav-menu/nav-menu.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, NavMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
