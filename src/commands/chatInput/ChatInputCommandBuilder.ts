import { ApplicationCommandOptionType } from ".";

export class ChatInputCommandBuilder {
    name: string | undefined;
    type: number;
    options: ApplicationCommandOptionType[] | undefined;
    description: string | undefined;
    dm_permission: boolean | undefined;
    default_permission: boolean | undefined;
    constructor (){
        this.type = 1
    }
/**
 * Set the name of the command
 * @param {string} name - Name of the command, 1-32 characters
 */
    setName(name: string){
        let ChatInputApplicationCommandNameRegex = new RegExp(/^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$/gi);
        let test = ChatInputApplicationCommandNameRegex.test(name);
        if(test){
        this.name = name;
        return this;
        } else throw new Error("Invalid application command name, command name includes invalid characters or command name length is less than 0 or more than 100");
    };
/**
 * Set the description of the command
 * @param {string} description - Description of the command, 1-100 characters.
 */
    setDescription(description: string){
    if(description.length > 100 || description.length < 1){
     throw new Error("Command description max length is 100 and min length is 1");
    } else {
    this.description = description;
    return this;
    };
    };
/**
 * Set the dm_permission of the command
 * @param {boolean} mode - Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
 */
    setDmPermission(mode: boolean){
    this.dm_permission = mode;
    return this;
    };
/**
 * Set the default_permission of the command
 * @param {boolean} mode - Not recommended for use as field will soon be deprecated. Indicates whether the command is enabled by default when the app is added to a guild, defaults to true
 */
    setDefaultPermission(mode: boolean){
    this.default_permission = mode;
    return this;
    };
    /**
 * Set the options of the command
 * @param {ApplicationCommandOptionType} options - Parameters for the command, max of 25
 */
    setOptions(options: ApplicationCommandOptionType[]){
    if(options.length > 25) throw new Error("ChatInput application command options max length is 25");
    this.options = options;
    return this;
    };
}
