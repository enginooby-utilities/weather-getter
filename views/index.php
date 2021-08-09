<?php
include_once "../../dui/_index.php";
// echo Head("Checker", "/css/style.css");
Head('weather getter')
        ->css('/css/style.css')
        ->show();
?>

<body class="flat-style">
        <div class="display-table">
                <div class="display-content ">
                        <div class="container text-center">
                                <h2> How is the <span class="highlight-color">Weather</span>?</h2>
                                <div class="row mt-5 pr-3">
                                        <?php Input(id: 'location', placeholder: 'Location', wrapperClass: 'col-10')->show(); ?>
                                        <?php Button(label: 'Check<i class="fas fa-search ml-2"></i>', id: 'checkBtn', class: 'float-right col-2')->show(); ?>
                                </div>
                                <div class="box-border mt-3">
                                        <h6 id="location-output">-</h6>
                                        <div class="row mt-5    ">
                                                <div class="col-4  my-auto">
                                                        <img src="https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png" alt="Weather icon">
                                                        <p id="description" class="highlight-color">-</p>
                                                </div>
                                                <div class="col-4 my-auto">
                                                        <p id="temperature" class="m-0"> <span id="temperature">- &deg;C</span></p>
                                                </div>
                                                <div class="col-4 my-auto weather-info">
                                                        <p>Wind: <span id="wind">-</span> kmph</p>
                                                        <p>Precip: <span id="precip">-</span> mm</p>
                                                        <p>Pressure: <span id="pressure">-</span> mb</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        <script src="/src/main.js" type="module"></script>
        <script async src="dui/js/main.js" type="module"></script>
</body>

</html>