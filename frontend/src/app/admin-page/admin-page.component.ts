import { Component, OnInit } from '@angular/core';
import { AdminService, User } from '../admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  users: User[] = []; // Tableau des utilisateurs
  currentPage: number = 1; // Page actuelle
  totalUsers: number = 0; // Total des utilisateurs
  perPage: number = 10; // Nombre d'éléments par page

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Charger les utilisateurs pour la page courante
  loadUsers(page: number = 1): void {
    this.adminService.getUsers(page).subscribe((response) => {
      this.users = response.data;
      this.currentPage = response.current_page;
      this.totalUsers = response.total;
      this.perPage = response.per_page;
    });
  }
}
