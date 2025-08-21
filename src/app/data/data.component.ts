import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
showScrollToTop = false;

benchmarkingItems = [
    {
      title: 'Dashboard Vendas',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/vendas.png',
      linkUrl: 'https://drive.google.com/file/d/13qxlQBbM8x9o4y_Z_Tsbum7-SXiIacFz/view?usp=sharing'
    },
    {
      title: 'Dashboard Produção',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/prod.png',
      linkUrl: 'https://drive.google.com/file/d/1DHBl4oqZzI0-s3Ww3xjvF_2Q9tpkHEBs/view?usp=sharing'
    },
    {
      title: 'Dashboard RH',
      // description: 'HTML, CSS, JavaScript e Bootstrap',
      image: 'assets/images/rh.png',
      linkUrl: 'https://drive.google.com/file/d/1oJy8GqB7JOEyXu0WdOc2BJtCZlm0UgTB/view?usp=sharing'
    },
    {
      title: 'Dashboard Financeiro',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/fin.png',
      linkUrl: 'https://drive.google.com/file/d/1hw2MKIuRLmTD5GTrlEePdMz749Nc5jfx/view?usp=sharing'
    }
  ];

  frontbackItems = [
    {
      title: 'Apresentação',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/apres.png',
      linkUrl: 'https://drive.google.com/file/d/12zRyKmjf8-ocurF6Cgo_Ebcl2KyQvF2s/view?usp=sharing'
    },
    {
      title: 'Dashboard EduTech',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/edutech.png',
      linkUrl: 'https://docs.google.com/presentation/d/1raMaQAz2CHeGhgohK1j-oWHsHjE_JgRX/edit?usp=sharing&ouid=108006634331356587460&rtpof=true&sd=true'
    }
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
