import { LucideAngularModule, Settings } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() isLoading = false;

  options = [
    {
      label: 'Include numbers',
      helper: 'Adds digits from 0 to 9',
      model: 'includeNumbers',
    },
    {
      label: 'Include uppercase letters',
      helper: 'Adds letters from A to Z',
      model: 'includeUppercase',
    },
    {
      label: 'Include symbols',
      helper: 'Adds special characters like ! @ # $ %',
      model: 'includeSymbols',
    },
    {
      label: 'Exclude ambiguous characters',
      helper: 'Avoids characters like { } [ ] / \\',
      model: 'excludeAmbiguous',
    },
  ];

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
