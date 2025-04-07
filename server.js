import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 4242;

// Verificar que las claves de Stripe estén configuradas
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Error: STRIPE_SECRET_KEY no está configurada en el archivo .env');
  process.exit(1);
}

// Configurar CORS
app.use(cors({
  origin: ['http://localhost:4000', 'https://taohoops.netlify.app'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Configurar Stripe con la clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  timeout: 20000,
});

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items } = req.body;
    
    console.log('Recibiendo solicitud de checkout con items:', JSON.stringify(items, null, 2));
    
    if (!items || !Array.isArray(items) || items.length === 0) {
      console.error('Error: No hay items en el carrito');
      return res.status(400).json({ error: 'No hay productos en el carrito' });
    }

    // Procesar cada item y generar URLs públicas para las imágenes
    const processedItems = items.map(item => {
      let imageUrl = null;
      if (item.thumbnailImage) {
        imageUrl = item.thumbnailImage;
        console.log(`URL de imagen para ${item.title}:`, imageUrl);
      }
      return {
        ...item,
        imageUrl
      };
    });

    // Crear los line_items para Stripe
    const lineItems = processedItems.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title || 'Producto sin nombre',
          description: `Size: ${item.size}`,
          images: item.imageUrl ? [item.imageUrl] : [],
        },
        unit_amount: Math.round((item.price || 0) * 100),
      },
      quantity: item.quantity || 1,
    }));

    console.log('Creando sesión de Stripe con line_items:', JSON.stringify(lineItems, null, 2));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://taohoops.netlify.app/payment-success',
      cancel_url: 'https://taohoops.netlify.app/checkout',
      shipping_address_collection: {
        allowed_countries: ['US', 'CO'],
      },
      allow_promotion_codes: true,
    });

    console.log('Sesión de Stripe creada exitosamente:', session.id);
    res.json({ url: session.url });

  } catch (error) {
    console.error('Error detallado:', {
      message: error.message,
      type: error.type,
      stack: error.stack,
      raw: error
    });

    res.status(500).json({
      error: 'Error al crear la sesión de checkout',
      details: error.message
    });
  }
});

// Manejar rutas no encontradas de la API
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
  console.log('Versión de Node.js:', process.version);
  console.log('Variables de entorno cargadas:', {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? 'Configurada' : 'No configurada',
    PORT: port,
    NODE_ENV: process.env.NODE_ENV || 'development'
  });
}); 