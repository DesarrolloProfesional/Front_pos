import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { MenuItem } from '../../shared/interfaces/side-bar-interfaces';
import { SideBarComponent } from '../../shared/components/side-bar-component/side-bar-component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
 private router = inject(Router);
  private route = inject(ActivatedRoute);

  pageTitle = 'Dashboard';

  menu: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: '📊' },
    { label: 'Productos', route: '/products', icon: '📦' },
    { label: 'Ventas', route: '/sales', icon: '💰' }
  ];

  constructor() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let current = this.route;
          while (current.firstChild) {
            current = current.firstChild;
          }
          return current.snapshot.title || 'Dashboard';
        })
      )
      .subscribe(title => {
        this.pageTitle = title;
      });
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/auth/login']);
  }
}
