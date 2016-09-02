/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <header>
      <div class="a2m-header navigation-header">
          <nav>
              <a href="#" class="brand-logo">
                  <span class="logo">
                      <img [src]="epam.logoGray" alt="" />
                  </span>
                  <span class="logo">
                      <img [src]="epam.uuiLogo" alt="" />
                  </span>
                  Unified UI
              </a>
              <ul class="a2m-navigation nav navbar-nav">
                  <li class="active"><a href="/courses">Courses</a></li>
              </ul>
          </nav>
      </div>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <!--<pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>-->

    <footer>
      <div class="a2m-footer">
          <div class="a2m-footer-logo-copyright">
              <span class="logo">
                  <img [src]="epam.logoGray" alt="" />
              </span>
              <p class="copyright">© 2016 EPAM Systems. All Rights Reserved.</p>
          </div>
      </div>
    </footer >
  `
})
export class App {
  epam:any = {};
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {
    this.epam.logoGray = 'assets/img/Logo_Epam_Gray.svg';
    this.epam.logoWhite = 'assets/img/Logo_Epam_White.svg';
    this.epam.logoColor = 'assets/img/Logo_Epam_Color.svg';
    this.epam.uuiLogo = 'assets/img/ic_logo_UUi.svg';

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
    // UUI.Navigation.init();
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
