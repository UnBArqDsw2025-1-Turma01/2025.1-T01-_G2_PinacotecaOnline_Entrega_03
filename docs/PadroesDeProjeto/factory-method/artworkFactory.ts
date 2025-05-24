// Interface do Produto (Obra de Arte)
interface Artwork {
    publish(): void;
    getType(): string;
  }
  
  // Produtos Concretos (Obras de Arte)
  class Painting implements Artwork {
    constructor(
      private title: string,
      private technique: string,
      private description: string,
      private image: string
    ) {}
  
    publish(): void {
      console.log(`Pintura publicada: ${this.title} (Técnica: ${this.technique})`);
    }
  
    getType(): string {
      return "Painting";
    }
  }
  
  class Sculpture implements Artwork {
    constructor(
      private title: string,
      private material: string,
      private description: string,
      private image: string
    ) {}
  
    publish(): void {
      console.log(`Escultura publicada: ${this.title} (Material: ${this.material})`);
    }
  
    getType(): string {
      return "Sculpture";
    }
  }
  
  // Interface Creator (Obra de Arte)
  export abstract class ArtworkFactory {
    abstract createArtwork(
      title: string,
      techniqueOrMaterial: string,
      description: string,
      image: string
    ): Artwork;
  
    publishArtwork(
      title: string,
      techniqueOrMaterial: string,
      description: string,
      image: string
    ): void {
      const artwork = this.createArtwork(title, techniqueOrMaterial, description, image);
      // Validação comum
      if (this.isValidImage(image) && this.isValidTitle(title)) {
        artwork.publish();
      } else {
        throw new Error("Imagem ou título inválidos.");
      }
    }
  
    private isValidImage(image: string): boolean {
      // Simulação de validação de imagem
      return image.endsWith(".jpg") || image.endsWith(".png");
    }
  
    private isValidTitle(title: string): boolean {
      // Título deve ter pelo menos 3 caracteres
      return title.length >= 3;
    }
  }
  
  // Concrete Creators (Obra de Arte)
  export class PaintingFactory extends ArtworkFactory {
    createArtwork(
      title: string,
      technique: string,
      description: string,
      image: string
    ): Artwork {
      return new Painting(title, technique, description, image);
    }
  }
  
  export class SculptureFactory extends ArtworkFactory {
    createArtwork(
      title: string,
      material: string,
      description: string,
      image: string
    ): Artwork {
      return new Sculpture(title, material, description, image);
    }
  }