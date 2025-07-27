import { JSX, ReactNode } from "react";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Amenity {
  id: string;
  title: string;
  icon: string;
}

export interface Plan {
  title: string;
  description: string;
  price: string;
  hours: string;
  icon: JSX.Element;
}

export interface Guideline {
  id: string;
  text: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}