import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-card/80 backdrop-blur-xl border border-border rounded-2xl px-6 py-3">
        <a href="/" className="text-xl font-bold" data-cursor="pointer">
          Bite<span className="text-primary">Rush</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Menu", "Restaurants", "Deals"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-cursor="pointer"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2"
          data-cursor="pointer"
        >
          <ShoppingCart className="w-4 h-4" />
          Cart
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
