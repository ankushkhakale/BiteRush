import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";
import { categories, restaurants } from "@/data/menu";

const Categories = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Explore <span className="text-primary">Categories</span>
        </motion.h2>

        {/* Category chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-3 overflow-x-auto pb-4 mb-14 scrollbar-hide"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 bg-secondary text-foreground px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 border border-border hover:border-primary/50 transition-colors"
              data-cursor="pointer"
            >
              <span className="text-xl">{cat.emoji}</span>
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Restaurant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl overflow-hidden border border-border group"
              data-cursor="pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{r.name}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    {r.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {r.deliveryTime} min
                  </span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-xs">{r.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
