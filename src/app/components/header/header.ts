import { Component } from '@angular/core';
import { Shield, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly Shield = Shield;
}
