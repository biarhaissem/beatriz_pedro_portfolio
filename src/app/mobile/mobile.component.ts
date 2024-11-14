import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
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

  protItems = [
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

  expoItems = [
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

  apresItems = [
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
      linkUrl: 'https://www.figma.com/design/0eL0Hvjm1IuHQv6J3fWUzF/Etapa-1?node-id=0-1&t=JBdBPo7KbYG3Kase-1'
    },
    {
      title: 'Etapa 1 - Beatriz Pedro',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/etp1-bia.png',
      linkUrl: 'https://www.figma.com/design/GM71wVzdXkdqYN74CuEncn/Etapa-1---Beatriz-Pedro?node-id=0-1&t=HS7xC4PdsOqHrl78-1'
    }
  ];

  pets2Items = [
    {
      title: 'Etapa 2 - Desafio',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/etp2-desafio.png',
      linkUrl: 'https://www.figma.com/design/mdoZBPbGXQqmun1Xucowo6/Etapa-2---Desafio?node-id=11-2&t=y464Y1V8KMmfLkoa-1'
    },
    {
      title: 'Etapa 2 - Beatriz Pedro',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/etp2-bia.png',
      linkUrl: 'https://www.figma.com/design/DAi3M77m5lyTUEUxLR7clh/Etapa-2?node-id=11-2&t=q35wTygWRx3vBnpB-1'
    }
  ];

  pets3Items = [
    {
      title: 'Etapa 3 - Desafio',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/etp3-desafio.png',
      linkUrl: 'https://www.figma.com/design/41ziL0zhTmTJ3vYuoOJpUO/Etapa-3---Desafio?node-id=0-1&t=y464Y1V8KMmfLkoa-1'
    },
    {
      title: 'Etapa 3 - Beatriz Pedro',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/etp3-bia.png',
      linkUrl: 'https://www.figma.com/design/bJx86jtU9jo6HD830Un4Us/Etapa-3---Beatriz-Pedro?node-id=2049-1337&t=XcUyoV0iLQcXcbRO-1'
    }
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
