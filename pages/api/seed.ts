import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import moviesData from '@/movies.json';  // Import direct du fichier JSON

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    for (const movie of moviesData) {
      await prismadb.movie.create({
        data: movie
      });
    }

    return res.status(200).json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error('Error seeding database:', error);
    return res.status(500).json({ error: 'Error seeding database' });
  }
}