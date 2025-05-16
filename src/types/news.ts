export interface News {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: 'actualización' | 'evento' | 'noticia';
  link?: string;
}

export const newsData: News[] = [
  {
    id: '1',
    title: '¡Nueva actualización de Ponshot!',
    description: 'Descubre las nuevas mecánicas y mejoras en la última actualización de Ponshot.',
    image: '/assets/images/news-1.jpg',
    date: '2024-03-20',
    category: 'actualización',
    link: 'https://steam.com/news/1'
  },
  {
    id: '2',
    title: 'Torneo Ponshot Championship',
    description: 'Participa en el primer torneo oficial de Ponshot con premios increíbles.',
    image: '/assets/images/news-2.jpg',
    date: '2024-03-18',
    category: 'evento',
    link: 'https://steam.com/events/1'
  },
  {
    id: '3',
    title: 'Ponshot alcanza 100,000 jugadores',
    description: '¡Gracias a todos por hacer de Ponshot un éxito! Celebramos este hito con regalos especiales.',
    image: '/assets/images/news-3.jpg',
    date: '2024-03-15',
    category: 'noticia'
  },
  {
    id: '4',
    title: 'Nuevos ponchadores disponibles',
    description: 'Conoce a los nuevos personajes que se unen a la batalla en Ponshot.',
    image: '/assets/images/news-4.jpg',
    date: '2024-03-10',
    category: 'actualización',
    link: 'https://steam.com/news/2'
  }
]; 