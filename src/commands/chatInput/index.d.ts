export interface Locales {
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
    ru: string;
    uk: string;
    hi: string;
    th: string;
    zhCN: string;
    ja: string;
    ko: string;
}
export type ChannelTypes = 0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15
export type ApplicationCommandOptionChoiceType = {
    name: string;
    name_localizations?: Locales;
    value: string | number;
}
export type ApplicationCommandOptionType = {
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales;
    required?: boolean;
    choices?: ApplicationCommandOptionChoiceType[];
    options?: ApplicationCommandOptionType[];
    channel_types?: ChannelTypes[];
    min_value?: number;
    max_value?: number;
    min_length?: number;
    max_length?: number;
    autocomplete?: boolean;
}

export type CommandOptionTypeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11