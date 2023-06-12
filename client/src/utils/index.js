import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompts){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompts){
        getRandomPrompt(prompts)
    }

    return randomPrompt;
}