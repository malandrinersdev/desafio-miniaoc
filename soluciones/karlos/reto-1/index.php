<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>miniAOC - reto 1</title>
</head>

<body>
    <?php
    $list = ['hola@somoshackersastutos.com', 'ambrosio@outlook.com', 'coco@malandriners.dev', 'hello@somoshackersastutos.com', 'ambrosio@outlook.com', 'ciao@somoshackersastutos.com'];

    function findSmartHackers(array $list): array
    {
        // $hackers = [];
        foreach ($list as $hacker) {
            if (str_contains($hacker, '@somoshackersastutos.com')) {
                $hackers[] = $hacker;
            }
        }
        return $hackers;
    }

    // var_dump(findSmartHackers($list));
    foreach (findSmartHackers($list) as $hacker) : ?>
        <p><?php echo $hacker; ?></p>
    <?php endforeach;
    ?>
</body>

</html>