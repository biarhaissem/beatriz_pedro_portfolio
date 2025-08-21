import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showScrollToTop = false;
  constructor(private router: Router) { }

  // Método para navegar até uma seção específica de uma página
  navigateToSection(page: string, fragment: string) {
    this.router.navigate([`/${page}`], { fragment: fragment });
  }

  ngOnInit(): void {}

  jobsItems = [
    {
      title: 'CupCakePop',
      description: 'Full Stack Project',
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
      description: 'E-commerce Mobile',
      image: 'assets/images/frangoexpmao.png',
      linkUrl: "https://biarhaissem.github.io/beatriz_pedro_portfolio/mobile"
    },
    {
      title: 'Dashboard Gerencial',
      description: 'Desafio Power BI',
      image: 'assets/images/dashfig.png',
      linkUrl: "https://biarhaissem.github.io/beatriz_pedro_portfolio/data"
    },
  ];

  skillsItems = [
    {
      title: 'CONCEPTIONS',
      image: 'assets/images/concep-1.png',
      linkUrl: ''
    },
     {
      title: 'DEVELOPMENT',
      image: 'assets/images/prog-t.png',
      linkUrl: ''
    },
    {
      title: 'DESIGN UX/UI',
      image: 'assets/images/web-t.png',
      linkUrl: ''
    },
    {
      title: 'DATA ANALYSIS',
      image: 'assets/images/powerbiafig.png',
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
