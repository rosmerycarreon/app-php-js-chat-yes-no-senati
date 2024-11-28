<?php

header("Acces-Control-Allow: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$metodo = $_SERVER['REQUEST_METHOD'];
$repuesta = [];
switch ($metodo) {
    case 'GET':
        $repuesta = [
            'mensaje'=>'Metodo Get correcto',
            
            'data'=> $_GET
        ];
        break;
    case 'POST':
        $data_entrante = json_decode(file_get_contents("php://input"),true);
        $repuesta = [
            'mensaje'=> 'Metodo Post de retorno',
            'data'=> $data_entrante,
        ];
        break;
    case 'PUT':
        $data_entrante = json_decode(file_get_contents("php://input"),true);
        $respuesta = [
            'mensaje'=> 'Metodo Put Correcto',
            'data' => $data_entrante
                ];
                break;
    case 'DELETE':
        $dataEntrante = json_decode(file_get_contents("php://input"), true);
        $respuesta = [
            'mensaje' => 'Metodo DELETE correcto',
            'data' => $dataEntrante
                ];
                break;
    default:
        # code...
        break;
}
echo json_encode($repuesta);