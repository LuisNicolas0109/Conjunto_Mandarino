<?php

$a = $_POST['Text_Nombre_Usuario'];
$b = $_POST['Text_Identificacion'];
$c = $_POST['Select_Tipo_Usuario'];
$d = $_POST['Text_Correo_Usuario'];
$e = $_POST['Text_Telefono_Usuario'];
$f = $_POST['Text_Direccion_Usuario'];
$g = $_POST['Text_LugarNacimiento_Usuario'];
$h = $_POST['Profesion_Usuario'];
$i = $_POST['Experiencia_Usuario'];
$j = $_POST['Titulos_Cursos'];
$k = $_POST['Select_Sexo_Usuario'];
$l = $_POST['Select_Estado_Civil_Usuario'];
$m = $_POST['Input_EPS_Usuario'];
$n = $_POST['Input_Sangre_Usuario'];
$o = $_POST['Text_Crear_Username'];
$p = $_POST['Contrasena_Usuario'];
$q = $_POST['Registrado_Por'];
$r = $_POST['Estado'] = "Activo";

$Vector = [$a, $b, $c, $d, $e, $f, $g, $h, $i, $j, $k, $l, $m, $n, $o, $p, $q, $r];

include "../Models/ModeloUsuario.php";

$Acceso = new Usuario();
$Respuesta = $Acceso -> Registrar($Vector);

if($Respuesta == 1)
{
   echo "Registro Exitoso";
}

?>