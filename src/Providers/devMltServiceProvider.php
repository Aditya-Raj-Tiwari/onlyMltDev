<?php

namespace devMlt\Providers;

use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\Templates\Twig;
use Plenty\Modules\Webshop\Template\Providers\TemplateServiceProvider;
use IO\Helper\TemplateContainer;
use IO\Extensions\Functions\Partial;
use IO\Helper\ResourceContainer;


/**
 * Class  devMltServiceProvider
 * @package  devMlt\Providers
 */
class  devMltServiceProvider extends TemplateServiceProvider
{
    const PRIORITY = 0;

    public function register()
    {

    }

    public function boot(Twig $twig, Dispatcher $dispatcher)
    {


        // Override partials
        $dispatcher->listen('IO.init.templates', function (Partial $partial) {
            $partial->set('header', 'devMlt::PageDesign.Partials.Header.Header');
            $partial->set('page-design', 'devMlt::PageDesign.PageDesign');
            $partial->set('footer', 'devMlt::PageDesign.Partials.Footer');
            return false;
        }, 0);

        // Override PageMeta
        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::PageDesign.Partials.PageMetadata');
        }, 0);

        // Override Homepage
        $dispatcher->listen('IO.tpl.home', function (TemplateContainer $container)
        {
            $container->setTemplate('devMlt::Homepage.Homepage');
            return false;
        }, 0);

        // Override Category View
//         $dispatcher->listen('IO.tpl.category.item', function (TemplateContainer $container) {
//             $container->setTemplate('devMlt::Category.Item.CategoryItem');
//             return false;
//         }, 0);

        // Override Single Item
//         $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
//             $container->addScriptTemplate('devMlt::Item.Components.SingleItem');
//         }, 0);

        $dispatcher->listen('IO.tpl.wish-list', function (TemplateContainer $container)
        {
            $container->setTemplate('devMlt::WishList.WishListView');
            return false;
        },0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::Category.Item.Partials.FilterAssets');
        }, 0);

//         $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
//             $container->addScriptTemplate('devMlt::ItemList.Components.CategoryItem');
//         }, 0);


//         $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
//             $container->addScriptTemplate('devMlt::Item.Components.ItemPrice');
//         }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::Item.Components.ItemAvailability');
        }, 0);

//         $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
//             $container->addScriptTemplate('devMlt::Item.Components.QuantityInput');
//         }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::PageDesign.Partials.Header.WishListCount');
        }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::Item.Components.AddToWishList');
        }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::ItemList.Components.ItemStoreSpecial');
        }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::ItemList.Components.Filter.ItemFilterList');
        }, 0);
//
        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::ItemList.Components.Filter.ItemFilterPrice');
        }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::ItemList.Components.ItemSearch');
        }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::ItemList.Components.SearchSuggestionItem');
        }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::Item.Components.OrderPropertyListItem');
        }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::Item.Components.ItemImageCarousel');
        }, 0);

        $dispatcher->listen("IO.Resources.Import", function (ResourceContainer $container) {
            $container->addScriptTemplate('devMlt::Item.Components.VariationSelect');
        }, 0);

        $dispatcher->listen("IO.Resources.Import", function(ResourceContainer $container)
        {
           $container->addScriptTemplate('devMlt::WishList.WishListItem');
        },0);

        $dispatcher->listen("IO.Resources.Import", function(ResourceContainer $container)
        {
           $container->addScriptTemplate('devMlt::WishList.AddToBasketInWishList');
        },0);

        {
            $this->overrideTemplate("Ceres::PageDesign.Partials.PageMetadata", "devMlt::PageDesign.Partials.PageMetadata");
        }
    }
}