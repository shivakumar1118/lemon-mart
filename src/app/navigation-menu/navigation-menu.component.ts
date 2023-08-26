import { Component } from '@angular/core'

@Component({
  selector: 'app-navigation-menu',
  styles: [
    `
      .active-link {
        font-weight: bold;
        border-left: 3px solid green;
      }
    `,
    `
      .mat-mdc-subheader {
        font-weight: bold;
      }
    `,
  ],
  template: `
    <mat-nav-list>
      <h3 mat-subheader>Manager</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/manager/users">
        Users
      </a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/manager/receipts">
        Receipts
      </a>
      <h3 mat-subheader>Inventory</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/stock-entry">
        Stock Entry
      </a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/products">
        Products
      </a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/categories">
        Categories
      </a>
      <h3 mat-subheader>Clerk</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/pos">POS</a>
    </mat-nav-list>
  `,
})
export class NavigationMenuComponent {}
