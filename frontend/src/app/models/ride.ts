export interface Ride {
  id?: number,
  passageiroId?: number;
  motoristaId?: number;
  origem: string;
  destino: string;
  status?: string;
}
