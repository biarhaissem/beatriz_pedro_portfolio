import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  // Método para navegar até uma seção específica de uma página
  navigateToSection(page: string, fragment: string) {
    this.router.navigate([`/${page}`], { fragment: fragment });
  }

  ngOnInit(): void {}

  cardapioItems = [
    {
      title: 'CupCakePop',
      description: 'Fullstack Web Project',
      image: 'assets/images/webnew.png',
      linkUrl: "https://biarhaissem.github.io/beatriz_pedro_portfolio/web",
    },
    {
      title: 'Smart Plant',
      description: 'IoT Mobile App',
      image: 'assets/images/smart sorriso.png',
      navigateTo: () => this.navigateToSection('iot', 'metade')  // Usando função para navegação com fragmento
    },
    {
      title: 'Cantina Reis App',
      description: 'E-commerce Mobile App',
      image: 'assets/images/frangoexpmao.png',
      linkUrl: "https://biarhaissem.github.io/beatriz_pedro_portfolio/mobile"
    },
    {
      title: 'Batalha dos Pets',
      description: 'Mobile App - Desafio UX/UI',
      image: 'assets/images/pets uau.png',
      navigateTo: () => this.navigateToSection('mobile', 'metade')  // Usando função para navegação com fragmento
    },
  ];

  batalhaItems = [
    {
      title: 'CONCEPTIONS',
      image: 'assets/images/concep-1.png',
      linkUrl: ''
    },
    {
      title: 'WEB DESIGN',
      image: 'assets/images/web-t.png',
      linkUrl: ''
    },
    {
      title: 'MOBILE DESIGN',
      image: 'assets/images/mob.png',
      linkUrl: ''
    },
    {
      title: 'PROGRAMMING',
      image: 'assets/images/prog-t.png',
      linkUrl: ''
    },
  ];

  selectedImage: string | null = null;
  showModal: boolean = false;
  currentImage: string | null = null;
  selectedLink: string | null = null;

  openExternalLink() {
    if (this.selectedLink) {
      window.open(this.selectedLink, '_blank');
    }
  }

  expandImage(image: string, link?: string, navigateTo?: () => void) {
    this.selectedImage = image;
    this.selectedLink = link || null;
    this.showModal = true;

    if (navigateTo) {
      navigateTo();  // Executa a navegação para a seção se a função estiver presente
    }
  }

  openModal(image: string): void {
    this.selectedImage = image;
    this.currentImage = image;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedImage = null;
    this.currentImage = null;
    console.log('Modal fechado');
  }
}
