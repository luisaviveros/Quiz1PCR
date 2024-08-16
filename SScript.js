
let ciudades = [
    { nombre: "Ciudad A", poblacion: 35600 },
    { nombre: "Ciudad B", poblacion: 6265 },
    { nombre: "Ciudad C", poblacion: 454365488 }
  ];
  
  
  function ciudadgrande() {
    let mayorCiudad = ciudades[0]; 
    
    for (let i = 1; i < ciudades.length; i++) {
      if (ciudades[i].poblacion > mayorCiudad.poblacion) {
        mayorCiudad = ciudades[i]; 
      }
    }
    
    return mayorCiudad; 
  }
  
  
  console.log(ciudadgrande()); 
  