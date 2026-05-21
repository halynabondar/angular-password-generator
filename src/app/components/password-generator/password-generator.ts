import { Component } from '@angular/core';
import { LucideAngularModule, ShieldCheck } from 'lucide-angular';
import { Header } from '../header/header';
import { PasswordOptions } from '../password-options/password-options';
import { PasswordDisplay } from '../password-display/password-display';
import { PasswordOptionsModel} from '../../models/password-options.model';
import { Password } from '../../services/password';

@Component({
  selector: 'app-password-generator',
  imports: [LucideAngularModule, Header, PasswordOptions, PasswordDisplay],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGenerator {
  protected readonly ShieldCheck = ShieldCheck;

  password = "";
  lastOptions: PasswordOptionsModel | null = null;

  constructor(private passwordService: Password) {}

  handleGenerate(options: PasswordOptionsModel) {

    this.lastOptions = options;

    this.password = this.passwordService.generatePassword(options);
  }

  handleRefresh() {
    if (!this.lastOptions) {
      return;
    }

    this.handleGenerate(this.lastOptions)
  }
}
