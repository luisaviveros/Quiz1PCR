
let ciudades = [
    { nombre: "Ciudad A", poblacion: 500000 },
    { nombre: "Ciudad B", poblacion: 1000000 },
    { nombre: "Ciudad C", poblacion: 750000 }
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
  