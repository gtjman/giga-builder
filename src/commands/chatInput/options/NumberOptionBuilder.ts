import { ApplicationCommandOptionChoiceData, ApplicationCommandOptionData, Locales } from "..";
import { ErrorCodes } from "../../../errors";

export class NumberOptionBuilder {
    private readonly type = 10;
    private name?: string;
    private name_localizations?: Locales;
    private description?: string;
    private description_localizations?: Locales;
    private required = false;
    private choices?: ApplicationCommandOptionChoiceData[];
    private min_value?: number;
    private max_value?: number;
    private autocomplete?: boolean;
    constructor(data?: ApplicationCommandOptionData) {
        this.name = data?.name;
    };

    /**
     * Set the option name
     * @param {string} name - 1-32 character name
     */

    setName(name: string) {
        let ChatInputApplicationCommandOptionNameRegex = new RegExp(/^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$/gi);
        let test = ChatInputApplicationCommandOptionNameRegex.test(name);
        if (test) {
            this.name = name;
            return this;
        } else throw new Error(ErrorCodes.InvalidApplicationCommandOptionName);
    };

    /**
     * Set the description of the option
     * @param {string} description - Description of the option, 1-100 characters.
     */

    setDescription(description: string) {
        if (description.length > 100 || description.length < 1) {
            throw new Error(ErrorCodes.ChatInputApplicationCommandOptionDescriptionMaxLength);
        } else {
            this.description = description;
            return this;
        };
    };

    /**
     * @param {boolean} mode - If the parameter is required or optional, (default is false)
     */

    setRequired(mode: boolean) {
        this.required = mode;
        return this;
    };

    /**
     * Set the min_value of the number option
     * @param {number} value - If the option is an INTEGER or NUMBER type, the minimum value permitted
     */

    setMinValue(value: number) {
        if (value < 0) {
            throw new Error(ErrorCodes.NumberOptionNegativeNumber)
        };
        if (!Number.isInteger(value)) {
            throw new Error(ErrorCodes.NumberOptionIsNotInteger)
        };
        this.min_value = value;
        return this;
    };

    /**
     * Set the max_value of the number option
     * @param {number} value - If the option is an INTEGER or NUMBER type, the maximum value permitted
     */

    setMaxValue(value: number) {
        if (value < 0) {
            throw new Error(ErrorCodes.NumberOptionNegativeNumber);
        };
        if (!Number.isInteger(value)) {
            throw new Error(ErrorCodes.NumberOptionIsNotInteger);
        };
        this.max_value = value;
        return this;
    };

    /**
     * Set the autocomplete
     * @param {boolean} mode - If autocomplete interactions are enabled for this STRING, INTEGER, or NUMBER type option
     */

    setAutoComplete(mode: boolean) {
        this.autocomplete = mode;
        return this;
    };

    /**
     * Set the option choices
     * @param {ApplicationCommandOptionChoiceData[]} choices - Choices for STRING, INTEGER, and NUMBER types for the user to pick from, max 25
     */

    setChoices(choices: ApplicationCommandOptionChoiceData[]) {
        if (choices.length > 25) {
            throw new Error(ErrorCodes.ChatInputApplicationCommandOptionChoicesMaxLength);
        };
        this.choices = choices;
        return this;
    };
}