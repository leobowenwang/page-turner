<?php

// Worked with Sandra Vrdoljak


// Allow every Webpage to use the service
header("Access-Control-Allow-Origin: *");
// Defines the responding Content-Type
header("Content-Type: application/json; charset=UTF-8");
// Defines the supported Methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");


// Save the requested method in a variable (GET, POST, PUT, DELETE, ...)
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));

// saves the value of the first part [e.g.: book] of the path in the variable $product_type if the first part of the path is set and not empty
$product_type = isset($request[0]) && !empty($request[0]) ? $request[0] : NULL;
// saves the value of the second part [e.g.: 1] of the path in the variable $product_type if the second part of the path is set and not empty
$product_id = isset($request[1]) && !empty($request[1]) ? $request[1] : NULL;

// save the body of the request in der variable $payload
$payload = file_get_contents('php://input');
echo $payload;



// save all files (and not the directories) in the $files array
$files = array_filter(scandir('recensions/'), function ($item) {
    return !is_dir('recensions/' . $item);
});

// payload
$payload_object = json_decode($payload);


// Validate JSON
if ($payload_object === NULL && !empty($payload))
{
    echo "Unprocessable Entity </br>";
    echo $payload;
    http_response_code(422);
    die();
}

$path = getcwd();

switch ($method) {
    case 'GET':
        // if no id specified show all books
        if (!file_exists("$path/recensions/$product_id")) {
            http_response_code(404);
        } else {
            // return the info for a specific book by id
            echo(file_get_contents('recensions/' . $product_id));
            http_response_code(200);
        }
        break;
    case 'POST':
        if (is_null($product_id)) {
            echo "test";
            $id = max($files) + 1;
            $content = file_put_contents("$path/recensions/$id", $payload);
            http_response_code(201);
        } elseif (!file_exists("$path/recensions/$product_id")) {
                    $path = getcwd();
                    file_put_contents("$path/recensions/$product_id", $payload);
                    http_response_code(201);
                    break;
            } else {
                http_response_code(409);
            }
        break;
    case 'PUT':
        if (file_exists("$path/recensions/$product_id")) { //wenn es ein file gibt
            file_put_contents("$path/recensions/$product_id", $payload);
            http_response_code(200);
        } else {
            http_response_code(404);
        }
         break;
    case 'DELETE':
        if (file_exists("$path/recensions/$product_id")) { //wenn es ein file gibt
            unlink("$path/recensions/$product_id");
            http_response_code(200);
        } else {
            http_response_code(404);
        }
        break;
    default :
        http_response_code(501);
}
?>