import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  plantechItems = [
    {
      title: 'Primeiro Teste',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/mob-plant-1.png',
      linkUrl: 'https://youtu.be/7sXbEuw9uZA?si=fVr7sGCRd1h6DSqG'
    },
    {
      title: 'Apresentação Final',
      // description: 'HTML, CSS, JavaScript e Bootstrap',
      image: 'assets/images/plantech-comp-pc.png',
      linkUrl: 'https://youtu.be/tknjhV3QkG8?si=flq1yLqPdG67ND7A'
    }
  ];

  smartItems = [
    {
      title: 'Protótipo Completo',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/carregando2.png',
      linkUrl: 'https://youtube.com/shorts/n9omp3_MxsQ?si=Mi_iaxbcNDJFk4jU'
    },
    {
      title: 'Funcionamento da Bomba',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/bombinha2.png',
      linkUrl: 'https://youtube.com/shorts/IfF88wXci04?si=5rcoRc5-pMxC_xby'
    },
  ];

  showModal = false;
  selectedImage: string | null = null;
  selectedLink: string | null = null;

  constructor() { }

  ngOnInit(): void {}


  openExternalLink() {
    if (this.selectedLink) {
      window.open(this.selectedLink, '_blank'); // Abre o link em uma nova aba
    }
  }

  expandImage(image: string, link?: string) {
    this.selectedImage = image;
    this.selectedLink = link || null; // Se o link existir, será passado, caso contrário, fica null.
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedImage = null;
    this.selectedLink = null;
  }
}


