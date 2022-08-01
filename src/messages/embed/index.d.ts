export interface EmbedData {
  author?: EmbedAuthorData;
  title?: string;
  description?: string;
  url?: string;
  color?: number;
  footer?: EmbedFooterData;
  thumbnail?: EmbedThumbnailData;
  timestamp?: string;
  image?: EmbedImageData;
  video?: EmbedVideoData;
  fields?: EmbedFieldData[];
}

type EmbedAuthorData = {
  /**
   * name of author
   */
  name: string;
  /**
   * url of author
   */
  url?: string;
  /**
   * url of author icon (only supports http(s) and attachments)
   */
  icon_url?: string;
  /**
   * a proxied url of author icon
   */
  proxy_icon_url?: string;
};

type EmbedFooterData = {
  /**
   * footer text
   */
  text: string;
  /**
   * url of footer icon (only supports http(s) and attachments)
   */
  icon_url?: string;

  /**
   * 	a proxied url of footer icon
   */
  proxy_icon_url?: string;
};

type EmbedImageData = {
  /**
   * source url of image (only supports http(s) and attachments)
   */
  url: string;

  /**
   * a proxied url of the image
   */
  proxy_url?: string;
  /**
   * height of image
   */
  height?: number;
  /**
   * width of image
   */
  width?: number;
};

export type EmbedThumbnailData = {
  /**
   * source url of thumbnail (only supports http(s) and attachments)
   */
  url: string;

  /**
   * a proxied url of the thumbnail
   */
  proxy_url?: string;
  /**
   * height of thumbnail
   */
  height?: number;
  /**
   * width of thumbnail
   */
  width?: number;
};

export type EmbedVideoData = {
  /**
   * source url of video
   */
  url?: string;

  /**
   * a proxied url of the video
   */
  proxy_url?: string;
  /**
   * height of video
   */
  height?: number;
  /**
   * width of video
   */
  width?: number;
};

export type EmbedFieldData = {
  /**
   * name of the field
   * */
  name: string;
  /**
   * value of the field
   */
  value: string;
  /**
   * whether or not this field should display inline
   */
  inline?: boolean;
};
