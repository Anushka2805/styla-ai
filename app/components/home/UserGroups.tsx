"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Users,
  Crown,
  UserCog,
} from "lucide-react";

export default function UserGroups() {
  const groups = [
    {
      icon: ShoppingBag,
      title: "Fashion Shopper",
      desc: "Seeks inspiration and seamless checkout.",
    },
    {
      icon: Users,
      title: "Walk-In Visitors",
      desc: "Engages with interactive displays.",
    },
    {
      icon: Crown,
      title: "Loyalty Members",
      desc: "Expects VIP treatment and rewards.",
    },
    {
      icon: UserCog,
      title: "Retail Staff",
      desc: "Empowered with real-time clienteling tools.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
            Empowering Every Stakeholder
          </h2>
          <p className="text-slate-600">
            Built for everyone in the retail ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-purple-100 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-purple-600">
                <group.icon size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">{group.title}</h3>
              <p className="text-sm text-slate-500">{group.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
