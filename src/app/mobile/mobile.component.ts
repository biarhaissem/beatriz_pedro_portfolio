import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  newItems = [
    {
      title: 'Protótipo 1',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/protcant1.png',
      linkUrl: 'https://www.figma.com/design/xy1G35TGLBCTsDogxuH4zp/Cantina-Reis---Template-Android-Nervoso?node-id=16-1478&node-type=frame&t=QOctQqlBCggNk1fs-0'
    },
    {
      title: 'Protótipo 2',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/protcant2.png',
      linkUrl: 'https://www.figma.com/design/xy1G35TGLBCTsDogxuH4zp/Cantina-Reis---Template-Android-Nervoso?node-id=16-1478&node-type=frame&t=QOctQqlBCggNk1fs-0'
    }
  ];

  angularItems = [
    {
      title: 'QRCode gerado no PC',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/pcqrcode.png',
      linkUrl: ''
    },
    {
      title: 'Expo Go no Smartphone',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/mobqrcode.png',
      linkUrl: 'https://youtu.be/vPbIg5x65xM?si=aLVwHpov_hmMiHgo'
    }
  ];

  frontbackItems = [
    {
      title: 'II JUPESQI',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/jupesqi1.png',
      linkUrl: 'https://youtu.be/vfzQWAsq-7s?si=wImrknYuXSnd2pgy'
    },
    {
      title: 'FENETEC',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/fenetec.png',
      linkUrl: 'https://youtu.be/gSkR6ZjnTps?si=j1sFnIKYfbDqQl7X'
    }
  ];

  pets1Items = [
    {
      title: 'Etapa 1 - Desafio',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/etp1-desafio.png',
      linkUrl: 'https://www.figma.com/design/xy1G35TGLBCTsDogxuH4zp/Cantina-Reis---Template-Android-Nervoso?node-id=16-1478&node-type=frame&t=QOctQqlBCggNk1fs-0'
    },
    {
      title: 'Etapa 1 - Beatriz Pedro',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/etp1-bia.png',
      linkUrl: 'https://www.figma.com/design/xy1G35TGLBCTsDogxuH4zp/Cantina-Reis---Template-Android-Nervoso?node-id=16-1478&node-type=frame&t=QOctQqlBCggNk1fs-0'
    }
  ];

  pets2Items = [
    {
      title: 'Etapa 2 - Desafio',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/etp2-desafio.png',
      linkUrl: ''
    },
    {
      title: 'Etapa 2 - Beatriz Pedro',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/etp2-bia.png',
      linkUrl: 'https://youtu.be/vPbIg5x65xM?si=aLVwHpov_hmMiHgo'
    }
  ];

  pets3Items = [
    {
      title: 'Etapa 3 - Desafio',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/etp3-desafio.png',
      linkUrl: 'https://youtu.be/vfzQWAsq-7s?si=wImrknYuXSnd2pgy'
    },
    {
      title: 'Etapa 3 - Beatriz Pedro',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/etp3-bia.png',
      linkUrl: 'https://youtu.be/gSkR6ZjnTps?si=j1sFnIKYfbDqQl7X'
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





