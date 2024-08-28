<?php

        $count = $_GET['count'];

        for ($x = 0; $x <= $count; $x++) {
            echo "<tr><td>" . $x . "</td><td>a</td><td>b</td><td><a href=\"edit.php?id=$x\">edit</<a></td></tr>";
        }

?>