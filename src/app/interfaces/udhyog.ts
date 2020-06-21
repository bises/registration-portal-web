import { CompanyAddress } from './companyAddress';
import { WorkersDetail } from './workersDetail';
import { CompanyOwner } from './companyOwner';

export interface Udhyog {
    registrationNumber: number,
    registrationDate: Date,
    companyName: string,
    legalType: string,
    companyCategory: string,
    companyType: string,
    companySubType: string,
    objective: string,
    annualProduction: number,
    electricalPowerUsage: string,
    contact: string,
    revenue: number,
    panNumber: number,
    companyAddress: CompanyAddress,
    workersDetail: WorkersDetail,
    ownersDetail: CompanyOwner[],
}