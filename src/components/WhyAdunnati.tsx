import React, { useRef, useState, useCallback } from 'react';

interface WhyCardItem {
  id: string;
  num: string;
  title: string[];
  subtext: string;
  image1x: string;
  image2x: string;
}

const WHY_CARDS: WhyCardItem[] = [
  {
    id: 'understand',
    num: '01',
    title: ['WE UNDERSTAND', 'BEFORE WE PLAN'],
    subtext: 'Every business has a different starting point. We take the time to understand yours.',
    image1x: '/assets/why-card-v2-1.webp',
    image2x: '/assets/why-card-v2-1@2x.webp'
  },
  {
    id: 'focus',
    num: '02',
    title: ['WE FOCUS ON', 'WHAT MATTERS MOST'],
    subtext: "The right work is not about doing more. It's about doing what serves the business best.",
    image1x: '/assets/why-card-v2-2.webp',
    image2x: '/assets/why-card-v2-2@2x.webp'
  },
  {
    id: 'looking-better',
    num: '03',
    title: ['WE KEEP LOOKING', 'FOR BETTER'],
    subtext: 'We use performance, customer response and practical learning to shape the next step.',
    image1x: '/assets/why-card-v2-3.webp',
    image2x: '/assets/why-card-v2-3@2x.webp'
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
            Thoughtful Strategy Work That Means Business
          </h2> 
 
          <div className="why-intro-desc">
            <p className="section-subheading">
              We believe good marketing starts with understanding the business behind it.
            </p>
            <p className="section-subheading why-subheading-secondary">
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
              <div className="why-card-artwork">
                <img
                  src={card.image1x}
                  srcSet={`${card.image1x} 1x, ${card.image2x} 2x`}
                  alt={`${card.num} ${card.title.join(' ')}: ${card.subtext}`}
                  className="why-card-img"
                  loading="lazy"
                  width="1190"
                  height="1322"
                />
              </div>
              <div className="sr-only">
                <h3>{card.num} {card.title.join(' ')}</h3>
                <p>{card.subtext}</p>
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
