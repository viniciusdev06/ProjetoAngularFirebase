import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu = {
    logo: 'https://cdn3.iconfinder.com/data/icons/vol-3/128/fitness-64.png',
    itens:[
      {icone: 'https://cdn1.iconfinder.com/data/icons/flat-christmas-icons-1/75/_cabin-512.png', texto: 'inicio'},
      {icone: 'https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-25-256.png', texto: 'sobre'},
      {icone: 'https://cdn0.iconfinder.com/data/icons/user-interface-line-32/32/interface_picture_draw_galery_snap_copy-64.png', texto: 'galeria '},
      {icone: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/phone-256.png', texto: 'contato'}
    ]
  }

  constructor() { }

  ngOnInit() {}

}
