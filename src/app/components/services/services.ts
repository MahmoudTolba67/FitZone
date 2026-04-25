import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})

export class Services {
  services = [
    {
      title: 'Personal Training',
      description: 'تدريب شخصي مكثف مع أفضل المدربين للوصول لهدفك في أسرع وقت ممكن.',
      icon: 'bi-person-arms-up',
      image: 'service1.jpeg' 
    },
    {
      title: 'Weight Loss Programs',
      description: 'خطط غذائية وتمارين مخصصة لمساعدتك على حرق الدهون وبناء العضلات.',
      icon: 'bi-fire',
      image: 'service2.jpeg' 
    },
    {
      title: 'Group Classes',
      description: 'انضم لمجموعاتنا الحماسية في حصص اليوجا، الكروس فت، والزومبا.',
      icon: 'bi-people',
      image: 'service3.jpeg' 
    },
    {
      title: 'Nutrition Plans',
      description: 'نظام غذائي متكامل مصمم خصيصاً لاحتياجات جسمك ونمط حياتك.',
      icon: 'bi-apple',
      image: 'home3.jpeg' 
    }
  ];
}
