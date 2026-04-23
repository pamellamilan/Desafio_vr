const MobilidadePage = require('../support/pages/MobilidadePage');
const ContrateAgoraPage = require('../support/pages/ContrateAgoraPage');
const CarrinhoPage = require('../support/pages/CarrinhoPage');

const mobilidadePage = new MobilidadePage();
const contrateAgoraPage = new ContrateAgoraPage();
const carrinhoPage = new CarrinhoPage();

describe('Fluxo VR com Page Objects', () => {
  it('deve acessar a página Contrate Agora a partir de Mobilidade', () => {
    mobilidadePage.acessar();
    mobilidadePage.clicarEmComprarOnline();
    contrateAgoraPage.validarPagina();
  });

  it('deve selecionar Gestão de mobilidade e preencher o carrinho', () => {
    mobilidadePage.acessar();
    mobilidadePage.clicarEmComprarOnline();

    contrateAgoraPage.validarPagina();
    contrateAgoraPage.selecionarGestaoDeMobilidade();
    contrateAgoraPage.clicarEmProximo();

    carrinhoPage.validarPagina();
    carrinhoPage.adicionarQuantidadeCartoes(6);
    carrinhoPage.preencherCreditoParaTrabalhador(100);
    carrinhoPage.seguirParaCompra();
  });
});
