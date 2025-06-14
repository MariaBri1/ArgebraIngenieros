import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeTab: string = 'flights';

  tabs = [
    { id: 'flights', label: 'Vuelos', icon: 'fas fa-plane' },
    { id: 'hotels', label: 'Hoteles', icon: 'fas fa-bed' },
    { id: 'flight-hotel', label: 'Vuelo + Hotel', icon: 'fas fa-suitcase-rolling' },
    { id: 'cars', label: 'Alquiler de autos', icon: 'fas fa-car' },
  ];

  switchTab(tabId: string): void {
    this.activeTab = tabId;
  }

  search(tab: string): void {
    switch (tab) {
      case 'flights':
        console.log('🔍 Buscando vuelos...');
        break;
      case 'hotels':
        console.log('🔍 Buscando hoteles...');
        break;
      case 'flight-hotel':
        console.log('🔍 Buscando paquetes vuelo + hotel...');
        break;
      case 'cars':
        console.log('🔍 Buscando alquiler de autos...');
        break;
    }
  }
}
