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
      <div class="uui-header navigation-header">
          <nav>
              <!--Responsive html-layout-->
              <!--<div class="uui-responsive-header">-->
                  <!--<div class="responsive-header">-->
                      <!--<div class="responsive-toggle-box">-->
                          <!--<span></span>-->
                          <!--<span></span>-->
                          <!--<span></span>-->
                      <!--</div>-->
                      <!--<div class="responsive-hide-menu">-->
                          <!--<span></span>-->
                          <!--<span></span>-->
                      <!--</div>-->
                      <!--<a href="#" class="responsive-brand-logo">-->
                          <!--<span class="arrow fa fa-angle-left"></span>-->
                          <!--<span class="logo">-->
                              <!--<img src="/images/ic_logo_UUi.svg" alt="" />-->
                          <!--</span>-->
                          <!--<span class="title">Unified UI</span>-->
                      <!--</a>-->
                  <!--</div>-->
                  <!--<div class="responsive-menu">-->
                      <!--<div class="menu-wrapper">-->
                          <!--<div class="menu-scroll">-->
                              <!--<ul class="nav navbar-nav">-->
                                  <!--<li><a href="#"><span>Item 1</span></a></li>-->
                                  <!--<li><a href="#"><span>Item 2</span></a></li>-->
                                  <!--<li><a href="#"><span>Item 3</span></a></li>-->
                              <!--</ul>-->
                          <!--</div>-->
                      <!--</div>-->
                  <!--</div>-->
              <!--</div>-->
              <!---->
              <a href="#" class="brand-logo">
                  <span class="logo">
                      <img src="/images/ic_logo_UUi.svg" alt="" />
                  </span>
                  Unified UI
              </a>
              <ul class="uui-navigation nav navbar-nav">
                  <li class="active"><a href="/courses">Courses</a></li>
              </ul>
          </nav>
      </div>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <div class="uui-footer">
          <div class="footer-logo-copyright">
              <div class="epam-logo">
                  <img src="/images/Logo_Epam_Color.svg" alt="" />
              </div>
              <p class="copyright">© 2016 EPAM Systems. All Rights Reserved.</p>
          </div>
          <div class="footer-build">
              <p class="build">Build version v <span>2.0.0.1</span></p>
          </div>
      </div>
    </footer >
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

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
