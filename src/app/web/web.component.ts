import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  benchmarkingItems = [
    {
      title: 'Cupcake House',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/cuphouse-pc.png',
      linkUrl: 'https://www.cupcakehouserj.com.br'
    },
    {
      title: 'Just Cupcakes',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/cupjust-pc.png',
      linkUrl: 'https://www.justcupcakes.com.br'
    },
    {
      title: 'Oficina Cupcake',
      // description: 'HTML, CSS, JavaScript e Bootstrap',
      image: 'assets/images/cupofi-pc.png',
      linkUrl: 'http://oficinadocupcake.com.br'
    },
    {
      title: 'Cupcake.ito',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/cupito-pc.png',
      linkUrl: 'https://www.cupcakeito.com.br'
    }
  ];

  wixItems = [
    {
      title: 'Wix Website',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/cupwix-pc.png',
      linkUrl: 'https://biarhaissem.wixsite.com/cupcakepop'
    },
    {
      title: 'Mobile Version',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/cupwix-mob.png',
      linkUrl: ''
    }
  ];

  newItems = [
    {
      title: 'New Website',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/cuplet-pc.png',
      linkUrl: 'https://leeticiaalves6.github.io/projeto-dev-web/home.html'
    },
    {
      title: 'Mobile Version',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/cuplet-mob.png',
      linkUrl: ''
    }
  ];

  angularItems = [
    {
      title: 'Angular Website',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/cupcake-pc.png',
      linkUrl: 'https://biarhaissem.github.io/cupcakepop_2024/home'
    },
    {
      title: 'Mobile Version',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/cupcake-mob.png',
      linkUrl: ''
    }
  ];

  frontbackItems = [
    {
      title: 'Front-end',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/front-pc.png',
      linkUrl: 'https://github.com/biarhaissem/Cupcakepop_Frontend'
    },
    {
      title: 'Back-end',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/back-pc.png',
      linkUrl: 'https://github.com/biarhaissem/Cupcakepop_Backend'
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

}
