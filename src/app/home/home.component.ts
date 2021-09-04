import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { EngineComponent } from '../engine/engine.component';

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
          { title: '', cols: 2, rows: 1, content: `<app-engine></app-engine>` },
          { title: 'Settings', cols: 2, rows: 1, content:'tabs-component' }
        ];
      }

      return [
        { title: '', cols: 1, rows: 1, content: `<app-engine></app-engine>` },
        { title: 'Settings', cols: 1, rows: 1, content:'tabs-component' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
