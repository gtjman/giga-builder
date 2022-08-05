interface Locales {
    da?: string;
    de?: string;
    enGB?: string;
    enUS?: string;
    fr?: string;
    hr?: string;
    it?: string;
    lt?: string;
    hu?: string;
    nl?: string;
    no?: string;
    fi?: string;
    svSE?: string;
    vi?: string;
    tr?: string;
    cs?: string;
    el?: string;
    bg?: string;
    ru?: string;
    uk?: string;
    hi?: string;
    th?: string;
    zhCN?: string;
    ja?: string;
    ko?: string;
}
type ChannelTypesData = 0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15
type ApplicationCommandOptionChoiceData = {
    name: string;
    name_localizations?: Locales;
    value: string | number;
}

type ApplicationCommandOptionData = {
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales;
    required?: boolean;
    choices?: ApplicationCommandOptionChoiceData[];
    options?: ApplicationCommandOptionData[];
    channel_types?: ChannelTypesData[];
    min_value?: number;
    max_value?: number;
    min_length?: number;
    max_length?: number;
    autocomplete?: boolean;
}

type CommandOptionTypeData = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

type ChatInputApplicationCommandData = {
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales;
    options?: ApplicationCommandOptionData[];
    dm_permission?: boolean;
    default_permission?: boolean;
    default_member_permissions?: string;
}

type NumberOptionData = {
    type: 10;
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales;
    required?: boolean;
    choices?: ApplicationCommandOptionChoiceData[];
    min_value?: number;
    max_value?: number;
    autocomplete?: boolean;
}

export {
    Locales,
    ChannelTypesData,
    ApplicationCommandOptionChoiceData,
    ApplicationCommandOptionData,
    CommandOptionTypeData,
    ChatInputApplicationCommandData,
    NumberOptionData
}
