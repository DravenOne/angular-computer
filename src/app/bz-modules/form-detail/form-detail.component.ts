import { Component, OnInit,Input,OnChanges} from '@angular/core';
import { Hero,states,Address } from '../../domain/data.model';
import { FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';
@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  heroForm:FormGroup;
  states=states;
  @Input() hero:Hero;
  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // 从路由参数中提取 id

  }
  createForm(){
    this.heroForm=this.fb.group({
      name: ['', Validators.required ],
      address:this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      }),
      power: '',
      sidekick: '',
      secretLairs:this.fb.array([this.cForm()])
    })
  }
  private cForm(){
    return this.fb.group({
      control1:'1',
      control2:'2',
      Name:'3',
      Code:'4',
      Level:'5',
      Remark:'6',
    })
  }

  ngOnChanges(){ 
    this.rebuildForm();
  }
  rebuildForm(){
    if(this.hero){
           this.heroForm.reset({
           name:this.hero.name,
           address:this.hero.addresses[0],
       })
    }

  }
     //sumbit
     onSubmit(){
      console.log(this.heroForm.value);
    }
    //Delete
    Delete(){
      console.log(this.hero.id);
    }
}
