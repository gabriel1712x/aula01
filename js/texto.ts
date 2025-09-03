export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  minStock: number;
  price?: number;
  lastUpdated: Date;
}

export interface InventoryCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const INVENTORY_CATEGORIES: InventoryCategory[] = [
  { id: 'massas', name: 'Massas', icon: '🍞', color: 'bg-amber-100 text-amber-800' },
  { id: 'queijos', name: 'Queijos', icon: '🧀', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'carnes', name: 'Carnes', icon: '🥓', color: 'bg-red-100 text-red-800' },
  { id: 'vegetais', name: 'Vegetais', icon: '🥬', color: 'bg-green-100 text-green-800' },
  { id: 'molhos', name: 'Molhos', icon: '🍅', color: 'bg-red-100 text-red-800' },
  { id: 'temperos', name: 'Temperos', icon: '🌿', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'outros', name: 'Outros', icon: '📦', color: 'bg-gray-100 text-gray-800' },
];