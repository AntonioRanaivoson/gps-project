import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';  // Import de Leaflet
// Définir un modèle de données pour un utilisateur
interface User {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements AfterViewInit {

  
  private map!: L.Map;  // Déclaration explicite du type pour la variable map

  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' }
  ];

  // Déclaration explicite du type des points comme tableau de tuples [latitude, longitude]
  private points: [number, number][] = [
    [37.0902, -95.7129], // Coordonnée 1 (États-Unis)
    [34.0522, -118.2437], // Coordonnée 2 (Los Angeles)
    [40.7128, -74.0060],  // Coordonnée 3 (New York)
    [41.8781, -87.6298]   // Coordonnée 4 (Chicago)
  ];

  // Initialisation de la carte
  private initMap(): void {
    this.map = L.map('map', {
      center: [37.0902, -95.7129],  // Coordonnées centrées sur les États-Unis
      zoom: 4  // Zoom plus rapproché pour bien voir les États-Unis
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    // Ajout des points jaunes
    this.points.forEach((coords) => {
      L.circleMarker(coords, {
        color: 'yellow',  // Couleur du marqueur
        radius: 8,        // Taille du marqueur
        fillOpacity: 1    // Opacité de remplissage
      }).addTo(this.map);
    });

    // Dessin de la ligne rouge reliant les points
    const polyline = L.polyline(this.points, { color: 'red', weight: 4 }).addTo(this.map);

    // Optionnel : Ajuster la vue pour inclure la ligne et tous les points
    this.map.fitBounds(polyline.getBounds());
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();  // Initialisation de la carte après que la vue soit chargée
  }
}
