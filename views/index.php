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
                                <?php TitleBar('Weather Checker')->show() ?>
                                <h2> How is the <span class="highlight-color">Weather</span>?</h2>
                                <?php
                                Flexbox()
                                        ->class('mt-5')
                                        ->componentClass('my-auto')
                                        ->add(Input(id: 'location', placeholder: 'Location', wrapperClass: 'col-10 pr-2 pl-0'))
                                        ->add(Button(id: 'checkBtn', label: 'Check<i class="fas fa-search ml-2"></i>', wrapperClass: 'col-2'))
                                        ->show();
                                ?>
                                <div class="box-border mt-3">
                                        <h6 id="location-output">Wroclaw - Poland</h6>
                                        <div class="row mt-5    ">
                                                <div class="col-4  my-auto">
                                                        <img src="https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png" alt="Weather icon">
                                                        <p id="description" class="highlight-color"><b>Sunny</b></p>
                                                </div>
                                                <div class="col-4 my-auto">
                                                        <p id="temperature" class="m-0"> <span id="temperature">15 &deg;C</span></p>
                                                </div>
                                                <div class="col-4 my-auto weather-info">
                                                        <p>Wind: <span id="wind">8</span> kmph</p>
                                                        <p>Precip: <span id="precip">0</span> mm</p>
                                                        <p>Pressure: <span id="pressure">969</span> mb</p>
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