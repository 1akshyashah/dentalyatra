import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { number: '5000+', label: 'Happy Patients' },
    { number: '200+', label: 'Partner Hospitals' },
    { number: '50+', label: 'Countries Served' },
    { number: '98%', label: 'Success Rate' }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-primary-100 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
