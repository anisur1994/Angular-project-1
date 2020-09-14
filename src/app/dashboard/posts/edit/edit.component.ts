import { Component, OnInit } from '@angular/core';
import { BooksService } from "../../../services/books.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public dataBooks = null;
  booksCate;

  constructor(
    private _bookServices: BooksService,
    ) { }

  ngOnInit() {

    this._bookServices.getBcate()
      .subscribe(
        data => this.booksCate = data
      )

    this._bookServices.getData
    .subscribe(
      data => this.dataBooks = data
    )
  }

  userForm = new FormGroup({
    bId: new FormControl('', Validators.required),
    bname: new FormControl('', Validators.required),
    aname: new FormControl('', Validators.required),
    bcate: new FormControl('', Validators.required),
    bIsbn: new FormControl('', Validators.required),
    bEdition: new FormControl('', Validators.required),
    bPrice: new FormControl('', Validators.required),
    bDescription: new FormControl('', Validators.required) 

  })

  onUpdate(){
    this._bookServices.updBooks(this.userForm.value)
      .subscribe(
        data => console.log(data)
      )
  }
}
