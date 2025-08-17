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
    http_response_code(500);
    echo json_encode(["error" => $conn->connect_error]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
        $result = $conn->query("SELECT * FROM repuestos ORDER BY id DESC"); 
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
        if (!$input) { echo json_encode(["error" => "Datos inválidos"]); exit; }

        if (!isset($input['nombre']) || !isset($input['categoria']) || !isset($input['precio'])) {
        echo json_encode(["error" => "Faltan datos"]);
        exit;
        }


        $stmt = $conn->prepare("INSERT INTO repuestos (nombre, categoria, precio) VALUES (?, ?, ?)");
        $stmt->bind_param("ssd", $input['nombre'], $input['categoria'], $input['precio']);
        if ($stmt->execute()) {
            echo json_encode(["success" => true, "id" => $stmt->insert_id]);
        } else {
            echo json_encode(["error" => $stmt->error]);
        }
        break;

    case "PUT":
        $input = json_decode(file_get_contents("php://input"), true);
        if (!$input || !isset($input['id'])) { echo json_encode(["error" => "Datos inválidos"]); exit; }

        $input['id'] = intval($input['id']);

        $stmt = $conn->prepare("UPDATE repuestos SET nombre=?, categoria=?, precio=? WHERE id=?");
        $stmt->bind_param("ssdi", $input['nombre'], $input['categoria'], $input['precio'], $input['id']);
        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["error" => $stmt->error]);
        }
        break;

    case "DELETE":
        $input = json_decode(file_get_contents("php://input"), true);
        if (!$input || !isset($input['id'])) { echo json_encode(["error" => "ID requerido"]); exit; }

        $stmt = $conn->prepare("DELETE FROM repuestos WHERE id=?");
        $stmt->bind_param("i", $input['id']);
        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["error" => $stmt->error]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método no permitido"]);
}

$conn->close();
?>