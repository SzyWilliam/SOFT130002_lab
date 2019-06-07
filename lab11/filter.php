<?php
/**
 * Created by IntelliJ IDEA.
 * User: william
 * Date: 2019/6/7
 * Time: 12:17 PM
 */

include "functions.inc.php";
include "Lab11.php";

if (isset($_POST['countryCode']) && isset($_POST['continentCode'])&& isset($_POST['title'])){
    for($index = 0; $index < count($all_images); $index++){
        echo "hello";
    }
}
else{
    echo "what";
}