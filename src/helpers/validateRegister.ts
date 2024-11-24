// utils/validate.ts
  
  export function validateRegister(name: string, value: string): string | null {
    switch (name) {
      case "name":
        if (!value) return "El nombre es obligatorio";
        if (value.length < 2) return "El nombre debe tener al menos 2 caracteres";
        break;
  
      case "email":
        if (!value) return "El email es obligatorio";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Formato de email no válido";
        break;
  
      case "password":
        if (!value) return "La contraseña es obligatoria";
        if (value.length < 6) return "La contraseña debe tener al menos 6 caracteres";
        break;
  
      case "address":
        if (!value) return "La dirección es obligatoria";
        if (value.length < 5) return "La dirección debe tener al menos 5 caracteres";
        break;
  
      case "phone":
        if (!value) return "El teléfono es obligatorio";
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) return "Formato de teléfono no válido (10 dígitos)";
        break;
  
      default:
        return null;
    }
    return null;
  }
  