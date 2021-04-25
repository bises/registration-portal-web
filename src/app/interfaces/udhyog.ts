import { CompanyAddress } from './companyAddress';
import { WorkersDetail } from './workersDetail';
import { CompanyOwner } from './companyOwner';

export class Udhyog {
    registrationNumber: string;
    registrationDate: Date;
    companyName: string;
    legalType: string;
    companyCategory: string;
    companyType: string;
    companySubType: string;
    objective: string;
    annualProduction: number;
    electricalPowerUsage: string;
    contact: string;
    revenue: number;
    panNumber: number;
    companyAddress: CompanyAddress;
    workersDetail: WorkersDetail;
    ownersDetail: CompanyOwner[];

    public static getMappingEnglishToNepali(){
        return {
            'registrationNumber': 'btf{ g+',
            'registrationDate': 'btf{ ldlt',
            'companyName': 'pBf]usf] gfd',
            'legalType': 'pBf]usf] sfgÚgL ?k',
            'companyCategory': 'pBf]usf] k|sf/',
            'companyType': 'pBf]usf] ju{',
            'companySubType': 'pBf]usf] pkju{',
            'objective': 'p$]Zo',
            'annualProduction': 'jflif{s pTkfbg',
            'electricalPowerUsage': 'ljw"t zlQ',
            'contact': ';+Dks{ g+',
            'revenue': '/fhZj',
            'panNumber': 'kfg g+',
            'companyAddress': '&]ufgf',
            'workersDetail': 'sfdbf/ ljj/)f',
            'ownersDetail': 'pBdLsf] ljj/)f eg"{xf];\\',
        }
    }

    public static getMappingNepaliToEnglish(){
        return {
            'btf{ g+':  'registrationNumber',
            'btf{ ldlt': 'registrationDate',
            'pBf]usf] gfd': 'companyName',
            'pBf]usf] sfgÚgL ?k': 'legalType',
            'pBf]usf] k|sf/': 'companyCategory',
            'pBf]usf] ju{': 'companyType',
            'pBf]usf] pkju{': 'companySubType',
            'p$]Zo': 'objective',
            'jflif{s pTkfbg': 'annualProduction',
            'ljw"t zlQ': 'electricalPowerUsage',
            ';+Dks{ g+': 'contact',
            '/fhZj': 'revenue',
            'kfg g+': 'panNumber',
            '&]ufgf': 'companyAddress',
            'sfdbf/ ljj/)f': 'workersDetail',
            'pBdLsf] ljj/)f eg"{xf];\\': 'ownersDetail',
        }
    }
}