import React from 'react';

interface ServiceBullet {
  text: string;
  link: string; // Space for future links, currently left empty
}

interface ServiceItem {
  number: string;
  image1x: string;
  image2x: string;
  imageAlt: string;
  title: string;
  description: string;
  bullets: ServiceBullet[];
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    image1x: '/assets/service-card-1.webp',
    image2x: '/assets/service-card-1@2x.webp',
    imageAlt: 'Build a Stronger Digital Presence - Laptop and mobile showcasing website and analytics',
    title: 'Build Your Digital Presence',
    description: 'Build a strong online presence that gets you noticed and brings the right customers.',
    bullets: [
      { text: 'Websites', link: '' },
      { text: 'Landing Pages', link: '' },
      { text: 'Shopify Stores', link: '' },
      { text: 'Social Media Management', link: '' },
      { text: 'Branding', link: '' },
    ],
  },
  {
    number: '02',
    image1x: '/assets/service-card-2.webp',
    image2x: '/assets/service-card-2@2x.webp',
    imageAlt: 'Creative Production for Brands that Grow - Video ads, reels and product photography studio setup',
    title: 'Create Impactful Content',
    description: 'Engaging visuals and messaging that connect with your audience and create demand.',
    bullets: [
      { text: 'Static Ads', link: '' },
      { text: 'Video Ads', link: '' },
      { text: 'Reels & Short Videos', link: '' },
      { text: 'E-commerce Photoshoots', link: '' },
      { text: 'Product Photography', link: '' },
    ],
  },
  {
    number: '03',
    image1x: '/assets/service-card-3.webp',
    image2x: '/assets/service-card-3@2x.webp',
    imageAlt: 'Target the Right Audience - Lead generation campaigns and performance marketing dashboard',
    title: 'Bring In Right Customers',
    description: 'Performance marketing to reach the right people and turn interest into enquiries and sales.',
    bullets: [
      { text: 'Meta Ads', link: '' },
      { text: 'Google Ads', link: '' },
      { text: 'Lead Generation', link: '' },
      { text: 'E-commerce Sales', link: '' },
      { text: 'Influencer Ads', link: '' },
    ],
  },
  {
    number: '04',
    image1x: '/assets/service-card-4.webp',
    image2x: '/assets/service-card-4@2x.webp',
    imageAlt: 'Improve What Works - Ad account audit metrics, ROAS growth and scaling strategy dashboard',
    title: 'Improve What Works',
    description: 'Data-driven insights and continuous optimisation to help you get better results over time.',
    bullets: [
      { text: 'Ad Account Audits', link: '' },
      { text: 'Conversion Optimisation', link: '' },
      { text: 'ROAS Improvement', link: '' },
      { text: 'Digital Expansion', link: '' },
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-intro">
          <div className="services-intro-left">
            <span className="services-eyebrow">OUR SERVICES</span>
            <h2 className="services-title">
              Four Ways We Move Your Business Forward
            </h2>
            <p className="services-subheading">
              Strategy, creative and performance, brought together to help you attract the right audience and turn opportunities into lasting growth.
            </p>
          </div>
{/* 
          <div className="services-intro-right">
            <a href="#contact" className="services-view-all-btn">
              <span>View All Services</span>
              <svg
                className="services-arrow-icon"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div> */}
        </div>

        {/* 4 Cards Grid */}
        <div className="service-grid">
          {servicesData.map((item) => (
            <div
              key={item.number}
              className={`service-card service-card-${item.number}`}
            >
              {/* Card visual banner */}
              <div className="service-visual-wrap">
                <img
                  src={item.image1x}
                  srcSet={`${item.image1x} 1x, ${item.image2x} 2x`}
                  alt={item.imageAlt}
                  className="service-card-scene-img"
                  loading="lazy"
                />
              </div>

              {/* Card content */}
              <div className="service-card-body">
                <h3 className="service-card-title">
                  {item.title}
                </h3>

                <p className="service-card-desc">
                  {item.description}
                </p>

                <ul className="service-bullets">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="service-bullet-item">
                      <a
                        href={bullet.link || '#'}
                        className="service-bullet-link"
                        onClick={(e) => {
                          if (!bullet.link || bullet.link === '#') {
                            e.preventDefault();
                          }
                        }}
                      >
                        <span className="bullet-arrow" aria-hidden="true">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </span>
                        <span className="bullet-text">{bullet.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
