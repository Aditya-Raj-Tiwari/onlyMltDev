<?php

namespace devMlt\Containers;

use Plenty\Plugin\Templates\Twig;

class devMltContainer
{
    public function call(Twig $twig):string
    {
        return $twig->render('devMlt::Content.css');
    }
} 
