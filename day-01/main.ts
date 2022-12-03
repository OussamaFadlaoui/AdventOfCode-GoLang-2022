import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import events from 'events';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);


(async () => {
    const lineReader = readline.createInterface({
        input: fs.createReadStream(path.resolve(__dirname, '../resources/day-01/inputs.txt')),
        terminal: false,
    });


    let elfWithHighestNumberOfCalories = 0;
    let highestNumberOfCalories = 0;
    let currentElfIndex = 0;
    let currentTotalCaloriesCounted = 0;

    lineReader.on('line', line => {
        if (line === '') {
            currentElfIndex++;
            currentTotalCaloriesCounted = 0;
            return;
        }

        const numberOfCaloriesParsed = Number.parseInt(line);

        if (!isNaN(numberOfCaloriesParsed)) {
            currentTotalCaloriesCounted += numberOfCaloriesParsed;
            
            if (currentTotalCaloriesCounted > highestNumberOfCalories) {
                elfWithHighestNumberOfCalories = currentElfIndex;
                highestNumberOfCalories = currentTotalCaloriesCounted
            }
        }
    });

    await events.once(lineReader, 'close');

    console.log(`Elf index ${elfWithHighestNumberOfCalories} collected ${highestNumberOfCalories}!`)
})()
