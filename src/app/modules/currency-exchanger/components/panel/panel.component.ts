import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  constructor(private router:Router){}
  navigateToDetailes(){
this.router.navigate(['/detailes'])
  }
}
