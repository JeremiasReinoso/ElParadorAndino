/* CONFIGURACIÓN EDITABLE — modificá este archivo para actualizar la carta y los datos reales. */
const RESTAURANT_CONFIG = {
  name: 'El Parador Andino', currency: 'ARS', locale: 'es-AR',
  // Dejar vacío hasta confirmar el número. Debe incluir código país, sin +, espacios ni guiones.
  WHATSAPP_NUMBER: '',
  address: 'Dirección a confirmar', hours: 'Horarios a confirmar',
  socialLabel: 'Redes sociales a confirmar', deliveryEnabled: false,
  categories: [
    { id: 'hamburguesas', name: 'Hamburguesas', shortName: 'Hamburguesas', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80' },
    { id: 'cervezas', name: 'Cervezas artesanales', shortName: 'Cervezas', image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80' },
    { id: 'ensaladas', name: 'Ensaladas mixtas', shortName: 'Ensaladas', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80' },
    { id: 'papas', name: 'Papas fritas', shortName: 'Papas fritas', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80' },
    { id: 'milanesas', name: 'Milanesas a la napolitana', shortName: 'Milanesas', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80' },
    { id: 'lasagna', name: 'Lasagna', shortName: 'Lasagna', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367a0?auto=format&fit=crop&w=600&q=80' }
  ],
  products: [
    { id: 'hamburguesa-clasica', name: 'Hamburguesa clásica', category: 'hamburguesas', description: 'Hamburguesa servida en pan con ingredientes frescos.', price: 0, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=82', available: true },
    { id: 'cerveza-artesanal', name: 'Cerveza artesanal', category: 'cervezas', description: 'Cerveza artesanal para acompañar una buena experiencia gastronómica.', price: 0, image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=82', available: true },
    { id: 'ensalada-mixta', name: 'Ensalada mixta', category: 'ensaladas', description: 'Combinación fresca de vegetales de temporada.', price: 0, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=82', available: true },
    { id: 'papas-fritas', name: 'Papas fritas', category: 'papas', description: 'Papas doradas y crocantes, ideales para compartir o acompañar otros platos.', price: 0, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=82', available: true },
    { id: 'milanesa-napolitana', name: 'Milanesa a la napolitana', category: 'milanesas', description: 'Milanesa con salsa de tomate, jamón y queso gratinado.', price: 0, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82', available: true },
    { id: 'lasagna', name: 'Lasagna', category: 'lasagna', description: 'Capas de pasta con salsa y queso gratinado.', price: 0, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367a0?auto=format&fit=crop&w=900&q=82', available: true }
  ]
};
