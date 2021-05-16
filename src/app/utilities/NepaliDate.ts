import { DatePipe } from '@angular/common';
export class NepaliDate {

    public static ConvertEnglishDateToNepaliShortDate(englishDatestring: Date) : string {
        const datepipe: DatePipe = new DatePipe('en-US');
        let formattedDate = datepipe.transform(englishDatestring, 'yyyy-MM-dd');
        var nepaliFormattedDate = formattedDate.split('-').join('.');
        return nepaliFormattedDate;
    }
}