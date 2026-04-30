import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface University {
  id: number;
  name: string;
  image: string;
  description: string;
  departments: string[];
  location: string;
  rating: number;
  website: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-college-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './college-explorer.component.html',
  styleUrls: ['./college-explorer.component.scss']
})
export class CollegeExplorerComponent implements OnInit {
  universities: University[] = [
    {
      id: 1,
      name: 'NUST University',
      image: 'https://images.unsplash.com/photo-1541339907198-e08759df9a13?auto=format&fit=crop&w=800&q=80',
      description: 'The National University of Sciences & Technology (NUST) is a multi-campus public research university with its main campus in Islamabad. It is known for its excellence in engineering, technology, and sciences.',
      departments: ['Software Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Business Management', 'Applied Biosciences'],
      location: 'Islamabad',
      rating: 4.9,
      website: 'https://nust.edu.pk',
      email: 'admissions@nust.edu.pk',
      phone: '+92 51 9085 0000'
    },
    {
      id: 2,
      name: 'LUMS University',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
      description: 'Lahore University of Management Sciences (LUMS) is one of the top private research universities in Pakistan, offering programs in business, humanities, and sciences.',
      departments: ['Economics', 'Computer Science', 'Law', 'Business Administration', 'Social Sciences'],
      location: 'Lahore',
      rating: 4.8,
      website: 'https://lums.edu.pk',
      email: 'admissions@lums.edu.pk',
      phone: '+92 42 3560 8000'
    },
    {
      id: 3,
      name: 'FAST-NUCES',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
      description: 'FAST National University of Computer and Emerging Sciences is a premier university of Pakistan known for the quality of its IT and computing programs.',
      departments: ['Computer Science', 'Cyber Security', 'Data Science', 'Software Engineering', 'Artificial Intelligence'],
      location: 'Karachi',
      rating: 4.8,
      website: 'https://nu.edu.pk',
      email: 'info@nu.edu.pk',
      phone: '+92 21 111 128 128'
    },
    {
      id: 4,
      name: 'GIKI Institute',
      image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80',
      description: 'Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) is one of the most prestigious engineering institutes in Pakistan.',
      departments: ['Materials Engineering', 'Computer Engineering', 'Engineering Sciences', 'Management Sciences', 'Electrical Engineering'],
      location: 'Swabi',
      rating: 4.7,
      website: 'https://giki.edu.pk',
      email: 'admissions@giki.edu.pk',
      phone: '+92 938 271858'
    },
    {
      id: 5,
      name: 'UET Lahore',
      image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80',
      description: 'University of Engineering and Technology (UET) Lahore is a state-owned university located in Lahore, Punjab. It is one of the oldest and most prestigious engineering universities in Pakistan.',
      departments: ['Civil Engineering', 'Chemical Engineering', 'Petroleum Engineering', 'Architecture', 'City and Regional Planning'],
      location: 'Lahore',
      rating: 4.6,
      website: 'https://uet.edu.pk',
      email: 'admissions@uet.edu.pk',
      phone: '+92 42 99029216'
    },
    {
      id: 6,
      name: 'COMSATS University',
      image: 'https://images.unsplash.com/photo-1498243639351-a18274737975?auto=format&fit=crop&w=800&q=80',
      description: 'COMSATS University Islamabad is a public research university in Pakistan. It is a multi-campus university which has its main campus in Islamabad.',
      departments: ['Project Management', 'Computer Science', 'Mathematics', 'Bioinformatics', 'Physics'],
      location: 'Islamabad',
      rating: 4.5,
      website: 'https://comsats.edu.pk',
      email: 'admissions@comsats.edu.pk',
      phone: '+92 51 9247000'
    },
    {
      id: 7,
      name: 'Punjab University',
      image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80',
      description: 'The University of the Punjab is a public research university located in Lahore. It is the oldest and largest public sector university in Pakistan.',
      departments: ['English Literature', 'Political Science', 'Communication Studies', 'Zoology', 'Sociology'],
      location: 'Lahore',
      rating: 4.4,
      website: 'https://pu.edu.pk',
      email: 'vc@pu.edu.pk',
      phone: '+92 42 99231102'
    }
  ];

  selectedUniversity: University | null = null;
  searchTerm: string = '';

  get filteredUniversities() {
    return this.universities.filter(uni => 
      uni.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      uni.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit() {
    // Select first university by default
    if (this.universities.length > 0) {
      this.selectedUniversity = this.universities[0];
    }
  }

  selectUniversity(uni: University) {
    this.selectedUniversity = uni;
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value;
  }
}
