// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// @Component({
//   selector: 'app-head',
//   standalone: true,
//   imports: [RouterLink],
//   templateUrl: './head.html',
//   styleUrl: './head.css',
// })
// export class Head {
//   // urls = ['home', 'about', 'contact', 'login', 'services',];
//   urls=[
//     {
//       "text":"Home",
//       "url":'home'
//     },
//     {
//       "text":"About",
//       "url":'about'
//     },
//     {
//       "text":"Contact",
//       "url":'contact'
//     },
//     {
//       "text":"Login",
//       "url":'login'
//     },
//     {
//       "text":"Services",
//       "url":'services'
//     },
//   ]
// }


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './head.html',
  styleUrl: './head.css',
})
export class Head {
  // urls = ['home', 'about', 'contact', 'login', 'services','register'];
  urls=[
    {
      "text":"Home",
      "url":'home'
    },
    {
      "text":"About",
      "url":'about'
    },
    {
      "text":"Contact",
      "url":'contact'
    },
    {
      "text":"Login",
      "url":'login'
    },
    {
      "text":"Products",
      "url":'products'
    },
    {
      "text":"Register",
      "url":'register'
    },
    {
      "text":"Faq",
      "url":'faq'
    },
    {
      "text":"Testimonals",
      "url":'testimonals'
    }
  ]
}
