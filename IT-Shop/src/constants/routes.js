import { appRoutes } from './appRoutes';

export const routes = [
  {
    href: appRoutes.catalog,
    component: '<catalog-page></catalog-page>',
  },
  {
    href: appRoutes.blog,
    component: '<blog-page></blog-page>',
  },
  {
    href: appRoutes.contacts,
    component: '<contacts-page></contacts-page>',
  },
  {
    href: appRoutes.cart,
    component: '<shopping-cart-page></shopping-cart-page>',
  },
  {
    href: '*',
    component: '<error-page></error-page>',
  },
];
