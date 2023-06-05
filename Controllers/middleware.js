import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

// MIDDLEWARE PARA AUTORIZACIÓN (VERIFICAR SI HAN INICIADO SESIÓN)
const isLoggedIn = async (req, res, next) => {
    try {
        // Verificar si existe el encabezado de autorización
        if (req.headers.authorization) {
            // Analizar el token del encabezado
            const token = req.headers.authorization.split(" ")[1];
            if (token) {
                const payload = await jwt.verify(token, process.env.SECRET);
                if (payload) {
                    // Almacenar los datos del usuario en el objeto de solicitud
                    req.user = payload;
                    next();
                } else {
                    res.status(400).json({ error: "verificación de token fallida" });
                }
            } else {
                res.status(400).json({ error: "encabezado de autorización con formato incorrecto" });
            }
        } else {
            res.status(400).json({ error: "No hay encabezado de autorización" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Exportar el middleware personalizado
export default {
    isLoggedIn,
};
