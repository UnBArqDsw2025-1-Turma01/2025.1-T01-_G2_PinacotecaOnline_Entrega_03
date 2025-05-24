import { CommonUserFactory, ArtistFactory, AdminFactory } from './userFactory';
import { PaintingFactory, SculptureFactory } from './artworkFactory';

// Função auxiliar para executar operações e capturar saída ou erro
function executeOperation(operation: () => void, separator: string = "----------------------"): void {
  try {
    operation();
    console.log(separator);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Erro: ${error.message}`);
    } else {
      console.error(`Erro desconhecido: ${error}`);
    }
    console.log(separator);
  }
}

// Bloco principal com um único try/catch
try {
  // 1. Usuário comum (não publica obra)
  executeOperation(() => {
    const commonUserFactory = new CommonUserFactory();
    commonUserFactory.registerUser("João", "joao@example.com", "123456");
  }, "----------------------");

  // 2. Artista Maria publica uma pintura
  executeOperation(() => {
    const artistFactory = new ArtistFactory();
    artistFactory.registerUser("Maria", "maria@example.com", "123456", "Descrição de Maria");
    const paintingFactory = new PaintingFactory();
    paintingFactory.publishArtwork(
      "Noite Estrelada",
      "Óleo sobre tela",
      "Pintura clássica",
      "imagem.jpg"
    );
  }, "-----------------------------");

  // 3. Administrador e erro de e-mail inválido
  executeOperation(() => {
    const adminFactory = new AdminFactory();
    adminFactory.registerUser("Admin", "admin@example.com", "admin123");
    const invalidUserFactory = new CommonUserFactory();
    invalidUserFactory.registerUser("Teste", "email_invalido", "123456");
  }, "-----------------------------");

  // 4. Artista João publica uma escultura
  executeOperation(() => {
    const anotherArtistFactory = new ArtistFactory();
    anotherArtistFactory.registerUser("João", "joao2@example.com", "123456", "Descrição de João");
    const sculptureFactory = new SculptureFactory();
    sculptureFactory.publishArtwork(
      "O Pensador",
      "Bronze",
      "Escultura icônica",
      "escultura.png"
    );
  }, "-----------------------------");
} catch (error: unknown) {
  // Este catch é apenas uma salvaguarda, não deve ser alcançado
  if (error instanceof Error) {
    console.error(`Erro inesperado: ${error.message}`);
  } else {
    console.error(`Erro desconhecido inesperado: ${error}`);
  }
}