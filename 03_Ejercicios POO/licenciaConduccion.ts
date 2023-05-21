import { Persona } from "./persona";

export class LicenciaConduccion {
  tipoLicencia: string;
  fechaExpedicion: Date;
  vigencia: Date;
  persona: Persona;

  constructor(
    tipoLicencia: string,
    fechaExpedicion: Date,
    vigencia: Date,
    persona: Persona
  ) {
    this.tipoLicencia = tipoLicencia;
    this.fechaExpedicion = fechaExpedicion;
    this.vigencia = vigencia;
    this.persona = persona;
  }
}
