import { Component } from '@angular/core';
import { LucideAngularModule, Settings } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-options',
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './password-options.html',
  styleUrl: './password-options.css',
})
export class PasswordOptions {
  protected readonly Settings = Settings;
  passwordLength = 16;
}
