import { Directive,ElementRef,HostListener,Input,OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  // @Input() appHighlight:string;
  @Input('appHighlight') highlightColor:string;//别名
  @Input() defaultColor:string;

  constructor(private el:ElementRef) {
      // el.nativeElement.style.backgroundColor='wheat';
   }
   @HostListener('mouseenter') onmouseenter(){
        this.highlight(this.highlightColor || this.defaultColor || 'wheat');
   }

   @HostListener('mouseleave') onmouseleave(){
     this.highlight(null);
   }

   private highlight(color:string){
     this.el.nativeElement.style.backgroundColor=color;
   }
   ngOnInit() {
  }

}


// 总结：Angular 在宿主元素 <p> 上发现了一个 appHighlight 属性。
//  然后它创建了一个 HighlightDirective 类的实例，并把所在元素的引用注入到了指令的构造函数中。
//   在构造函数中，该指令把 <p> 元素的背景设置为了黄色。