import { motion } from 'framer-motion'
import { Search, Calendar, Plane, Activity, Smile, MapPin } from 'lucide-react'

export default function Process() {
  const steps = [
    { icon: Search, title: 'Consultation', description: 'Free online consultation with our experts' },
    { icon: Calendar, title: 'Plan', description: 'Custom treatment and travel plan' },
    { icon: Plane, title: 'Travel', description: 'Arrive and settle in comfortably' },
    { icon: Activity, title: 'Treatment', description: 'World-class dental care' },
    { icon: Smile, title: 'Recover', description: 'Relax and enjoy your recovery' },
    { icon: MapPin, title: 'Return', description: 'Return home with a new smile' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey to a perfect smile in 6 simple steps
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/30">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-primary-600 mb-2">Step {index + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
