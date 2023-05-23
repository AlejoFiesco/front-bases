import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-viaticos',
  templateUrl: './viaticos.component.html',
  styleUrls: ['./viaticos.component.css']
})
export class ViaticosComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }
 
  createPDF(){
 
    const pdfDefinition: any = {
      content: [
        {
          text: 'Hola mundo',
        }
      ]
    }
 
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
 
  }
}
