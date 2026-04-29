import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../interfaces/side-bar-interfaces';

@Component({
  selector: 'app-side-bar-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.scss'
})
export class SideBarComponent {

  @Input() menu: MenuItem[] = [];
  @Output() logout = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }
}
