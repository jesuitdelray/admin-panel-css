import svg from 'src/assets/svg/svg';

const { artists, faq, howitworks, other, portfolio, services, testimonials } =
  svg;

export const list = [
  { svg: portfolio, text: 'Portfolio' },
  { svg: artists, text: 'Artists' },
  { svg: services, text: 'Services' },
  { svg: testimonials, text: 'Testimonials' },
  { svg: howitworks, text: 'How It Works' },
  { svg: faq, text: 'FAQ' },
  { svg: other, text: 'Other' },
];
