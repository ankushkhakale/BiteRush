import { motion } from "framer-motion";
import { Search, ShoppingBag, Utensils } from "lucide-react";

const steps = [
  { icon: Search, title: "Browse", desc: "Explore restaurants & menus near you" },
  { icon: ShoppingBag, title: "Order", desc: "Pick your favorites and checkout" },
  { icon: Utensils, title: "Enjoy", desc: "Get it delivered hot & fresh" },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          How It <span className="text-primary">Works</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
              >
                <step.icon className="w-9 h-9 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
