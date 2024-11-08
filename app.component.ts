import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaxInvoiceComponent } from "./tax-invoice/tax-invoice.component";

import { LatestComponent } from "./latest/latest.component";
import { FormComponent } from "./form/form.component";
import { TryComponent } from "./try/try.component";
import { TrynewComponent } from "./trynew/trynew.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaxInvoiceComponent, LatestComponent, FormComponent, TryComponent, TrynewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Invoice';
}
