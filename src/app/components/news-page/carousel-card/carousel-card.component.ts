import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  @Input() title:string = "Título";
  @Input() description:string = "Resumo do conteúdo para contextualizar o leitor";
  @Input() imagePath:string = "https://img.freepik.com/fotos-gratis/vista-superior-velhas-pecas-de-jornal-frances_23-2149318857.jpg?w=900&t=st=1707503684~exp=1707504284~hmac=5b6db4c8bf19ea38b575413e55cd3e6b684103cc6651931a2b136c47065bb22b";
  @Input() slug:string = "/login";

  constructor() { }

  ngOnInit(): void {
  }

}
