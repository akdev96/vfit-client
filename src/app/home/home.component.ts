import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '', cols: 2, rows: 1, content:'3D Model' },
          { title: 'Settings', cols: 2, rows: 1, content:'Card2' }
        ];
      }

      return [
        { title: '', cols: 1, rows: 1, content:'3D Model' },
        { title: 'Settings', cols: 1, rows: 1, content:'Card2' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
