import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">
              Bite<span className="text-primary">Rush</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Your favorite food, delivered fast.
            </p>
          </motion.div>

          {[
            { title: "Company", links: ["About", "Careers", "Blog"] },
            { title: "Support", links: ["Help Center", "Contact", "FAQs"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      data-cursor="pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 BiteRush. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
