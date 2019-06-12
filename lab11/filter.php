<?php
/**
 * Created by IntelliJ IDEA.
 * User: william
 * Date: 2019/6/7
 * Time: 12:17 PM
 */


if(isset($_POST['continent'])){
    $continent = $_POST['continent'];
    $db = new mysqli("localhost:8889", "root", "root", "travel");
    $sql_countries = "SELECT * from Countries Where Continent = '$continent'";
    $country = $db->query($sql_countries);

    echo "<option value=\"0\">Select Country</option>";
    while($result = $country->fetch_assoc()){
        echo '<option value='.$result['ISO'].'>'.$result['CountryName'].'</option>';
    }


}