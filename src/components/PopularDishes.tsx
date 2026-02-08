import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { dishes } from "@/data/menu";

const PopularDishes = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Popular <span className="text-primary">Dishes</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-card rounded-2xl overflow-hidden border border-border group"
              data-cursor="pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{dish.restaurant}</p>
                <h3 className="font-semibold mb-3">{dish.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">${dish.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center"
                    data-cursor="pointer"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
