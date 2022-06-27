import { RandomGenerator } from './random-generator';
import '../css/main.scss';
import 'jquery';

const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    outputParagraph.text(RandomGenerator.randomInteger(1, 500));
};

const buttonRndInt = jQuery('#randomInt');
const buttonRndRange = $('#randomRange');

buttonRndInt.click(outputRandomInt);
buttonRndRange.click(outputRandomRange);