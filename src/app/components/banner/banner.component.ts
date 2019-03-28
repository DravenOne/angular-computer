import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {
  @Input() ads:AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost:AdDirective;
  interval:any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log(this.ads);
    this.loadComponent();
    this.getAds();
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }

  loadComponent(){
    this.currentAdIndex=(this.currentAdIndex+1)%this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory=this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // 通常，Angular 编译器会为模板中所引用的每个组件都生成一个 ComponentFactory 类。
    // 但是，对于动态加载的组件，模板中不会出现对它们的选择器的引用。
    // 要想确保编译器照常生成工厂类，就要把这些动态加载的组件添加到 NgModule 的 entryComponents 数组中：
    let viewContainerRef = this.adHost.viewContainer;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }
  getAds(){
    this.interval = setInterval(()=>{
      this.loadComponent();
    },2000);
  }

}
