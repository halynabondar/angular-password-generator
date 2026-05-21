import { ChangeDetectorRef, Component } from '@angular/core';
import { LucideAngularModule, ShieldCheck } from 'lucide-angular';
import { Header } from '../header/header';
import { PasswordOptions } from '../password-options/password-options';
import { PasswordDisplay } from '../password-display/password-display';
import { PasswordOptionsModel } from '../../models/password-options.model';
import { Password } from '../../services/password';

@Component({
  selector: 'app-password-generator',
  imports: [LucideAngularModule, Header, PasswordOptions, PasswordDisplay],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGenerator {
  protected readonly ShieldCheck = ShieldCheck;

  password = '';
  lastOptions: PasswordOptionsModel | null = null;
  isLoading = false;

  constructor(
    private passwordService: Password,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  handleGenerate(options: PasswordOptionsModel) {
    this.lastOptions = options;
    this.isLoading = true;

    this.passwordService.generatePasswordFromApi(options.length).subscribe({
      next: (response: any) => {
        const apiPassword = response.random_password;

        const filteredPassword =
          this.passwordService.filterPassword(
            apiPassword,
            options
          );

        this.updatePassword(filteredPassword);
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
      },
      error: () => {
        this.updatePassword(this.passwordService.generatePassword(options));
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
      },
    });
  }

  handleRefresh() {
    if (!this.lastOptions) {
      return;
    }
    this.updatePassword(this.passwordService.generatePassword(this.lastOptions));
  }

  private updatePassword(password: string) {
    this.password = password;
    this.changeDetectorRef.detectChanges();
  }
}
