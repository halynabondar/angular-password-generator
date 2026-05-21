import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Copy, LucideAngularModule, RefreshCw } from 'lucide-angular';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-password-display',
  imports: [LucideAngularModule, MatSnackBarModule],
  templateUrl: './password-display.html',
  styleUrl: './password-display.css',
})
export class PasswordDisplay {
  protected readonly RefreshCw = RefreshCw;
  protected readonly Copy = Copy;

  @Input() password = '';
  @Output() refresh = new EventEmitter<void>();

  onRefresh() {
    this.refresh.emit();
  }

  constructor(private snackBar: MatSnackBar) {}

  copyPassword() {
    if (!this.password) {
      return;
    }
    navigator.clipboard.writeText(this.password);

    this.snackBar.open('Password copied!', 'Close', {
      duration: 3000,
    });
  }
}
