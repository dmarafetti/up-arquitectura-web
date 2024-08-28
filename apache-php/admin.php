<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo "Admin page" ?></title>
    <link href="./css/styles.css" rel="stylesheet" />
</head>
<body>

   <?php

        $name = $_POST['name'];

        // $name = $_GET['name'];

    ?>

    <h1>Admin page</h1>

    <p><?= $name ?></p>

</body>
</html>
