import { Component, Input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() items = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Imagen 1',
      description: 'Descripción breve de la primera imagen.'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Imagen 2',
      description: 'Descripción breve de la segunda imagen.'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Imagen 3',
      description: 'Descripción breve de la tercera imagen.'
    }
  ]

  @Input() image: string = ''
  @Input() title: string = ''
  @Input() description: string = ''
}
