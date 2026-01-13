import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    const formData = new FormData();
    formData.append('name', this.contact.name);
    formData.append('email', this.contact.email);
    formData.append('message', this.contact.message);

    fetch('https://formspree.io/f/xldnozoe', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          alert('✅ Message sent successfully!');
          this.contact = { name: '', email: '', message: '' };
        } else {
          alert('❌ Error sending message. Please try again.');
        }
      })
      .catch(error => {
        console.error('Form submission error:', error);
        alert('❌ Network error. Please try again later.');
      });
  }
}
