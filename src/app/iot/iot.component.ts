import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {
  showScrollToTop = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  this.route.fragment.subscribe((fragment) => {
    const element = document.getElementById(fragment!);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

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

  // Ouvinte para rolagem da janela
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Mostra o botão quando o usuário rolar mais de 300px para baixo
    this.showScrollToTop = window.scrollY > 300;
  }

  // Função para rolar para o topo da página
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

