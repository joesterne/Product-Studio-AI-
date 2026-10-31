export interface SuggestionChip {
  id: string;
  label: string;
  prompt: string;
}

export interface MediaSelection {
  id: string;
  source: 'upload';
  images: string[];    // asset URLs or data URLs
  description: string;
}

export const PRODUCTS: SuggestionChip[] = [
  {
    id: 'mug',
    label: 'Artisan Mug',
    prompt: 'An elegant artisan ceramic mug with a gradient glaze and a large perfectly round handle, studio product photography',
  },
  {
    id: 'colorful_mug',
    label: 'Colorful Mug',
    prompt: 'A vibrant colorful hand-painted ceramic coffee mug on a clean surface, studio product photography',
  },
  {
    id: 'perfume',
    label: 'Perfume Bottle',
    prompt: 'A luxury ornate glass perfume bottle with sodalite and malachite minerals, studio product photography',
  },
  {
    id: 'sneaker',
    label: 'Running Sneaker',
    prompt: 'A premium luxury running sneaker with a sculptural modular sole, suede and mesh panels, studio product photography',
  }
];

export const ATMOSPHERES: SuggestionChip[] = [
  {
    id: 'marble_plinth',
    label: 'Marble Plinth',
    prompt: 'A pristine Carrara marble plinth resting against a soft sage green backdrop, warm directional sunlight with soft shadows',
  },
  {
    id: 'travertine_blocks',
    label: 'Travertine Blocks',
    prompt: 'Warm porous travertine blocks creating a structured geometric podium under a brilliant azure sky, soft dappled leaf shadows',
  },
  {
    id: 'plaster_palm',
    label: 'Plaster & Palm',
    prompt: 'A warm sun-drenched polished plaster corner with a soft rose-tinted floor and crisp palm frond silhouettes casting dramatic shadows',
  },
  {
    id: 'concrete_wall',
    label: 'Concrete Wall',
    prompt: 'A minimalist scene with a clean raw concrete wall background and subtle industrial textures, dramatic side-lighting',
  }
];
