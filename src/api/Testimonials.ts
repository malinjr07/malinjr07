export interface Testimonial {
  id: string;
  tImg: string;
  Des: string;
  Title: string;
  Sub: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '01',
    tImg: '/images/testimonial/1.jpg',
    Des: '"Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque"',
    Title: 'Kristin Watson',
    Sub: 'Content Writer',
  },
  {
    id: '02',
    tImg: '/images/testimonial/2.jpg',
    Des: '"Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque"',
    Title: 'Watson Kristin',
    Sub: 'Content Writer',
  },
  {
    id: '03',
    tImg: '/images/testimonial/3.jpg',
    Des: '"Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque"',
    Title: 'John Doe',
    Sub: 'Marketing Director',
  },
  {
    id: '04',
    tImg: '/images/testimonial/4.jpg',
    Des: '"Purus eget consectur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio maecenas mattis praesent.Eget vitaoe magna condimentum tristique scelerisque"',
    Title: 'Jane Smith',
    Sub: 'CEO, TechCorp',
  },
];
