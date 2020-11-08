import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '../authentication/authen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  images: any = [
    "https://img-ha.mthcdn.com/qn9CC1uevvegEiz8--PKoGY-DkY=/mthai.com/app/uploads/2019/01/fdhfh.jpg",
    "https://medthai.com/wp-content/uploads/2014/05/%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B8%A1%E0%B8%B0%E0%B8%A5%E0%B8%B4.jpg",
    "https://lh4.googleusercontent.com/-BpEon60R4X8/VQYeWHBj7QI/AAAAAAAAFng/Xb9JoThIxJo/w615-h463-no/Thai%2BIsan%2BPhaka%2BMali%2B54.jpg",
    "https://www.kasetkaoklai.com/home/wp-content/uploads/2017/03/%E0%B8%A1%E0%B8%B0%E0%B8%A5%E0%B8%B4%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B8%95%E0%B8%B9%E0%B8%A1.jpg"
  ]
  constructor(private authService: AuthenService, private router: Router) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  ngOnInit() {
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
