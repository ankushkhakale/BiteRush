import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const floatingFoods = ["🍕", "🍔", "🍣", "🌮", "🍜", "🍰"];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Floating food emojis */}
      {floatingFoods.map((food, i) => (
        <motion.span
          key={i}
          className="absolute text-5xl md:text-7xl select-none opacity-20"
          style={{
            top: `${15 + (i * 14) % 70}%`,
            left: `${5 + (i * 17) % 85}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {food}
        </motion.span>
      ))}

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
        >
          Fast. Fresh. Delivered.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
        >
          Your Cravings,
          <br />
          <span className="text-primary">Delivered.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          Discover the best restaurants near you and get your favorite meals at your doorstep in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-3 group"
            data-cursor="pointer"
          >
            Order Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Hero;
