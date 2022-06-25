export interface MovieInfo {
  id: number;
  title: string;
  director: string;
  description: string;
  year: number;
  coverImage: string;
}

export interface PaginationInfo {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}
