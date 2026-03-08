import { StaticImageData } from "next/image";
import ProductStarterImage from "@/assets/Freshwater-white-prawns.jpg";
import ProductGrowerImage from "@/assets/50-ton.jpg";
import ProductFinisherImage from "@/assets/71dMJGr-pdS-_AC_UF10001000_QL80_.jpg";

type TechnicalSpecs = {
  crudeProtein: string;
  crudeFat: string;
  crudeFiber: string;
  ash: string;
  moisture: string;
};

type FeedingGuidance = {
  phase: string;
  bodyWeight: string;
  feedRate: string;
  frequency: string;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: StaticImageData;
  details: string;
  stage: string;
  pelletSize: string;
  technicalSpecs: TechnicalSpecs;
  feedingGuidance: FeedingGuidance[];
  idealPondConditions: string[];
  packaging: string[];
  benefits: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "starter-feed",
    name: "Starter Feed",
    description: "High digestibility micro-pellets for early-stage shrimp with stronger survival support.",
    image: ProductStarterImage,
    details:
      "Starter Feed is formulated for early growth stages where digestion efficiency and survival are critical. The formula is optimized for stable feed intake and early immunity support.",
    stage: "DOC 1-35 | 0.02 g to 2.0 g",
    pelletSize: "0.4 mm to 1.0 mm micro-pellets",
    technicalSpecs: {
      crudeProtein: "38% to 40%",
      crudeFat: "6% to 8%",
      crudeFiber: "Max 3%",
      ash: "Max 14%",
      moisture: "Max 10%",
    },
    feedingGuidance: [
      { phase: "Acclimation", bodyWeight: "0.02 - 0.20 g", feedRate: "18% - 22%", frequency: "5-6 times/day" },
      { phase: "Nursery", bodyWeight: "0.20 - 1.00 g", feedRate: "12% - 16%", frequency: "4-5 times/day" },
      { phase: "Early Grow", bodyWeight: "1.00 - 2.00 g", feedRate: "8% - 10%", frequency: "4 times/day" },
    ],
    idealPondConditions: [
      "Salinity 5-25 ppt with stable acclimation",
      "DO above 5 ppm with active aeration",
      "Low sludge and controlled ammonia management",
    ],
    packaging: ["20 kg moisture-resistant bags", "25 kg bulk farm packs"],
    benefits: [
      "Fine digestible pellets for hatchery and early pond transfer stages",
      "Supports strong early growth and survival consistency",
      "Designed to reduce stress during adaptation periods",
    ],
  },
  {
    slug: "grower-feed",
    name: "Grower Feed",
    description: "Protein-focused formula designed to sustain fast and stable growth cycles.",
    image: ProductGrowerImage,
    details:
      "Grower Feed is built to maintain steady biomass gain in mid-cycle production. It balances protein and energy inputs to support uniform growth and feed conversion.",
    stage: "DOC 36-75 | 2.0 g to 15.0 g",
    pelletSize: "1.2 mm to 1.8 mm sinking pellets",
    technicalSpecs: {
      crudeProtein: "34% to 36%",
      crudeFat: "6% to 7%",
      crudeFiber: "Max 4%",
      ash: "Max 15%",
      moisture: "Max 10%",
    },
    feedingGuidance: [
      { phase: "Mid Grow", bodyWeight: "2.0 - 5.0 g", feedRate: "5% - 7%", frequency: "4 times/day" },
      { phase: "Growth Push", bodyWeight: "5.0 - 10.0 g", feedRate: "3.5% - 5%", frequency: "3-4 times/day" },
      { phase: "Pre-Finisher", bodyWeight: "10.0 - 15.0 g", feedRate: "2.8% - 3.5%", frequency: "3 times/day" },
    ],
    idealPondConditions: [
      "pH 7.5-8.5 with alkalinity stability",
      "Regular sludge removal and aeration management",
      "Consistent feed tray monitoring for FCR control",
    ],
    packaging: ["25 kg standard distribution bags", "30 kg dealer logistics packs"],
    benefits: [
      "Balanced nutrition for stable mid-cycle growth",
      "Supports stronger body development and pond performance",
      "Helps maintain reliable feed conversion across changing conditions",
    ],
  },
  {
    slug: "finisher-feed",
    name: "Finisher Feed",
    description: "Performance feed engineered for harvest weight consistency and quality output.",
    image: ProductFinisherImage,
    details:
      "Finisher Feed is designed for the final growth stage to support harvest targets and output quality. The formula prioritizes weight gain consistency and clean finishing performance.",
    stage: "DOC 76+ | 15.0 g to harvest size",
    pelletSize: "2.0 mm to 2.5 mm dense sinking pellets",
    technicalSpecs: {
      crudeProtein: "32% to 34%",
      crudeFat: "5% to 7%",
      crudeFiber: "Max 4%",
      ash: "Max 15%",
      moisture: "Max 10%",
    },
    feedingGuidance: [
      { phase: "Finisher Start", bodyWeight: "15.0 - 20.0 g", feedRate: "2.2% - 2.8%", frequency: "3 times/day" },
      { phase: "Weight Build", bodyWeight: "20.0 - 25.0 g", feedRate: "1.8% - 2.2%", frequency: "2-3 times/day" },
      { phase: "Pre-Harvest", bodyWeight: "25.0 g+", feedRate: "1.4% - 1.8%", frequency: "2 times/day" },
    ],
    idealPondConditions: [
      "Stable night DO with strong aeration backup",
      "Tight feed tray review and biomass estimation",
      "Water exchange and bloom management near harvest",
    ],
    packaging: ["25 kg harvest-cycle bags", "Bulk dispatch lots for dealer fleets"],
    benefits: [
      "Optimized for final-stage weight gain",
      "Supports consistent harvest size and quality",
      "Built for efficient final-cycle feed performance",
    ],
  },
];
