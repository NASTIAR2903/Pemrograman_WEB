<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variasi Segitiga</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin-top: 30px;
        }
        .item {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        pre {
            font-size: 20px;
            line-height: 1.2;
            margin: 0;
            white-space: pre-wrap;
        }
        p {
            margin-top: 15px;
            font-size: 18px;
            color: #555;
        }
    </style>
</head>
<body>

<div class="container">
    <!-- Segitiga Sama Sisi -->
    <div class="item">
        <?php
        function segitigaSamaSisi($tinggi) {
            echo "<pre>";
            for ($i = 1; $i <= $tinggi; $i++) {
                echo str_repeat(" ", $tinggi - $i);
                echo str_repeat("*", 2 * $i - 1);
                echo "\n";
            }
            echo "</pre>";
        }
        segitigaSamaSisi(5);
        ?>
        <p>Segitiga Sama Sisi</p>
    </div>

    <!-- Segitiga Sama Sisi Terbalik -->
    <div class="item">
        <?php
        function segitigaSamaSisiTerbalik($tinggi) {
            echo "<pre>";
            for ($i = $tinggi; $i >= 1; $i--) {
                echo str_repeat(" ", $tinggi - $i);
                echo str_repeat("*", 2 * $i - 1);
                echo "\n";
            }
            echo "</pre>";
        }
        segitigaSamaSisiTerbalik(5);
        ?>
        <p>Segitiga Sama Sisi Terbalik</p>
    </div>
</div>

</body>
</html>
