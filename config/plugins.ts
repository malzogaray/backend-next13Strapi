import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuración de Cloudinary
    cloudinary.config({ 
        cloud_name: 'dhvqglos6', 
        api_key: '673628884716969', 
        api_secret: 'a-jZYWl4kShGP66MKeHn8Zh_8D0' // Asegúrate de usar la clave secreta correcta
    });
    
    try {
        // Subir una imagen
        const uploadResult = await cloudinary.uploader.upload(
            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
                public_id: 'shoes',
            }
        );
        
        console.log('Upload Result:', uploadResult);
        
        // Optimizar la entrega de la imagen
        const optimizeUrl = cloudinary.url('shoes', {
            fetch_format: 'auto',
            quality: 'auto'
        });
        
        console.log('Optimized URL:', optimizeUrl);
        
        // Transformar la imagen: recortar automáticamente a un aspecto cuadrado
        const autoCropUrl = cloudinary.url('shoes', {
            crop: 'fill', // 'fill' asegura que la imagen se ajusta a las dimensiones dadas
            gravity: 'auto',
            width: 500,
            height: 500,
        });
        
        console.log('Auto-Cropped URL:', autoCropUrl);
        
    } catch (error) {
        console.error('Error:', error);
    }
})();
