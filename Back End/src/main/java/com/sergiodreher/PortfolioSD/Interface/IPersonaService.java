package com.sergiodreher.PortfolioSD.Interface;

import com.sergiodreher.PortfolioSD.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Crear lista de personas
    public List<Persona> getPersona();
    
    //Guardar persona
    public void savePersona(Persona persona);
            
    //Delete usuario con ID
    public void deletePersona(Long id);
    
    //Search ID
    public Persona findPersona(Long id);
}
