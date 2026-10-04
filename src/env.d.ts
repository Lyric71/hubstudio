/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    /** Language of the page being served (src/middleware.ts). */
    locale?: import('./i18n/index').Locale;
    /** English page behind the address, e.g. /pricing for /fr/tarifs. */
    enPath?: string;
  }
}
