export class Art {
  title: string;
  image: string;
  technique: string;
  description: string;
  author: string;

  constructor(partial: Partial<Art>) {
    Object.assign(this, partial);
  }
}
