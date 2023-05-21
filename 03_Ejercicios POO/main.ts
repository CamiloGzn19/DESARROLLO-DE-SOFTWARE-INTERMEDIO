import { Accidente } from "./accidente.js";
import { Bicicleta } from "./bicicleta.js";
import { Carro } from "./carro.js";
import { LicenciaConduccion } from "./licenciaConduccion.js";
import { Motocicleta } from "./motocicleta.js";
import { Persona } from "./persona.js";

const licenciaCamilo = new LicenciaConduccion(
  "A1",
  new Date("2019-02-12"),
  new Date("2029-02-20")
);

const camilo = new Persona(
  "Camilo",
  "1233444555",
  "3223065050",
  23,
  licenciaCamilo
);

// Vehiculos
const biciCamilo = new Bicicleta(
  "GW",
  "AVANTI",
  "Blanco y negro",
  2,
  "urbana",
  false
);
const carro1Camilo = new Carro("Audi", "R8", "Negro", 4, "MTV019", 5);
const carro2Camilo = new Carro(
  "Mercedes Benz",
  "Gle 450",
  "Blanco",
  4,
  "VHF165",
  6
);
const moto1Camilo = new Motocicleta(
  "yamaha",
  "MT03",
  "Negro-Rojo",
  2,
  "CRI08X",
  321
);
const moto2Camilo = new Motocicleta(
  "Honda",
  "CBR500",
  "Negro",
  2,
  "MTV019",
  500
);

// Accidentes
const AccidenteFebrero = new Accidente(
  new Date("2023-02-12"),
  "Choque de autos en la autopista norte",
  2,
  carro1Camilo
);
const AccidenteAbril = new Accidente(
  new Date("2023-04-06"),
  "Cruce indebido por la acera",
  1,
  moto2Camilo
);
const AccidenteMayo = new Accidente(
  new Date("2023-05-20"),
  "Choque múltiple en zona residencial",
  3,
  carro2Camilo
);
const AccidenteJunio = new Accidente(
  new Date("2023-06-11"),
  "Cruce de semáforo en rojo",
  3,
  biciCamilo
);

// Cargando vehiculos
camilo.vehiculos.push(
  biciCamilo,
  carro1Camilo,
  carro2Camilo,
  moto1Camilo,
  moto2Camilo
);

// Cargando accidentes
carro1Camilo.reportes.push(AccidenteFebrero);
carro2Camilo.reportes.push(AccidenteMayo);
biciCamilo.reportes.push(AccidenteJunio);
moto2Camilo.reportes.push(AccidenteAbril);

// Prueba código
console.table(camilo); // Persona
console.table(camilo.vehiculos); // Vehiculos de la persona
console.table(camilo.vehiculos[1].reportes[0]); // Ejemplo de reporte
