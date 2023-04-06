export type CategoryType = {
  id: number;
  word: SearchKeyword;
};

export type UnsplashResponse = {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
};

export type UnsplashPhoto = {
  id: number;
  urls: Urls;
  alt_description: string;
};

export type PhotoModel = {
  id: number;
  url: string;
  description: string;
};

type Urls = {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
};

export type SearchKeyword =
  | {
      type: 'DEFAULT';
      content: 'Mountain' | 'Beach' | 'Birds' | 'Food';
    }
  | {
      type: 'INPUT_TEXT';
      content: string;
    };

export type SubTitleWord = 'Pictures' | 'Images';
