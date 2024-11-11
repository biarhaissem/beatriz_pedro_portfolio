import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // images: string[] = [
  //   'assets/images/hallopc.png',
  //   'assets/images/mobilebonitos.png',
  //   'assets/imgs/halloween.png',
  //   'assets/imgs/cupstrio.png',
  //   'assets/imgs/bonitos2.png',
  //   'assets/imgs/lindos.png',
  //   'assets/imgs/cupsvariados.png',
  //   'assets/imgs/brigadeirohome.png',
  // ];

  cardapioItems = [
    {
      title: 'CupCakePop',
      description: 'Fullstack Web Project',
      image: 'assets/images/webnew.png',
      linkUrl:"https://biarhaissem.github.io/portfolio_beatriz_pedro/web",
    },
    {
      title: 'Smart Plant',
      description: 'IoT Mobile App',
      image: 'assets/images/smart sorriso.png',
      linkUrl:"https://biarhaissem.github.io/portfolio_beatriz_pedro/iot"
    },
    {
      title: 'Cantina Reis App',
      description: 'E-commerce Mobile App',
      image: 'assets/images/frangoexpmao.png',
      linkUrl:"https://biarhaissem.github.io/portfolio_beatriz_pedro/mobile"
    },
    {
      title: 'Batalha dos Pets',
      description: 'Mobile App - Desafio UX/UI',
      image: 'assets/images/pets uau.png',
      linkUrl:"https://biarhaissem.github.io/portfolio_beatriz_pedro/mobile"
    },
  ];

batalhaItems = [
  {
    title: 'CONCEPTIONS',
    // description: '5 Planos de Garrett, 10 Heurísticas de Nielsen, Honeycomb, Gestalt',
    image: 'assets/images/concep-1.png',
    linkUrl: ''
  },
  {
    title: 'WEB DESIGN',
    // description: 'HTML, CSS, JavaScript, Typescript, Bootstrap, Angular, Laravel, PHP',
    image: 'assets/images/web-t.png',
    linkUrl: ''
  },
  {
    title: 'MOBILE DESIGN',
    // description: 'JavaScript, React Native, Expo, Firebase, Figma, UX Research',
    image: 'assets/images/mob.png',
    linkUrl: ''
  },
  {
    title: 'PROGRAMMING',
    // description: 'Python, C, Arduino, ESP8266, ESP32, MySQL, PostgreSQL.',
    image: 'assets/images/prog-t.png'
  },
];

// currentSlide = 0;
//   totalSlides = 8; // Número total de imagens no carrossel

//   slide(direction: string) {
//     const track = document.querySelector('.carousel-track') as HTMLElement;
//     const slideWidth = track.offsetWidth / 8; // Dividido pelo total de imagens

//     if (direction === 'next') {
//       this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
//     } else {
//       this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
//     }

//     const offset = -(this.currentSlide * slideWidth);
//     track.style.transform = `translateX(${offset}px)`;
//   }

  selectedImage: string | null = null;  // Imagem atualmente selecionada
  showModal: boolean = false;  // Controla a exibição do modal
  currentImage: string | null = null;
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

   // Método para abrir o modal
   openModal(image: string): void {
    this.selectedImage = image;
    this.currentImage = image;
    this.showModal = true;
  }

  // Método para fechar o modal
  closeModal(): void {
    this.showModal = false;
    this.selectedImage = null;
    this.currentImage = null;
    console.log('Modal fechado');
  }
}




