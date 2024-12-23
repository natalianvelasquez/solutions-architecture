import { Component, OnInit } from '@angular/core';
import { MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ContactService } from '../services/contact.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-contacts',
  standalone: true,
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.css',
  imports: [MatSort, MatTable, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatFormFieldModule, MatInputModule, MatTableModule]
})
export class ListContactsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname','email', 'createdate', 'lastmodifieddate'];
  dataSource = new MatTableDataSource<any>();
  totalResults = 0;

  constructor(private contactService: ContactService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe((response) => {
        const contacts = response.results.map((item: any) => ({
          id: item.properties.hs_object_id,
          firstname: item.properties.firstname,
          lastname: item.properties.lastname,
          email: item.properties.email,
          createdate: item.properties.createdate,
          lastmodifieddate: item.properties.lastmodifieddate,
        }));
        this.dataSource.data = contacts;
        this.totalResults = response.total;
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
}
