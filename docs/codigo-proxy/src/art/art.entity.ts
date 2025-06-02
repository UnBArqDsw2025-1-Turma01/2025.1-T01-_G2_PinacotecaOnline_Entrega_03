export class Art {
  id: number | null = null;
  title: string = '';
  author: string = '';
  technique: string = '';
  style: string = '';
  image: string = '';
  description: string = '';
  uploadedAt: Date = new Date();
  updatedAt: Date | null = null;

  constructor(init?: Partial<Art>) {
    Object.assign(this, init);
  }
}
