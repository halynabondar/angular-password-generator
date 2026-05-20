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
}
