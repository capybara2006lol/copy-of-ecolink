import { LucideIcon } from 'lucide-react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MapPoint {
  id: number;
  type: 'Plastic' | 'Glass' | 'Paper' | 'Metal';
  x: number; // Percentage for demo positioning
  y: number; // Percentage for demo positioning
  address: string;
}