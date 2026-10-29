import React from 'react';
import { ArrowUpRight } from './icons/ArrowUpRight';

interface CaseStudy {
  id: string;
  num: string;
  client: string;
  category: string;
  service: string;
  metric: string;
  showcaseImg: string;
  link: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bajaj-capital',
    num: '01',
    client: 'BAJAJ CAPITAL',
    category: 'FINANCIAL SERVICES',
    service: 'Performance Marketing & Lead Generation',
    metric: '3,000 leads/month',
    showcaseImg: '/assets/case-showcase-bajaj.png',
    link: '#contact'
  },
  {
    id: 'organic-india',
    num: '02',
    client: 'ORGANIC INDIA',
    category: 'E-COMMERCE',
    service: 'Digital Strategy & Online Sales',
    metric: '2,000 sales/month',
    showcaseImg: '/assets/case-showcase-organic-india.png',
    link: '#contact'
  },
  {
    id: 'exide-care',
    num: '03',
    client: 'EXIDE CARE',
    category: 'POWER BACKUP',
    service: 'Landing Page CRO & Lead Generation',
    metric: '10,000 leads/month',
    showcaseImg: '/assets/case-showcase-exide.png',
    link: '#contact'
  },
  {
    id: 'mtr-foods',
    num: '04',
    client: 'MTR FOODS',
    category: 'FOOD & FMCG',
    service: 'Performance Marketing & E-Commerce Sales',
    metric: '8X ROAS',
    showcaseImg: '/assets/case-showcase-mtr.png',
    link: '#contact'
  }
];

export const FeaturedWork: React.FC = () => {
  return (
    <section className="work-section" id="work">
      <div className="container">
        <div className="section-intro services-intro work-intro">
          <div className="section-intro-left">
            <div className="eyebrow">FEATURED WORK</div>
            <h2>Real Brands Real Results</h2>
            <p className="section-subheading">
              Every business has a different challenge. Our work starts by understanding it, finding the right approach and focusing on the outcome that matters.
            </p>
          </div>
        </div>
 
        <div className="work-grid">
          {CASE_STUDIES.map((study) => (
            <article className="work-card case-study-card" key={study.id}>
              <div className="case-showcase-window">
                <img
                  src={study.showcaseImg}
                  alt={`${study.client} - ${study.category} Case Study`}
                  className={`case-showcase-img showcase-${study.id}`}
                  loading="lazy"
                />
              </div>
              <div className="case-content">
                <div className="case-meta-header">
                  <span className="case-num">{study.num}</span>
                  <span className="case-v-divider" aria-hidden="true"></span>
                  <div className="case-title-group">
                    <h3 className="case-title">{study.client}</h3>
                    <p className="case-service">{study.service}</p>
                  </div>
                </div>
                <span className="case-divider" aria-hidden="true"></span>
                <div className="case-metric">{study.metric}</div>
              </div>
              <a href={study.link} className="case-action-btn">
                <span>Explore The Project</span>
                <ArrowUpRight size={14} strokeWidth={2.4} className="case-btn-arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
