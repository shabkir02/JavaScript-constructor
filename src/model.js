import image from './assets/image.jpg';
import {TitleBlock, TextBlock, TextColumnsBlock, ImajeBlock} from './classes/blocks';
import {css} from './utils';

export const model = [
    new TextBlock('OUR COMPANY', {
        styles: 'text-align: center; font-size: 15px; padding-top: 20px;'
    }),
    
    new TitleBlock('Bring your ideas to life', {
        // styles: 'text-align: center; min-height: 150px; padding-top: 50px;'
        styles: css({
            'text-align': 'center',
            'min-height': '150px',
            'padding-top': '50px'
        })
    }),

    new TextBlock("Anything you've even dreamed about is possible to realise just at the moment when you decided to win.", {
        styles: 'text-align: center; font-size: 20px; padding-top: 20px;'
    }),

    new TextColumnsBlock([
        "Anything you've even dreamed about is possible to realise just at the moment when you decided to win.",
        "Anything you've even dreamed about is possible to realise just at the moment when you decided to win.",
        "Anything you've even dreamed about is possible to realise just at the moment when you decided to win."
    ], {
        styles: 'padding: 50px 50px;'
    }),

    new ImajeBlock(image, {
        styles: 'padding: 2rem 0;',
        alt: 'ms image',
        imageStyles: 'width: 500px; text-align: center; display: block; margin: 0 auto;'
    })
];