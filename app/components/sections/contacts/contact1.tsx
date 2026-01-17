"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 2063-5555",
    href: "tel:+551120635555",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: WhatsappLogoIcon,
    label: "WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@anaclaradias.com.br",
    href: "mailto:contato@anaclaradias.com.br",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua dos Patriotas, 100 – Ipiranga\nSão Paulo/SP – CEP 04207-030",
    href: "https://maps.google.com/?q=Rua+dos+Patriotas,+100+Ipiranga+São+Paulo+SP",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Clock,
    label: "Horário de Atendimento Presencial",
    value: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
    href: null,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Contact1() {
  return (
    <section className="w-full py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-light uppercase tracking-wider text-sm"
          >
            Entre em Contato
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Vamos conversar?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Estou aqui para ajudar você a alcançar seus objetivos. Entre em
            contato e agende sua avaliação.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div
                        className={`p-3 rounded-lg ${contact.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}
                      >
                        <contact.icon className="w-5 h-5" strokeWidth={1} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">
                          {contact.label}
                        </p>
                        <p className="text-base font-light text-zinc-800 dark:text-zinc-100 whitespace-pre-line">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <div
                        className={`p-3 rounded-lg ${contact.color} shrink-0`}
                      >
                        <contact.icon className="w-5 h-5" strokeWidth={1} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">
                          {contact.label}
                        </p>
                        <p className="text-base font-light text-zinc-800 dark:text-zinc-100 whitespace-pre-line">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full bg-linear-to-br from-amber-400 to-amber-600 hover:brightness-105 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20 cursor-pointer transition-all duration-300"
            >
              <WhatsappLogoIcon size={24} weight="light" />
              Agendar Consulta pelo WhatsApp
            </motion.a>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0446847843746!2d-46.60926492377615!3d-23.59373996277958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2e2b0b7b7b%3A0x7b7b7b7b7b7b7b7b!2sRua%20dos%20Patriotas%2C%20100%20-%20Ipiranga%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004207-030!5e0!3m2!1spt-BR!2sbr!4v1705507200000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Consultório"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
