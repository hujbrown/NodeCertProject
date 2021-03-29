import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactusService } from '../shared/services/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submitted: any;
  contactusForm: any;
  validated : any;

  constructor(private fb: FormBuilder, private service: ContactusService) { 
    this.contactusForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      query: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get f() : any {
    return this.contactusForm?.controls;
  }


  contactusHandler() {
    this.submitted = true;

    if(this.contactusForm?.invalid) {
      return;
    } else {
      const email = this.contactusForm.value.email;
      const query = this.contactusForm.value.query;
    
     this.service.addContactUsQuery(email, query).subscribe((res:any) => {
    //   console.log(res);
       if(res) {
        this.validated = true;
      }
     });

     
      
     
    }

  }
}
