import { Component } from '@angular/core';
import { LucideAngularModule, ShieldCheck } from 'lucide-angular';
import { Header } from '../header/header';
import { PasswordOptions } from '../password-options/password-options';
import { PasswordDisplay } from '../password-display/password-display';

@Component({
  selector: 'app-password-generator',
  imports: [LucideAngularModule, Header, PasswordOptions, PasswordDisplay],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGenerator {
  protected readonly ShieldCheck = ShieldCheck;

  password = "";
  lastOptions: any = null;

  handleGenerate(options: any) {
    this.lastOptions = options;

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
    this.password = generatedPassword;
  }

  handleRefresh() {
    if (!this.lastOptions) {
      return;
    }

    this.handleGenerate(this.lastOptions)
  }
}
