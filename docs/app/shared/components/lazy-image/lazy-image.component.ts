import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent {

  @Input()
  public url!: string;

  @Input()
  public alt:string = '';

  // Estado inicial de la imagen
  public hasLoaded:boolean = false;


  ngOnInit(): void {
    if( !this.url ) throw new Error('Url property is required.');
  }

  // Establece el estado de la imagen como cargada
  onLoad() {
    this.hasLoaded = true
  }
}
