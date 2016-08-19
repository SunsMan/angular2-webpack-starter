import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { TodoList } from './todo-list';
import { TodoDetails } from './todo-details';

export const routes: RouterConfig = [
  { path: '',      component: TodoList },
  { path: 'details',      component: TodoDetails },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
