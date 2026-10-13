# El Parador Andino

Sitio estático para un restaurante de inspiración patagónica. Está construido únicamente con HTML5, CSS3 y JavaScript vanilla, sin instalación, compilación, backend ni dependencias de runtime. Funciona en GitHub Pages y usa rutas relativas para los archivos del proyecto.

## Ejecutar

Abrí `index.html` directamente en el navegador o publicá el contenido de esta carpeta como GitHub Pages. Las fotos actuales son URLs directas de Unsplash (licencia Unsplash; se recomienda revisar las condiciones vigentes antes de un uso comercial). Si alguna imagen no carga, la interfaz conserva fondos y texto legibles.

## Configuración de la carta

Todo lo editable está en `js/config.js`:

- Cambiá `price` en cada producto para configurar precios reales en pesos argentinos. Con `price: 0` se muestra **Consultar precio** y no se presenta como un importe ficticio.
- Modificá, agregá o eliminá productos dentro de `products`. Cada uno necesita `id`, `name`, `category`, `description`, `price`, `image` y `available`.
- Poné `available: false` para ocultar un producto de la carta.
- Cambiá categorías en `categories` y usá su `id` en cada producto.
- Reemplazá `image` por una ruta local como `assets/images/hamburguesa.jpg` si incorporás fotografías propias. La carpeta `assets/images/` está prevista para esos recursos.
- Completá `WHATSAPP_NUMBER` con el número real, incluyendo código de país y sin `+`, espacios ni guiones (ejemplo de formato: `54911XXXXXXXX`). Hasta entonces, el formulario bloquea la apertura de WhatsApp con una explicación clara.
- Actualizá `address`, `hours`, `socialLabel` y `deliveryEnabled` cuando el restaurante confirme esos datos. La entrega está planteada como consulta y no se habilita automáticamente.

El carrito guarda solamente productos y cantidades en `localStorage`; no guarda nombre, dirección ni observaciones del cliente.

## Publicar en GitHub Pages

1. Subí `index.html`, `css/`, `js/`, `assets/` y `README.md` al repositorio.
2. En GitHub, abrí **Settings → Pages**.
3. Elegí la rama y la carpeta raíz (`/root`) como fuente.
4. Guardá y esperá la URL que GitHub Pages genere.

Todas las rutas locales están expresadas como `css/styles.css` y `js/...`, por lo que funcionan bajo una subruta del repositorio.

## Datos todavía pendientes

Antes de usarlo en producción faltan confirmar: número real de WhatsApp, precios, dirección, horarios, redes sociales, disponibilidad de entrega y fotografías definitivas. El proyecto deja esos datos visibles como “a confirmar” para no inventarlos.
