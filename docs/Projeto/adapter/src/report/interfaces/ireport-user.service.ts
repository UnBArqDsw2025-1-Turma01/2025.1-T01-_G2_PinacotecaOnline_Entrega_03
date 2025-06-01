export interface IReportUserService {
  getUserSummaryById(userId: number): Promise<{ name: string; email: string } | null>;
}

export const IREPORT_USER_SERVICE_TOKEN = 'IReportUserService';