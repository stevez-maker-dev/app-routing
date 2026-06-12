import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const ultimaRuta = localStorage.getItem('ultimaRuta');
    const rutaActual = window.location.pathname;

    if(ultimaRuta && ultimaRuta !== '/' && rutaActual === '/'){
      this.router.navigate([ultimaRuta]);
    }

    // Guarda en localStorage cada vez que cambia la ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      localStorage.setItem('ultimaRuta', event.urlAfterRedirects);
    });
  }
}
