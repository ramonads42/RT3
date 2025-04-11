class Somador {
    public calcular = (numero1: number, numero2: number): number => {
        return numero1 + numero2;
    }
}

class Subtrador {
    public calcular = (numero1: number, numero2: number): number => {
        return numero1 - numero2;
    }
}

class Multiplicador {
    public calcular = (numero1: number, numero2: number): number => {
        return numero1 * numero2;
    }
}

class Divisor {
    public calcular = (numero1: number, numero2: number): number => {
        if (numero2 === 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        return numero1 / numero2;
    }
}

export { Somador, Subtrador, Multiplicador, Divisor };