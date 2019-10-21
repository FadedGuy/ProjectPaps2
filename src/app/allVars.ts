/*  Ejemplo de como se debe declarar una clase para su uso global, este ts es como nuestro storage del programa
    export class NombreDeClase{
        static stringInicio = "Studioso";
    }

    Para usar esa clase y/o variable dentro de otro archivo se debe de poner: 
    "import {NombreDeClase} from "directorio""

    Y asi dentro del ts puedes usarlo como una variable normal usando la siguiente sintaxis:
    NombreDeClase.stringInicio;
*/  

export class Tareas{
    nameTarea = "";
    descripcionTareas = "";
    dia = "";
    mes = "";
    anio = "";
    hora = "";
    minuto = "";
}

export class arrTareas{
    static tareaArr: Tareas[] = [];
}

export class arrTareasString{
    static tareaName: string[] = [];
    static descripcionTareas: string[] = [];
    static dia: string[] = [];
    static mes: string[] = [];
    static anio: string[] = [];
    static hora: string[] = [];
    static minuto: string[] = [];

    static indexSel: number = 0;
}

export class Clase{
    static LclaseArr: Clase[] = [];
    static MAclaseArr: Clase[] = [];
    static MIclaseArr: Clase[] = [];
    static JclaseArr: Clase[] = [];
    static VclaseArr: Clase[] = [];
    
    static LhoraArr: Clase[] = [];
    static MAhoraArr: Clase[] = [];
    static MIhoraArr: Clase[] = [];
    static JhoraArr: Clase[] = [];
    static VhoraArr: Clase[] = [];

    static LhoraFArr: Clase[] = [];
    static MAhoraFArr: Clase[] = [];
    static MIhoraFArr: Clase[] = [];
    static JhoraFArr: Clase[] = [];
    static VhoraFArr: Clase[] = [];
}
export class Profes{
    static nameProfe: string []=[] ;
    static claseProf: string []=[] ;
    static correo: string []=[] ;
}
