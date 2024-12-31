export interface Faq {
  title: string
  description: string
}

export const FAQS: Faq[] = [
  {
    title: '¿Como crear una cuenta en la pagina?',
    description: `Para crearte una cuenta en la pagina de Mas Que Vacaciones, 
    debes darle click al botón “Regístrate” ubicado en la parte
    superior derecha y luego ingresar la información solicitada, para
    finalizar darle click al botón Registrar`
  },
  {
    title: '¿Como inicar sesión en la cuenta en la pagina?',
    description: `Después de crear tu cuenta, dirígete a la parte superior y ahora 
    seleccionar “Iniciar Sesión”, una vez aquí ingresar su correo,
    contraseña y para finalizar seleccionar el botón iniciar sesión.`
  },
  {
    title: '¿Cómo cancelar mi viaje?',
    description: `Para poder cancelar su viaje, es necesario que se ponga en 
    contacto con un o de nuestros asesores, ya sea enviándonos un
    correo, whatsApp o dejándonos su numero telefónico para 
    comunicarnos.`
  },
  {
    title: '¿Cómo me afilio para ser un proveedor/aliado?',
    description: `Déjanos tus datos y la información de tu comercio a través de
    nuestra web, para ponernos en contacto contigo y 
    te enseñaremos como podrás empezar a trabajar con nosotros.`
  }
]
