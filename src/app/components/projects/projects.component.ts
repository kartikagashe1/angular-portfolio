import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PROJECTS, Project } from '../../data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, MatCardModule,NgIf],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}

