import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      <motion.a
        href="https://wa.me/18881234567"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
      <motion.a
        href="tel:+18881234567"
        whileHover={{ scale: 1.1, y: -2 }}
        className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  )
}
