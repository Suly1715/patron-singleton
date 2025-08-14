<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$user = "Sulay";
$pass = "1102118336";
$db = "gestion_repuestos";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["error" => $conn->connect_error]));
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
        $result = $conn->query("SELECT * FROM repuestos ORDER BY fecha_registro DESC");
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = [
                "id" => $row["id"],
                "nombre" => $row["nombre"],
                "categoria" => $row["categoria"],
                "precio" => $row["precio"]
            ];
        }
        echo json_encode($data);
        break;

    case "POST":
        $input = json_decode(file_get_contents("php://input"), true);
        $stmt = $conn->prepare("INSERT INTO repuestos (nombre, categoria, precio) VALUES (?, ?, ?)");
        $stmt->bind_param("ssd", $input['nombre'], $input['categoria'], $input['precio']);
        $stmt->execute();
        echo json_encode(["success" => true]);
        break;

    case "PUT":
        $input = json_decode(file_get_contents("php://input"), true);
        $stmt = $conn->prepare("UPDATE repuestos SET nombre=?, categoria=?, precio=? WHERE id=?");
        $stmt->bind_param("ssdi", $input['nombre'], $input['categoria'], $input['precio'], $input['id']);
        $stmt->execute();
        echo json_encode(["success" => true]);
        break;

    case "DELETE":
        $input = json_decode(file_get_contents("php://input"), true);
        $stmt = $conn->prepare("DELETE FROM repuestos WHERE id=?");
        $stmt->bind_param("i", $input['id']);
        $stmt->execute();
        echo json_encode(["success" => true]);
        break;
}

$conn->close();
?>