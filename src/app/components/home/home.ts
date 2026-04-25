import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
features = [
    { 
      title: 'Modern Equipment', 
      desc: 'أحدث الأجهزة الرياضية العالمية لضمان أفضل نتائج وتجربة تدريب آمنة.', 
      image: 'home1.jpeg' 
    },
    { 
      title: 'Expert Trainers', 
      desc: 'مدربين معتمدين دولياً لمساعدتك في رحلتك الرياضية خطوة بخطوة.', 
      image: 'home2.jpeg' 
    },
    { 
      title: 'Healthy Diet Plan', 
      desc: 'أنظمة غذائية متكاملة مصممة خصيصاً لاحتياجات جسمك ونمط حياتك.', 
      image: 'home3.jpeg' 
    }
  ];


testimonials = [
  {
    name: 'أحمد محمد',
    role: 'لاعب كمال اجسام',
    feedback: 'تجربة رائعة جداً، ساعدتني في تغيير نمط حياتي للأفضل.',
    rating: 5 
  },
  {
    name: 'سارة محمود',
    role:'متدرب',
    feedback: 'أفضل مدربين وأفضل أجهزة، شكراً لكم!',
    rating: 4
  }
];
}
