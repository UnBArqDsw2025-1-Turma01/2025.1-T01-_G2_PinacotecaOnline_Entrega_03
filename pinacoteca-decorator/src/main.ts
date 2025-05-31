import { BasicArt } from './ClasseConcreta/basicArt';
import { LikeDecorator } from './ClasseConcretaDecoradoras/like.decorator';
import { CommentDecorator } from './ClasseConcretaDecoradoras/comment.decorator';
import { ViewDecorator } from './ClasseConcretaDecoradoras/view.decorator';

const exemplo = new BasicArt('Título', 'Autor(a)', 'Técnica', 'Descrição da obra');

const decoradorExemplo = new ViewDecorator(
  new CommentDecorator(
    new LikeDecorator(exemplo, 999),
    99
  ),
  9
);

const outroDecoradorPratico = new BasicArt('Os Dois Modelos Favoritos', 'Charles van den Eycken', 'Óleo sobre tela', 'A pintura “Two Favourite Models” apresenta um gato e uma tartaruga em um ambiente doméstico tranquilo, capturados com o cuidado característico de Charles van den Eycken. Conhecido por suas representações detalhadas de interiores e animais de estimação, o artista belga cria aqui uma cena incomum e curiosa: a interação silenciosa entre dois animais de naturezas muito distintas. O gato, atento, observa a tartaruga com uma expressão de leve curiosidade. A tartaruga, em contraste, mantém seu passo lento e constante, compondo um jogo visual entre movimento e espera. O espaço ao redor, com móveis e tecidos ricamente trabalhados, reforça o caráter íntimo e burguês da cena. A escolha dos “dois modelos favoritos” revela não só um olhar afetuoso sobre os animais, mas também uma sensibilidade para os pequenos momentos da vida cotidiana. A obra convida o observador a uma contemplação calma, quase lúdica, das relações entre seres vivos no interior doméstico europeu do final do século XIX.');

const decoradorPratico = new ViewDecorator(
  new CommentDecorator(
    new LikeDecorator(outroDecoradorPratico, 1000),
    100
  ),
  10
);

console.log(decoradorExemplo.showDetails());
console.log('----------------------------------------');
console.log(decoradorPratico.showDetails());