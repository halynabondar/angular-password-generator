import { Component } from '@angular/core';
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

  password = 'X9!pL#m7Q@kR3$tZ';

  constructor(private snackBar: MatSnackBar) {}

  copyPassword() {
    navigator.clipboard.writeText(this.password);

    this.snackBar.open('Copied to clipboard', 'Close', {
      duration: 3000,
    })
  }
}
