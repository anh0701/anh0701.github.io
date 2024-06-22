import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-buttons',
  templateUrl: './skill-buttons.component.html',
  styleUrls: ['./skill-buttons.component.css']
})
export class SkillButtonsComponent {
  skills = [
    { name: 'Git', icon: 'assets/images/Git.svg', link: 'https://git-scm.com/' },
    { name: 'Docker', icon: 'assets/images/Docker.svg', link: 'https://www.docker.com/' },
    { name: 'MySQL', icon: 'assets/images/MySQL-Light.svg', link: 'https://www.mysql.com/' },
    { name: 'Bootstrap', icon: 'assets/images/Bootstrap.svg', link: 'https://getbootstrap.com/' },
    { name: 'Javascript', icon: 'assets/images/JavaScript.svg', link: 'https://www.javascript.com/' },
    { name: 'TypeScript', icon: 'assets/images/TypeScript.svg', link: 'https://www.typescriptlang.org/' },
    { name: 'Angular', icon: 'assets/images/Angular.svg', link: 'https://angular.dev/' },
    { name: 'Dart', icon: 'assets/images/Dart.svg', link: 'https://dart.dev/' },
    { name: 'Flutter', icon: 'assets/images/Flutter.svg', link: 'https://flutter.dev/' },
    { name: 'PHP', icon: 'assets/images/PHP.svg', link: 'https://www.php.net/' },
    { name: 'Laravel', icon: 'assets/images/Laravel.svg', link: 'https://laravel.com/' },
  ];
}
