import { Plan } from "@/lib/types";
import { Sun, Clock, Moon } from "lucide-react";
import React from "react";


export const SHIFT_PLANS: Plan[] = [
  {
    title: "1st Shift",
    description: "Early bird special",
    price: "₹350",
    hours: "06:00 AM - 11:00 AM",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    title: "2nd Shift",
    description: "Peak hours",
    price: "₹450",
    hours: "11:00 AM - 04:00 PM",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "3rd Shift",
    description: "Evening productivity",
    price: "₹350",
    hours: "04:00 PM - 09:00 PM",
    icon: <Moon className="h-6 w-6" />,
  },
];

export const EXTENDED_PLANS: Plan[] = [
  {
    title: "Morning to Evening",
    description: "Perfect for long work sessions",
    price: "₹650",
    hours: "06:00 AM - 04:00 PM",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    title: "Midday to Night",
    description: "Afternoon to evening focus",
    price: "₹650",
    hours: "11:00 AM - 09:00 PM",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Full Day Access",
    description: "Complete flexibility all day",
    price: "₹750",
    hours: "06:00 AM - 09:00 PM",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Morning & Night Combo",
    description: "Skip the busy afternoon",
    price: "₹600",
    hours: "06:00 AM - 11:00 AM & 04:00 PM - 09:00 PM",
    icon: <Moon className="h-6 w-6" />,
  },
];
