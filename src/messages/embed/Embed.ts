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

    // if (data.timestamp)
  }
}
