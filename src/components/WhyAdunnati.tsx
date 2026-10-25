import React, { useRef, useState, useCallback } from 'react';

interface WhyCardItem {
  id: string;
  num: string;
  title: string[];
  subtext: string;
  sceneImg: string;
}

const WHY_CARDS: WhyCardItem[] = [
  {
    id: 'understand',
    num: '01',
    title: ['WE UNDERSTAND', 'BEFORE WE PLAN'],
    subtext: 'Every business has a different starting point. We take the time to understand yours.',
    sceneImg: '/assets/why-card-scene-1.png'
  },
  {
    id: 'focus',
    num: '02',
    title: ['WE FOCUS ON', 'WHAT MATTERS', 'MOST'],
    subtext: "The right work is not about doing more. It's about doing what serves the business best.",
    sceneImg: '/assets/why-card-scene-2.png'
  },
  {
    id: 'looking-better',
    num: '03',
    title: ['WE KEEP LOOKING', 'FOR BETTER'],
    subtext: 'We use performance, customer response and practical learning to shape the next step.',
    sceneImg: '/assets/why-card-scene-3.png'
  }
];

export const WhyAdunnati: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cards = container.querySelectorAll('.why-card');
    if (cards.length === 0) return;

    let closestIndex = 0;
    let minDiff = Infinity;

    cards.forEach((el, index) => {
      const cardEl = el as HTMLElement;
      const diff = Math.abs(cardEl.offsetLeft - container.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.why-card');
    const targetCard = cards[index] as HTMLElement;
    if (targetCard) {
      const targetLeft = targetCard.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetLeft,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="why-section" id="why-adunnati">
      <div className="container">
        <div className="why-header">
          <div className="eyebrow">WHY ADUNNATI</div>

          <h2 className="why-heading">
            THOUGHTFUL STRATEGY.<br />
            WORK THAT MEANS BUSINESS.
          </h2>

          <div className="why-intro-desc">
            <p>We believe good marketing starts with understanding the business behind it.</p>
            <p>
              The goals, the customer, the offer and the numbers all matter. We bring these pieces together
              to build a clear direction, execute with intent and keep improving based on what the work tells us.
            </p>
          </div>
        </div>

        <div
          className="why-grid"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {WHY_CARDS.map((card) => (
            <article className="why-card" key={card.id}>
              <div className="why-card-top">
                <div className="why-card-meta">
                  <div className="why-card-num-wrap">
                    <span className="why-card-num">{card.num}</span>
                    <span className="why-card-line" aria-hidden="true"></span>
                  </div>
                  <div className="why-card-arrow" aria-label="Explore step">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="why-card-title">
                  {card.title.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < card.title.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              <div className="why-card-bottom">
                <img
                  src={card.sceneImg}
                  alt={`${card.num} ${card.title.join(' ')}: ${card.subtext}`}
                  className="why-card-scene-img"
                  loading="lazy"
                  width="596"
                  height="444"
                />
                <p className="sr-only">{card.subtext}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile carousel indicator dots (hidden on desktop) */}
        <div className="why-mobile-dots" aria-label="Why Adunnati carousel navigation">
          {WHY_CARDS.map((card, idx) => (
            <button
              key={card.id}
              type="button"
              className={`why-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${card.num}`}
              aria-current={idx === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdunnati;
