export type BikeDiscipline = 'all' | 'enduro' | 'gravel' | 'hardtail' | 'downhill';

export interface BikeBuild {
  id: string;
  name: string;
  discipline: 'enduro' | 'gravel' | 'hardtail' | 'downhill';
  subtitle: string;
  description: string;
  image: string;
  frameMaterial: string;
  travel: string;
  weight: string;
  wheelset: string;
  drivetrain: string;
  brakes: string;
  priceStarting: string;
  leadTime: string;
  badge: string;
  features: string[];
}

export interface ConfiguratorState {
  discipline: 'allmountain' | 'enduro' | 'gravel' | 'hardtail';
  frameMaterial: 'titanium' | 'steel' | 'carbon';
  suspensionTier: 'kashima' | 'coil' | 'ultimate';
  finish: 'moss-cerakote' | 'mist-anodized' | 'raw-brushed' | 'cedar-metallic';
  wheelset: 'carbon-reserve' | 'onyx-alloy' | 'i9-hydra';
  riderHeight: string;
}

export interface GarageService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  turnaround: string;
  deliverables: string[];
}

export interface FieldReport {
  id: string;
  trailName: string;
  location: string;
  elevation: string;
  conditions: string;
  rigTested: string;
  riderQuote: string;
  riderName: string;
  riderTitle: string;
  rating: number;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  consultationType: 'in-person' | 'remote-cad' | 'suspension-tune';
  desiredBuild: string;
  timeline: string;
  notes: string;
}
