export interface Ponto {
    uid?: string;
    data: string;
    done?: boolean;
    registro: Registro;
}
export interface Registro {
    inicioM?: string;
    fimM?: string;
    inicioT?: string;
    fimT?: string;
}
