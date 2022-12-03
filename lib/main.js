var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import events from 'events';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
(() => __awaiter(void 0, void 0, void 0, function* () {
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
                highestNumberOfCalories = currentTotalCaloriesCounted;
            }
        }
    });
    yield events.once(lineReader, 'close');
    console.log(`Elf index ${elfWithHighestNumberOfCalories} collected ${highestNumberOfCalories}!`);
}))();
//# sourceMappingURL=main.js.map