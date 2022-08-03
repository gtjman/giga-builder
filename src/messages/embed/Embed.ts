import {
  EmbedData,
  EmbedAuthorData,
  EmbedFieldData,
  EmbedFooterData,
  EmbedImageData,
  EmbedThumbnailData,
  EmbedVideoData,
} from ".";

export default class Embed implements EmbedData {
  private type = "rich";

  /**
   * the author data of the embed
   */
  author?: EmbedAuthorData;

  /**
   * title of the embed
   */
  title?: string;

  /**
   * description of the embed
   */
  description?: string;

  /**
   * url of the embed
   */
  url?: string;

  /**
   * the color code of the embed
   */
  color?: number;

  /**
   * the footer data of the embed
   */
  footer?: EmbedFooterData;

  /**
   * the thumbnail data of the embed
   */
  thumbnail?: EmbedThumbnailData;

  /**
   * timestamp of the element in ISO8601 format
   */
  timestamp?: string;

  /**
   * the image data of the embed
   */
  image?: EmbedImageData;

  /**
   * the video data of the embed
   */
  video?: EmbedVideoData;

  /**
   * the fields of the embed
   */
  fields?: EmbedFieldData[];

  /**
   * @param data - API Embed Object
   */
  constructor(data?: EmbedData) {
    this.author = data?.author;
    this.title = data?.title;
    this.description = data?.description;
    this.url = data?.url;
    this.color = data?.color;
    this.footer = data?.footer;
    this.thumbnail = data?.thumbnail;
    this.image = data?.image;
    this.video = data?.video;
    this.fields = data?.fields;

    if (data?.timestamp)
      this.timestamp = new Date(data.timestamp).toISOString();
  }

  /**
   * set embed's author
   * @param options - author name or data object
   * @param icon - icon url
   * @example
   * const embed = new Embed();
   *
   * const avatarURL = "https://cdn.discordapp.com/avatars/697194915352019035/93ff77b264f4df9f4cc342763bd3535d.png?size=1024"
   * // multi params
   * embed.setAuthor("molo", avatarURL)
   *
   * // options object
   * embed.setAuthor({
   *  name: "molo",
   *  icon_url: avatarURL
   * })
   */
  setAuthor(
    options: EmbedAuthorData | EmbedAuthorData["name"] | null,
    icon?: EmbedAuthorData["icon_url"]
  ): Embed {
    if (options && typeof options === "object") {
      if (options.name.length > 256) throw new Error();
      this.author = options;
    } else {
      if (options) {
        if (options.length > 256) throw new Error();
        this.author = { name: options };
        if (icon) this.author.icon_url = icon;
      } else this.author = undefined;
    }

    return this;
  }

  /**
   * set embed's title
   */
  setTitle(title: string | null): Embed {
    if (typeof title === "string" && title.length > 256) throw new Error();
    this.title = title ?? undefined;
    return this;
  }

  /**
   * set embed's description
   */
  setDescription(description: string | null): Embed {
    if (typeof description === "string" && description.length > 4096)
      throw new Error();
    this.description = description ?? undefined;
    return this;
  }

  /**
   * set the url of the embed
   */
  setURL(url: string): Embed {
    this.url = url;
    return this;
  }

  // setColor(color: string): Embed {}

  /**
   * set embed's footer
   * @param options - footer text or data object
   * @param icon - icon url
   * @example
   * const embed = new Embed();
   *
   * const iconURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/600px-Instagram-Icon.png"
   * // multi params
   * embed.setFooter("Instagram", iconURL)
   *
   * // options object
   * embed.setAuthor({
   *  text: "Instagram",
   *  icon_url: iconURL
   * })
   */
  setFooter(
    options: EmbedFooterData | EmbedFooterData["text"] | null,
    icon?: EmbedFooterData["icon_url"]
  ): Embed {
    if (options && typeof options === "object") {
      if (options.text.length > 2048) throw new Error();
      this.footer = options;
    } else {
      if (options) {
        if (options.length > 2048) throw new Error();
        this.footer = { text: options };
        if (icon) this.footer.icon_url = icon;
      } else this.footer = undefined;
    }

    return this;
  }

  /**
   * set embed's timestamp
   */
  setTimestamp(timestamp?: number | Date | null) {
    if (timestamp === undefined) timestamp = Date.now();

    this.timestamp = timestamp ? new Date(timestamp).toISOString() : undefined;
    return this;
  }

  /**
   * set embed's thumbnail
   * @param options thumbnail url or data object
   */
  setThumbnail(
    options: EmbedThumbnailData | EmbedThumbnailData["url"] | null
  ): Embed {
    if (options && typeof options === "object") this.thumbnail = options;
    else this.thumbnail = options ? { url: options } : undefined;

    return this;
  }

  /**
   * set embed's image
   * @param options image url or data object
   */
  setImage(options: EmbedImageData | EmbedImageData["url"] | null): Embed {
    if (options && typeof options === "object") this.image = options;
    else this.image = options ? { url: options } : undefined;

    return this;
  }

  /**
   * set embed's video
   * @param options video url or data object
   */
  setVideo(options: EmbedVideoData | EmbedVideoData["url"] | null): Embed {
    if (options && typeof options === "object") this.video = options;
    else this.video = options ? { url: options } : undefined;

    return this;
  }
}
