import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {
  @Input() title:string = "Título da notícia";
  @Input() description:string = "Resumo do conteúdo para contextualizar o leitor";
  @Input() imagePath:string = "https://img.freepik.com/fotos-gratis/vista-superior-velhas-pecas-de-jornal-frances_23-2149318857.jpg?w=900&t=st=1707503684~exp=1707504284~hmac=5b6db4c8bf19ea38b575413e55cd3e6b684103cc6651931a2b136c47065bb22b";
  @Input() slug:string = "/login";

  constructor() { }

  ngOnInit(): void {
  }

}
