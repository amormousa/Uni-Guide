import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { University } from '../colleges/entities/university.entity';

@Injectable()
export class RecommendationService {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>,
  ) {}

  async generateRecommendations(
    scores: {
      engineering_tech: number;
      medical_science: number;
      business_economics: number;
      arts_humanities: number;
    },
    favorites: string[] = [],
  ) {
    // Fetch all universities with colleges and specializations
    const universities = await this.universityRepository.find({
      relations: ['colleges', 'colleges.specializations'],
    });

    // Find the user's top interest area
    const sortedInterests = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const primaryInterest = sortedInterests[0][0]; // e.g. 'engineering_tech'

    const recommendedList = universities.map((uni) => {
      // Calculate matching factors
      let matchScore = 0;
      let matchesPrimary = false;

      // Scan colleges to see if they match the user's score profile
      uni.colleges?.forEach((college) => {
        const cName = (college.name || '').toLowerCase();

        // 1. Engineering / Tech
        if (primaryInterest === 'engineering_tech') {
          if (cName.includes('engineer') || cName.includes('comput') || cName.includes('artificial') || cName.includes('software') || cName.includes('technology') || cName.includes('information')) {
            matchScore += 25;
            matchesPrimary = true;
          }
        }
        // 2. Medical / Science
        else if (primaryInterest === 'medical_science') {
          if (cName.includes('medic') || cName.includes('pharm') || cName.includes('dent') || cName.includes('therap') || cName.includes('nurs') || cName.includes('science')) {
            matchScore += 25;
            matchesPrimary = true;
          }
        }
        // 3. Business / Economics
        else if (primaryInterest === 'business_economics') {
          if (cName.includes('business') || cName.includes('econom') || cName.includes('manag') || cName.includes('commerce') || cName.includes('financ')) {
            matchScore += 25;
            matchesPrimary = true;
          }
        }
        // 4. Arts / Humanities
        else if (primaryInterest === 'arts_humanities') {
          if (cName.includes('art') || cName.includes('design') || cName.includes('lang') || cName.includes('commun') || cName.includes('law') || cName.includes('humanities') || cName.includes('liter')) {
            matchScore += 25;
            matchesPrimary = true;
          }
        }

        // Secondary matching for other dimensions
        if (scores.engineering_tech > 15 && (cName.includes('engineer') || cName.includes('comput') || cName.includes('techno'))) {
          matchScore += 10;
        }
        if (scores.medical_science > 15 && (cName.includes('medic') || cName.includes('pharm') || cName.includes('dent'))) {
          matchScore += 10;
        }
        if (scores.business_economics > 15 && (cName.includes('business') || cName.includes('econom') || cName.includes('manag'))) {
          matchScore += 10;
        }
        if (scores.arts_humanities > 15 && (cName.includes('art') || cName.includes('design') || cName.includes('lang'))) {
          matchScore += 10;
        }
      });

      // Map base match percentage between 65% and 94% based on raw matchScore
      let matchPercentage = 65 + Math.min(Math.round(matchScore / 2), 29);

      // Boost if the user has favorited/interacted with this university
      const isFavorited = favorites.includes(uni.id);
      if (isFavorited) {
        matchPercentage = Math.min(matchPercentage + 5, 99);
      }

      // Generate localized explanation based on interests and favorites
      let explanation = '';
      if (isFavorited) {
        explanation = `Highly recommended because of your saved preference for ${uni.name} and its excellent alignment with your academic strengths.`;
      } else {
        switch (primaryInterest) {
          case 'engineering_tech':
            explanation = matchesPrimary 
              ? `Recommended for your strong aptitude in Technology & Problem Solving. Offers premium programs in Computers and Engineering.`
              : `Recommended as a solid general option, with tech resources that support interdisciplinary digital learning.`;
            break;
          case 'medical_science':
            explanation = matchesPrimary
              ? `Recommended for your interest in Healthcare & Biology. Features highly regarded clinical faculties and lab facilities.`
              : `Recommended as a general option, providing strong scientific education fundamentals.`;
            break;
          case 'business_economics':
            explanation = matchesPrimary
              ? `Recommended for your focus on Leadership & Business Administration. Features modern entrepreneurship hubs and economics courses.`
              : `Recommended for its business networking opportunities and support for innovation.`;
            break;
          case 'arts_humanities':
            explanation = matchesPrimary
              ? `Recommended for your creative and communication skills. Provides exceptional creative design and language faculties.`
              : `Recommended for its strong cultural integration and humanities foundations.`;
            break;
        }
      }

      return {
        id: uni.id,
        name: uni.name,
        logo: uni.logo,
        type: uni.type,
        matchPercentage,
        explanation,
        colleges: uni.colleges?.map(c => ({ name: c.name })) || [],
      };
    });

    // Sort by match percentage descending and return top 10
    return recommendedList.sort((a, b) => b.matchPercentage - a.matchPercentage).slice(0, 10);
  }
}
