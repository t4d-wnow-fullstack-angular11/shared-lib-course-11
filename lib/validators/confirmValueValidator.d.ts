import { FormGroup } from '@angular/forms';
export declare const confirmValue: (firstControlName: string, secondControlName: string) => (formGroup: FormGroup) => {
    confirmValue: {
        firstControlName: string;
        firstControlValue: any;
        secondControlName: string;
        secondControlValue: any;
    };
} | null;
