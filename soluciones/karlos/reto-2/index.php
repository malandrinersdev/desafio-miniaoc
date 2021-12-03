<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>miniAOC - reto 2</title>
</head>

<body>
    <form>
        <input type="text" name="word">
        <input type="submit">
    </form>

    <?php

    function generateTrollPassword($prefix, $characters, &$permutations)
    {
        if (count($characters) == 1)
            $permutations[] = $prefix . array_pop($characters);
        else {
            for ($i = 0; $i < count($characters); $i++) {
                $tmp = $characters;
                unset($tmp[$i]);

                generateTrollPassword($prefix . $characters[$i], array_values($tmp), $permutations);
            }
        }
    }

    $permutations = array();
    if (isset($_REQUEST['word'])) :
        $characters = str_split($_REQUEST['word']);
        generateTrollPassword("", $characters, $permutations);
        print_r($permutations);
    endif; ?>

</body>

</html>