import { Component } from '@angular/core';
import { Highlight } from './highlight';

@Component({
  imports: [Highlight],
  selector: 'app-services-home',
  standalone: true,
  styleUrl: './services-home.css',
  templateUrl: './services-home.html',
})
export class ServicesHome {}
