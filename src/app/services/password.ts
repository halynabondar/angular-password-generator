import { Injectable } from '@angular/core';
import { PasswordOptionsModel } from '../models/password-options.model';

@Injectable({
  providedIn: 'root',
})
export class Password {

  generatePassword(options: PasswordOptionsModel) {

    let chars = 'abcdefghijklmnopqrstuvwxyz';

    if (options.includeUppercase) {
      chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (options.includeNumbers) {
      chars += '0123456789';
    }

    if (options.includeSymbols) {
      chars += '!@#$%^&*';
    }

    if (options.excludeAmbiguous) {
      chars = chars.replace(/[{}[\]()\/\\",;:<>]/g, '');
    }

    let generatedPassword = '';

    for (let i = 0; i < options.length; i++) {

      const randomIndex = Math.floor(
        Math.random() * chars.length
      );

      generatedPassword += chars[randomIndex];
    }

    return generatedPassword;
  }
}
