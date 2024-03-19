import Portfolio from '@/Images/portfolio.png'
import IMDBApp from '@/Images/imdb-app.png'
import YouTubeClone from '@/Images/youtube-clone.png'
import GoogleClone from '@/Images/google-clone.png'

export const projects = [
  {
    title: 'Portfolio',
    description:
      "This is the portfolio you're currently seeing. It's built with Next.js, TypeScript and Emotion. It's also hosted on Vercel.",
    image: Portfolio,
    tags: ['Next.js', 'TypeScript', 'Emotion', 'Vercel'],
    repoUrl: 'https://github.com/MartinDCalderonP/portfolio',
    deployUrl: 'https://portfolio-martindcalderonp.vercel.app/'
  },
  {
    title: 'IMDB App',
    description:
      'A IMDB app that allows you to search for movies and tv shows. It uses the IMDB API to fetch the data.',
    image: IMDBApp,
    tags: [
      'React',
      'TypeScript',
      'Custom Hooks',
      'Context API',
      'ESLint',
      'SASS Modules',
      'Jest',
      'Mock Service Worker'
    ],
    repoUrl: 'https://github.com/MartinDCalderonP/imdb-app-final-project',
    deployUrl: 'https://imdb-app-final-project.vercel.app/'
  },
  {
    title: 'YouTube Clone',
    description:
      'A YouTube clone that allows you to search for videos. It uses the YouTube API to fetch the data.',
    image: YouTubeClone,
    tags: ['React', 'Material UI', 'Custom Hooks', 'Context API', 'Firebase'],
    repoUrl: 'https://github.com/MartinDCalderonP/YouTube-Clone',
    deployUrl: 'https://clone-6c8d2.web.app/'
  },
  {
    title: 'Google Clone',
    description:
      'A Google clone that allows you to search for anything. It uses the Google API to fetch the data.',
    image: GoogleClone,
    tags: ['React', 'SASS Modules', 'Custom Hooks', 'Context API', 'Firebase'],
    repoUrl: 'https://github.com/MartinDCalderonP/Google-Clone',
    deployUrl: 'https://clone-d3b31.web.app/'
  }
]
