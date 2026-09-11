import heroBikeImg from '../assets/hero-bike.jpg';
import rainierEnduroImg from '../assets/rainier-enduro.jpg';
import olympicGravelImg from '../assets/olympic-gravel.jpg';
import workshopCraftImg from '../assets/workshop-craft.jpg';
import type { BikeBuild, GarageService, FieldReport } from '../types';

export const FEATURED_BUILDS: BikeBuild[] = [
  {
    id: 'rainier-enduro',
    name: 'The Rainier Enduro Works',
    discipline: 'enduro',
    subtitle: 'High-Pivot 170mm Enduro Weapon',
    description: 'Engineered specifically for the steep, wet granite and root carpets of the Cascade range. Features a high-pivot idler layout, 63.5° head angle, and custom-tuned coil shock for unrelenting rear-wheel tracking in the wet loam.',
    image: rainierEnduroImg,
    frameMaterial: 'Aerospace Ti-3Al-2.5V & High-Modulus Carbon Rear',
    travel: '170mm front / 165mm rear (Push Industries 11.6 Coil)',
    weight: '31.2 lbs (14.1 kg)',
    wheelset: 'Reserve 30|HD Carbon rims on Chris King Matte Bourbon Hubs',
    drivetrain: 'SRAM XX Transmission AXS wireless',
    brakes: 'Hope Tech 4 V4 with braided steel lines & 220mm rotors',
    priceStarting: '$8,450',
    leadTime: '4-6 Weeks',
    badge: 'Flagship Enduro',
    features: [
      'Sealed Enduro Max double-row cartridge bearings with marine grease pack',
      'Integrated titanium downtube rock armor',
      'Internal sleeved cable routing with rubber noise dampeners',
      'Bespoke PNW Forest Cerakote finish with raw bronze anodized accents'
    ]
  },
  {
    id: 'olympic-gravel',
    name: 'The Olympic Divide Overland',
    discipline: 'gravel',
    subtitle: 'All-Weather Expedition Gravel Rig',
    description: 'Designed for endless forest service roads, rain-slicked fire lookouts, and multi-day backcountry bikepacking across the Olympic Peninsula. Compliant yet razor-sharp with tire clearance up to 700x50c or 650bx2.2".',
    image: olympicGravelImg,
    frameMaterial: 'Columbus Zona Triple-Butted Steel with ED Anti-Rust Coating',
    travel: 'Rigid Full-Carbon Adventure Fork (3-pack mounts & dynamo routing)',
    weight: '20.6 lbs (9.3 kg)',
    wheelset: 'White Industries G25A laced to SON 28 Dynamo hub',
    drivetrain: 'Shimano GRX Di2 1x12 with Garbaruk 10-52T wide ratio',
    brakes: 'Shimano GRX Hydraulic Flat-Mount with Campagnolo rotors',
    priceStarting: '$5,890',
    leadTime: '3–4 Weeks',
    badge: 'Backcountry Tested',
    features: [
      'Custom bolt-on full frame bag compatibility',
      'Dynamo light internal wire routing through fork and down tube',
      'Titanium fender mounts with hidden 55mm mudguard clearance',
      'Whiskey carbon seatpost tuned for high-frequency trail vibration damping'
    ]
  },
  {
    id: 'chuckanut-ti-hardtail',
    name: 'The Chuckanut Rowdy Hardtail',
    discipline: 'hardtail',
    subtitle: 'Aggressive Titanium Trail Sled',
    description: 'Pure, unfiltered connection to the trail. Built around a 140mm fork and progressive slack geometry, the Chuckanut eats wet technical loam for breakfast. Titanium natural spring damping eliminates trail chatter without adding weight.',
    image: heroBikeImg,
    frameMaterial: 'Grade 9 (3Al-2.5V) Seamless Cold-Worked Titanium',
    travel: '140mm Fox Factory 36 GRIP X2 Damper',
    weight: '26.8 lbs (12.1 kg)',
    wheelset: 'Industry Nine Hydra Enduro S Carbon 29"',
    drivetrain: 'Shimano XTR 12-speed mechanical with XTR 4-piston calipers',
    brakes: 'Shimano XTR Trail with RT-86 Ice-Tech rotors',
    priceStarting: '$6,750',
    leadTime: '4 Weeks',
    badge: 'Artisanal Hardtail',
    features: [
      'Custom slider dropouts supporting single-speed or geared 148x12mm boost',
      'S-bend chainstays clearing 29x2.6" aggressive mud spikes',
      'Hand-brushed finish with laser-etched Cascade mountain topography',
      'Threaded 73mm BSA bottom bracket for zero creaks in the rain'
    ]
  },
  {
    id: 'bellingham-downhill',
    name: 'The Galbraith Gravity DH',
    discipline: 'downhill',
    subtitle: '200mm Race-Bred Gravity Destroyer',
    description: 'Hand-lathed link plates, 200mm of pure progressive coil travel, and an indestructible custom frame built for the steepest drops and high-speed chunder of Whistler and Galbraith.',
    image: rainierEnduroImg,
    frameMaterial: 'Custom 6069-T6 Aluminum Monocoque & Ti Pivot Fasteners',
    travel: '200mm RockShox BoXXer Ultimate / Super Deluxe Coil DH',
    weight: '35.4 lbs (16.0 kg)',
    wheelset: 'DT Swiss FR541 on Onyx Racing Vesper Instant Engagement Hubs',
    drivetrain: 'SRAM X01 DH 7-Speed Compact',
    brakes: 'TRP DH-R EVO with 2.3mm thick 223mm rotors',
    priceStarting: '$8,990',
    leadTime: '5–7 Weeks',
    badge: 'Pro Gravity',
    features: [
      'Flip-chip geometry adjustment (+/- 0.75° head angle and 10mm chainstay reach)',
      'Onyx sprag-clutch silent freehub for whispering descent speed',
      'Integrated fork bump stops and polyurethane shuttle guard'
    ]
  }
];

export const GARAGE_SERVICES: GarageService[] = [
  {
    id: 'custom-builds',
    title: 'Ground-Up Bespoke Rigs',
    tagline: 'Precision frame geometry tailored to your body and riding style',
    description: 'We do not sell off-the-shelf bikes. Every machine begins with a 3D biomechanical fit session, CAD modeling, and tube miter cut right here in our Bellingham workshop. Crafted to conquer your home trails.',
    iconName: 'frame',
    turnaround: '3–6 Weeks',
    deliverables: [
      'Full CAD geometry blueprint based on rider anthropometry',
      'Choice of titanium, steel, or carbon hybrid metallurgy',
      'Hand-laced custom wheelset with tension graph report',
      'Initial 100-mile complete teardown inspection included'
    ]
  },
  {
    id: 'suspension-tuning',
    title: 'Suspension Dyno & Custom Shim Stacks',
    tagline: 'Revalving forks and coils for PNW wet loam and low speeds',
    description: 'Factory suspension tunes are made for average riders on dry buffed trails. Our in-house Roehrig shock dyno tunes compression and rebound damping specifically for wet slippery roots and high-speed brake bumps.',
    iconName: 'suspension',
    turnaround: '48–72 Hours',
    deliverables: [
      'Custom shim stack re-valve tailored to rider weight and leverage curve',
      'SKF low-friction green seals with cold-weather synthetic fluid',
      'Dyno graph before/after velocity curve documentation',
      'Setup baseline chart with spring rate recommendations'
    ]
  },
  {
    id: 'pnw-weatherproofing',
    title: 'PNW Monsoon Weatherproofing',
    tagline: 'Complete marine-grade ceramic bearing overhauls',
    description: 'The Pacific Northwest will grind unprotected bearings to powder in two months. We replace stock pivots with Enduro MAX double-lip marine-sealed bearings packed with specialized waterproof grease.',
    iconName: 'shield',
    turnaround: '24–48 Hours',
    deliverables: [
      'Enduro MAX full-complement pivot bearing replacement',
      'Threaded BB and headset marine waterproof purge',
      'Titanium anti-seize applied to all frame bolts & pivot axles',
      'Frame drain hole clearing and internal anti-corrosion fogging'
    ]
  },
  {
    id: 'paint-cerakote',
    title: 'Custom Cerakote & Anodizing Lab',
    tagline: 'Ultra-durable military-grade finishes inspired by forest moss',
    description: 'Cerakote thin-film ceramic coating provides up to 10x the scratch and rock-chip resistance of standard wet paint. Choose from custom moss fades, cedar tones, or iridescent anodized titanium highlights.',
    iconName: 'palette',
    turnaround: '7–10 Days',
    deliverables: [
      'High-temp oven cured Cerakote ceramic coating',
      'Hand-masked multi-tone topographic laser stencils',
      'Type III hardcoat anodizing for aluminum hardware',
      'Mirror-polished or wire-brushed raw titanium accents'
    ]
  }
];

export const FIELD_REPORTS: FieldReport[] = [
  {
    id: 'galbraith',
    trailName: 'Galbraith Mountain · SST to Golden Spike',
    location: 'Bellingham, WA',
    elevation: '1,785 ft descent',
    conditions: 'Wet fern loam, slick cedar bridges, 44°F drizzle',
    rigTested: 'Rainier Enduro Works (Size L)',
    riderQuote: 'The high-pivot idler completely eliminated chain kickback over the wet root ladders on SST. I have never felt this much rear tire traction in mid-November Pacific Northwest slop.',
    riderName: 'Torin Vance',
    riderTitle: 'PNW Enduro Series Competitor',
    rating: 5
  },
  {
    id: 'chuckanut',
    trailName: 'Chuckanut Ridge · Ridge Trail to Lost Lake',
    location: 'Larrabee State Park, WA',
    elevation: '2,240 ft vertical',
    conditions: 'Steep mossy rock rolls, pine needle carpet, mist',
    rigTested: 'Chuckanut Rowdy Titanium Hardtail',
    riderQuote: 'You forget you are on a hardtail. The Grade 9 titanium has this springy resilience that softens harsh square edges while still pumping speed out of every single berm.',
    riderName: 'Evelyn Marsh',
    riderTitle: 'Bellingham Local & Trail Builder',
    rating: 5
  },
  {
    id: 'olympic',
    trailName: 'Olympic Peninsula · High Divide to Sol Duc',
    location: 'Olympic National Park, WA',
    elevation: '54 Miles / 6,100 ft climbing',
    conditions: 'Crushed gravel, mountain creek crossings, dense fog',
    rigTested: 'Olympic Divide Overland Gravel',
    riderQuote: 'Loaded with 35 lbs of camping gear through 6 hours of torrential rainfall. The dynamo lights cut right through mountain fog and the geometry kept my hands fatigue-free.',
    riderName: 'Marcus Lindqvist',
    riderTitle: 'Bikepacking Photographer',
    rating: 5
  }
];

export const WORKSHOP_STATS = [
  { label: 'Bespoke Frames Built', value: '340+' },
  { label: 'Wet Trail Miles Tested', value: '48,000+' },
  { label: 'Dyno Tunes Performed', value: '1,820+' },
  { label: 'Frame Warranty', value: 'Lifetime' }
];

export const WORKSHOP_DETAILS = {
  garageName: 'Cascadia Custom Cycles',
  subtitle: 'Artisanal Mountain & Adventure Bike Garage',
  address: '1420 Pine Creek Way, Suite 4B',
  cityStateZip: 'Bellingham, WA 98225',
  coordinates: '48.7519° N, 122.4787° W',
  phone: '(360) 529-8814',
  email: 'garage@cascadiacycles.com',
  hours: 'Tuesday – Saturday: 9:00 AM – 6:00 PM PST',
  workshopImage: workshopCraftImg
};
