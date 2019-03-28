import { Component, OnInit,Input,OnChanges,SimpleChange } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { states,Address,Hero} from '../../domain/data.model';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit,OnChanges {

  heroForm:FormGroup;
  states = states;
  nameChangeLog:string[]=[];
  @Input() hero:Hero;

  constructor(private fb: FormBuilder,private heroService:HeroService) {
      this.createForm();
   }
   createForm(){
     this.heroForm=this.fb.group({
       name:['',Validators.required],
      //  address:this.fb.group({
      //   street:'',
      //   city: '',
      //   state: '',
      //   zip: '',
      //  }),
      secretLairs:this.fb.array([]),
      // address:this.fb.group(new Address),
       power: '',
       sidekick: ''
     })
   }
  ngOnInit() {
    this.logNameChange();
  }
  logNameChange(){
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(value=>{
      this.nameChangeLog.push(value)});
  }
  onSubmit(){
    console.log(this.heroForm.value);
    this.hero=this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe();
    this.rebuildForm()
  }
  prepareSaveHero():Hero{
      const formModel = this.heroForm.value;

      const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
        (address:Address)=>Object.assign({},address)
      )
      const saveHero: Hero = {
        id: this.hero.id,
        name: formModel.name as string,
        // addresses: formModel.secretLairs // <-- bad!
        addresses: secretLairsDeepCopy
      };
      return saveHero;
  }
  // ngOnChanges(changes: {[propKey: string]: SimpleChange}){
  //     for(let propName in changes){
  //       let changedProp = changes[propName];
  //       let to = JSON.stringify(changedProp.currentValue);
  //       console.log(changedProp);
  //       if (changedProp.firstChange) {
  //         console.log(`Initial value of ${propName} set to ${to}`);
  //       } else {
  //         let from = JSON.stringify(changedProp.previousValue);
  //         console.log(`${propName} changed from ${from} to ${to}`);
  //       }
  //     }
  // }
  ngOnChanges(){
    this.rebuildForm();
  }
  setAddresses(addresses:Address[]){
    const addressFGs=addresses.map(address=>this.fb.group(address));
    const addressFormArray =this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }
  rebuildForm(){
    this.heroForm.reset({
      name:this.hero.name,
    });
    this.setAddresses(this.hero.addresses);
  }
  get secretLairs(): FormArray{
    return this.heroForm.get('secretLairs') as FormArray;
  }
  addLair(){
    this.secretLairs.push(this.fb.group(new Address()));
  }
  removeLair(){
  }
}
