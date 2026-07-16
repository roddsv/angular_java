export interface Ride {
  id?: number,
  userId: number,
  passageiroId?: number;
  motoristaId?: number;
  origem: string;
  destino: string;
  status?: string;
}
