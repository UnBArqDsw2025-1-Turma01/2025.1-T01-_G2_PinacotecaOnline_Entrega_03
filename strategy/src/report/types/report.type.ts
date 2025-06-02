export type ReportType = 'spam' | 'copyright' | 'inappropriate';

export type Report = {
  type: ReportType;
  content: string;
};
