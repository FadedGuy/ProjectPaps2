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
}

export class Profesores{
    nameProfe = "";
    claseProf = "";
    correo = "";
}
