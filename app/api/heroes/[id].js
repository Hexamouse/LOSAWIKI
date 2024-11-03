// pages/api/heroes/[id].js
import { heroes } from '../../../data/heroes'; // Misalnya, data hero Anda

export default function handler(req, res) {
  const { id } = req.query;
  const hero = heroes.find(h => h.id.toString() === id);

  if (hero) {
    res.status(200).json(hero);
  } else {
    res.status(404).json({ message: "Hero not found" });
  }
}
