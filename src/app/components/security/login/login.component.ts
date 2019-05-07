import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [{
    key: 'userName',
    type: 'input',
    templateOptions: {
      appearance: 'outline',
      label: 'User Name',
      placeholder: 'User Name',
      required: true,
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      appearance: 'outline',
      label: 'Password',
      placeholder: 'Password',
      required: true,
      type: 'password'
    }
  },
  {
    key: 'projectType',
    type: 'select',
    templateOptions: {
      appearance: 'outline',
      label: 'Project Type',
      options: [
        { label: 'Project 1', value: 'project1' },
        { label: 'Project 2', value: 'project2' },
        { label: 'Project 3', value: 'project3' }
      ],
    },
  }];

  submit(model) {
    console.log(model);
    this.router.navigate(['../..', 'rbt'], { relativeTo: this.route })
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}