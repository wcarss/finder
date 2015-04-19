<?php
    require "/home/wcarss/wcarss.ca/finder_creds.php";

    $con = mysql_connect("localhost", $USER, $PASS);
    if (!$con) {
        die('connect failed:' . mysql_error());
    }

    $created_at = mysql_real_escape_string($_POST['now']);
    $date = mysql_real_escape_string($_POST['date']);
    $zoom = mysql_real_escape_string($_POST['zoom']);
    $x = mysql_real_escape_string($_POST['x']);
    $y = mysql_real_escape_string($_POST['y']);
    $url = mysql_real_escape_string($_POST['url']);

    mysql_select_db('finder', $con);
    if (!mysql_query("INSERT INTO images (created_at, date, zoom, x, y, url) values ('$created_at', '$date', '$zoom', '$x', '$y', '$url')", $con)) {
        die('insert failed:' . mysql_error());
    }
    mysql_close($con);
