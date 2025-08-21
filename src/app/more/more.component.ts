import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  showScrollToTop = false;

  constructor() { }

  ngOnInit(): void {
}

  moreItems = [
    {
      title: 'PLANTECH',
      // description: '5 Planos de Garrett, 10 Heurísticas de Nielsen, Honeycomb, Gestalt.',
      image: 'assets/images/mob-plant-1.png',
      linkUrl: 'https://drive.google.com/drive/folders/1BHsslyj0UiLBW9YAHv4uFV9VpkCUvfo-?usp=sharing'
    },
    {
      title: 'Smart Plant',
      // description: 'HTML, CSS, JavaScript, TypeScript, Boostrap, PHP, Angular, Laravel.',
      image: 'assets/images/dupla.png',
      linkUrl: 'https://drive.google.com/drive/folders/16ACpcyTATzHGxs2gUc9plcmEOfu_q6x6?usp=sharing'
    },
    {
      title: 'Cantina Reis App',
      // description: 'UX Research, UX Writing, Figma, Prototipação, Expo, React Native.',
      image: 'assets/images/frangoexpmao.png',
      linkUrl: 'https://youtu.be/28ajG7aFZe8?si=dra3t4_ykrOGU5WD'
    },
    {
      title: 'Curriculum Vitae',
      // description: 'Python, C, Robotica, Arduino, ESP8266, ESP32, MySQL, PostgreSQL.',
      image: 'assets/images/curriculum.png',
      linkUrl: 'https://drive.google.com/file/d/1VtZyTWXSL-HQFSa-HAkcQ3i75v6SxoNi/view?usp=sharing'
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
