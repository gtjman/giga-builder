import {
  ApplicationCommandOptionData,
  ChatInputApplicationCommandData,
} from ".";
import { ErrorCodes } from "../../errors";

export class ChatInputCommandBuilder {
  /**
   * Total created chat input commands length
   * @example
   * const totalCommandsSize = ChatInputCommandBuilder.size;
   *
   * console.log(totalCommandsSize);
   */
  static size = 0;
  private readonly type = 1;
  private name?: string;
  private options?: ApplicationCommandOptionData[];
  private description?: string;
  private dm_permission?: boolean;
  private default_permission?: boolean;
  private default_member_permissions?: string;

  /**
   *
   * @param { ChatInputApplicationCommandData } data - Create a ChatInputApplicationCommand from a json data (Not required)
   * @example
   * const command = new ChatInputCommandBuilder({
   * name: "ping",
   * description: "Replies with pong 🏓"
   * })
   */

  constructor(data?: ChatInputApplicationCommandData) {
    ChatInputCommandBuilder.size++;

    this.name = data?.name;
    this.description = data?.description;
    this.options = data?.options;
    this.dm_permission = data?.dm_permission;
    this.default_permission = data?.default_permission;
    this.default_member_permissions = data?.default_member_permissions;
  }
  /**
   * Set the name of the command
   * @param {string} name - Name of the command, 1-32 characters
   */
  setName(name: string) {
    let ChatInputApplicationCommandNameRegex = new RegExp(
      /^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$/gi
    );
    let test = ChatInputApplicationCommandNameRegex.test(name);
    if (test) {
      this.name = name;
      return this;
    } else throw new Error(ErrorCodes.InvalidApplicationCommandName);
  }

  /**
   * Set the description of the command
   * @param {string} description - Description of the command, 1-100 characters.
   */
  setDescription(description: string) {
    if (description.length > 100 || description.length < 1) {
      throw new Error(
        ErrorCodes.ChatInputApplicationCommandDescriptionMaxLength
      );
    } else {
      this.description = description;
      return this;
    }
  }

  /**
   * Set the dm_permission of the command
   * @param {boolean} mode - Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
   */
  setDmPermission(mode: boolean) {
    this.dm_permission = mode;
    return this;
  }

  /**
   * Set the default_permission of the command
   * @param {boolean} mode - Not recommended for use as field will soon be deprecated. Indicates whether the command is enabled by default when the app is added to a guild, defaults to true
   */
  setDefaultPermission(mode: boolean) {
    this.default_permission = mode;
    return this;
  }

  /**
   * Set the default_member_permissions of the command
   * @param {boolean} mode
   */
  setDefaultMemberPermissions(permissions: string) {
    this.default_member_permissions = permissions;
    return this;
  }

  /**
   * Set the options of the command
   * @param {ApplicationCommandOptionType} options - Parameters for the command, max of 25
   */
  setOptions(options: ApplicationCommandOptionData[]) {
    if (options.length > 25)
      throw new Error(ErrorCodes.ChatInputApplicationCommandOptionsMaxLength);
    this.options = options;
    return this;
  }
}
