export type CompanyStatus = {
  today: string;
  totalProducts: number;
  availableProducts: number;
  nonAvailableProducts: number;
};

export type Company = {
  name: string;
  status: CompanyStatus;
};
