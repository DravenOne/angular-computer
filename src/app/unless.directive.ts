import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private hasView:boolean=false;

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) { }
@Input() set appUnless(condition:boolean){
  if(!condition&&!this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView=true;
  }else if(condition&&this.hasView){
      this.viewContainer.clear();
      this.hasView=false;
  }
}
} 
// 旦该值的条件发生了变化，Angular 就会去设置 appUnless 属性。
// 因为不能用 appUnless 属性，所以你要为它定义一个设置器（setter）。

// 如果条件为假，并且以前尚未创建过该视图，就告诉视图容器（ViewContainer）根据模板创建一个内嵌视图。

// 如果条件为真，并且视图已经显示出来了，就会清除该容器，并销毁该视图。


// 结构型指令可以操纵 HTML 的元素布局。

// 当没有合适的容器元素时，可以使用<ng-container>对元素进行分组。

// Angular 会把星号（*）语法解开成 <ng-template>。

// 内置指令 NgIf、NgFor 和 NgSwitch 的工作原理。

// 微语法如何展开成<ng-template>。

// 写了一个自定义结构型指令 —— UnlessDirective。