export enum ErrorCodes {
    InvalidApplicationCommandName = "Invalid application command name, command name includes invalid characters or command name length is less than 0 or more than 100",
    InvalidApplicationCommandOptionName = "Invalid application command option name, option name includes invalid characters or option name length is less than 0 or more than 100",
    ChatInputApplicationCommandDescriptionMaxLength = "Command description max length is 100 and min length is 1",
    ChatInputApplicationCommandOptionsMaxLength = "ChatInput application command options max length is 25",
    EmbedAuthorNameLength = "Embed author name max length is 256",
    EmbedTitleMaxLength = "Embed title max length is 256",
    EmbedDescriptionMaxLength = "Embed description max length in 4096",
    EmbedFooterTextMaxLength = "Embed footer text max length is 2048",
    NumberOptionNegativeNumber = "You cannot use negative numbers",
    NumberOptionIsNotInteger = "The value must me a integer",
    ChatInputApplicationCommandOptionDescriptionMaxLength = "Option description max length is 100 and min length is 1"
}
