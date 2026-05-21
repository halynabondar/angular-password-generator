import { Injectable } from '@angular/core';
import { PasswordOptionsModel } from '../models/password-options.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Password {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  generatePassword(options: PasswordOptionsModel) {
    const chars = this.getAllowedCharacters(options);
    let generatedPassword = '';

    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    return generatedPassword;
  }

  generatePasswordFromApi(length: number) {
    const apiUrl = `https://api.api-ninjas.com/v1/passwordgenerator?length=${length}`;

    return this.http.get<{ random_password: string }>(apiUrl, {
      headers: {
        'X-Api-Key': this.apiKey,
      },
    });
  }

  filterPassword(apiPassword: string, options: PasswordOptionsModel) {
    const allowedChars = this.getAllowedCharacters(options);

    const isValid = apiPassword
      .split('')
      .every((char) => allowedChars.includes(char));

    if (isValid) {
      return apiPassword;
    }

    return this.generatePassword(options);
  }

  private getAllowedCharacters(options: PasswordOptionsModel) {
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

    return chars;
  }
}
