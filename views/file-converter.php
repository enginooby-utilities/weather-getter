<?php

declare(strict_types=1);

// phpToHtml(dirname(__FILE__) . '/index.php');
phpToHbs(dirname(__FILE__) . '/index.php', dirname(__FILE__) . '/index.hbs');

function phpToHtml(string $phpInputPath, string $htmlOutputPath = null)
{
        $htmlOutputPath = $htmlOutputPath ??  str_replace('.php', '.html', $phpInputPath);
        ob_start();
        include_once $phpInputPath;
        file_put_contents($htmlOutputPath, ob_get_clean());
}

function phpToHbs(string $phpInputPath, string $OutputPath = null)
{
        $OutputPath = $OutputPath ??  str_replace('.php', '.hbs', $OutputPath);
        ob_start();
        include_once $phpInputPath;
        file_put_contents($OutputPath, ob_get_clean());
}
