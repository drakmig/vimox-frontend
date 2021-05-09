export interface Episode {
  _id: string;
  createdAt: string;
  name: string;
  sinopsis: string;
  src: string;
  thumbnail: string;
  duration: number;
  order: number;
  previewImage: number;
  serie: {
    _id: string;
    name: string;
    createdAt: string;
    episodes: string[];
    geners: string[];
    titles: string[];
    sinopsis: string;
    imageSm: string;
    imageMd: string;
    imageLg: string;
    type: string;
    addedByUsers: {
      _id: string;
      user: string;
    }[];
  };
}

export interface GetEpisodesResponse {
  data: Episode[];
  lastPage: string;
  nextPage: string;
  prevPage: string;
  count: number;
}

export interface GetEpisodesParams {
  sort_createdAt?: 'asc' | 'desc';
  of_serieId?: string;
}
