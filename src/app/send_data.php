<?php
$data = json_decode(file_get_contents("php://input"), true);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "colmenares";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$id = $conn->real_escape_string($data['id_clientes']);
$correo = $conn->real_escape_string($data['cli_correo']);
$nombre = $conn->real_escape_string($data['cli_nombre']);
$apellido = $conn->real_escape_string($data['cli_apellidos']);
$contraseña = $conn->real_escape_string($data['cli_contraseña']);
$estado = $conn->real_escape_string($data['cli_status']);
$fecRegistro = $conn->real_escape_string($data['cli_fecha_registro']);

$sql = "INSERT INTO clientes (id_clientes, cli_correo, cli_nombre, cli_apellidos, cli_contraseña, cli_status, cli_fecha_registro) VALUES ('$id', '$correo', '$nombre','$apellido','$contraseña','$estado','$fecRegistro')";
if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error al insertar datos: " . $conn->error;
}

$conn->close();
?>
