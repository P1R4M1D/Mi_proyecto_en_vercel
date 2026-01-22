import { useState } from "react";

function BodyComponent(props) {
    const {alumnosLista }= props;
    const [mostrar, setMostrar] = useState(false);
    const [alumnos, setAlumnos] = useState(0);


    function BuscarAlumnoID(){
        let ID = document.getElementById("IDa").value;
        const listarAlumnos = async () => {
            if (ID == "") {
                alert("Introduzca un ID");
                return;
            }
            try {
                const response = await fetch(
                "https://servidorclasedaw.onrender.com/alumno8/alumnos",
                );
                if (!response.ok) throw new Error("Error en la petición");
            
                const data = await response.json();
                console.log(data);
            
                setAlumnos(data.find((alumnos) => alumnos.id == ID));
            } catch (error) {
                console.error(error);
            }
            };
        listarAlumnos();
    }

    function EnviarAlumno() {
    let texto = document.getElementById("ALUMNO").value;

    if (texto == "") {
        alert("Introduce los datos del alumno");
        return;
    }

    let alumno;

    try {
        alumno = JSON.parse(texto);
    } catch (e) {
        alert("El formato no es correcto (JSON)");
        return;
    }

    const postAlumno = async () => {
        try {
            const response = await fetch(
                "https://servidorclasedaw.onrender.com/alumno8/alumnos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(alumno)
                }
            );

            if (!response.ok) throw new Error("Error en el POST");

            const data = await response.json();
            console.log(data);

            setAlumnos(data);

        } catch (error) {
            console.error(error);
        }
    };

    postAlumno();
}


    return (
    <div className="relleno">
        <div className="getAlumnos">
            <input type="number" id="IDa" placeholder="1"/>
            <button onClick={BuscarAlumnoID}>Cargar alumnos</button>
                <div className="DatosAlumnos">
                    <p><strong>Nombre:   </strong>   {alumnos.nombre}</p>
                    <p><strong>Apellido1:</strong>   {alumnos.apellido1}</p>
                    <p><strong>Apellido2:</strong>   {alumnos.apellido2}</p>
                    <p><strong>Edad:     </strong>   {alumnos.edad}</p>
                    <p><strong>Genero:   </strong>   {alumnos.sexo}</p>
                    <p><strong>Curso:    </strong>   {alumnos.curso}</p>
                </div>
        </div>

        <div className="postAlumnos">
                <textarea name="" id="ALUMNO"></textarea>
            <button onClick={EnviarAlumno}>Enviar Alumno</button>
                <div className="DatosAlumnos">
                    
                </div>
        </div>


        </div>
    );
}
export default BodyComponent;
