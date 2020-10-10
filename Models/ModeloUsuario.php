<?php
 
class Usuario
{
    public function Registrar ($Vec)
    {

        $Conexion = new mysqli ("127.0.0.1:3306","root", "", "Mandarino_BD");

        /*echo $Vec[0]. " " .$Vec[1]. " ". $Vec[2]. " ". $Vec[3]. " ". $Vec[4]. " ". $Vec[5]. " ". $Vec[6]." ". $Vec[7]." ". $Vec[8]." ". $Vec[9]. " ". $Vec[10]. " ". $Vec[11]. " ". $Vec[12]. " ". $Vec[13]. " ". $Vec[14]. " ". $Vec[15]. " ". $Vec[16]. " ". $Vec[17]; */



        $Conexion -> query ("call RegistroUsuario('$Vec[0]', $Vec[1], '$Vec[2]', '$Vec[3]', $Vec[4], '$Vec[5]', '$Vec[6]', '$Vec[7]', $Vec[8], '$Vec[9]', '$Vec[10]', '$Vec[11]', '$Vec[12]', '$Vec[13]','$Vec[14]','$Vec[15]', $Vec[16], '$Vec[17]')"); 

        return 1;

    }

}

?>