import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { BlogService } from '../../shared/blog.service';
import { ApiService } from '../../shared/api.service';
import { Product } from '../../product';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ImageModule,CarouselModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
blog!:any;
displayedData: any[] = [];
displayed: any[] = [];
carausal: any[] = [];
constructor(private blogservice:BlogService,private api:ApiService){}
  ngOnInit(): void {
    
    this.blogData();
    this.api.exclusive.next(true);  
    
  }

blogData(){
  return this.blogservice.getdatas().subscribe((res:any)=>{
    this.blog=res;
    this.displayedData = this.blog.slice(60, 70);
    this.displayed = this.blog.slice(27, 38);
    this.carausal = this.blog.slice(40, 50);


    console.log('hello',res);
  })
  
}

}
