import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, authorId } = req.body;
    const post = await prisma.post.create({
      data: { title, content, authorId },
    });
    res.json(post);
  } else if (req.method === 'GET') {
    const posts = await prisma.post.findMany();
    res.json(posts);
  }
}
