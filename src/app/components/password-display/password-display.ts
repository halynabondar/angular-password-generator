import { Component } from '@angular/core';
import { Copy, LucideAngularModule, RefreshCw } from 'lucide-angular';

@Component({
  selector: 'app-password-display',
  imports: [LucideAngularModule],
  templateUrl: './password-display.html',
  styleUrl: './password-display.css',
})
export class PasswordDisplay {
  protected readonly RefreshCw = RefreshCw;
  protected readonly Copy = Copy;
}
