import { LucideAngularModule, Settings } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-options',
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './password-options.html',
  styleUrl: './password-options.css',
})
export class PasswordOptions {
  protected readonly Settings = Settings;
  passwordLength: number = 16;

  includeNumbers = true;
  includeUppercase = true;
  includeSymbols = true;
  excludeAmbiguous  = false;

  @Output() generate = new EventEmitter();

  onGenerate() {
    this.generate.emit({
      length: this.passwordLength,
      includeNumbers: this.includeNumbers,
      includeUppercase: this.includeUppercase,
      includeSymbols: this.includeSymbols,
      excludeAmbiguous: this.excludeAmbiguous,
    });
  }
}
