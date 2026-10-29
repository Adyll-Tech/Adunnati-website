import React from 'react';

interface ServiceItem {
  number: string;
  image1x: string;
  image2x: string;
  imageAlt: string;
  title: string;
  description: string;
  bullets: string[];
  link: string;
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    image1x: '/assets/service-card-scene-1-new.png',
    image2x: '/assets/service-card-scene-1-sharp@2x.png',
    imageAlt: 'Laptop displaying analytics and website dashboard',
    title: 'Grow Your Digital Presence',
    description: 'Build a strong online presence that gets you noticed and brings the right customers.',
    bullets: [
      'Websites',
      'Landing Pages',
      'Shopify Stores',
      'Social Media Management',
      'Branding',
    ],
    link: '#contact',
  },
  {
    number: '02',
    image1x: '/assets/service-card-scene-2-new.png',
    image2x: '/assets/service-card-scene-2-sharp@2x.png',
    imageAlt: 'Framed typography art and creative palette design',
    title: 'Create Impactful Content',
    description: 'Engaging visuals and messaging that connect with your audience and create demand.',
    bullets: [
      'Static Ads',
      'Video Ads',
      'Reels & Short Videos',
      'E-commerce Photoshoots',
      'Product Photography',
    ],
    link: '#contact',
  },
  {
    number: '03',
    image1x: '/assets/service-card-scene-3-new.png',
    image2x: '/assets/service-card-scene-3-sharp@2x.png',
    imageAlt: 'Smartphone with floating social media marketing icons',
    title: 'Bring in Right Customers',
    description: 'Performance marketing to reach the right people and turn interest into enquiries and sales.',
    bullets: [
      'Meta Ads',
      'Google Ads',
      'Lead Generation',
      'E-commerce Sales',
      'Influencer Ads',
    ],
    link: '#contact',
  },
  {
    number: '04',
    image1x: '/assets/service-card-scene-4-new.png',
    image2x: '/assets/service-card-scene-4-sharp@2x.png',
    imageAlt: 'Data-driven growth chart podium with golden arrow',
    title: 'Improve What Works',
    description: 'Data-driven insights and continuous optimisation to help you get better results over time.',
    bullets: [
      'Ad Account Audits',
      'Conversion Optimisation',
      'ROAS Improvement',
      'Digital Expansion',
    ],
    link: '#contact',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      {/* Decorative background curve with golden accent dot */}
      <svg
        className="services-bg-curve"
        viewBox="0 0 1000 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMin meet"
      >
        <path
          d="M920 -20 C820 40, 680 90, 592 134 C540 162, 510 240, 500 320"
          stroke="#dfd5c4"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="592" cy="134" r="4.5" fill="#a67c37" />
      </svg>

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
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="service-grid">
          {servicesData.map((item) => (
            <a
              key={item.number}
              href={item.link}
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
                    <li key={idx}>
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
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* <div className="service-card-footer">
                  <span className="service-explore-text">Explore Services</span>
                  <span className="service-footer-line" aria-hidden="true" />
                  <span className="service-round-btn" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
