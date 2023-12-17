export interface ContentItem {
    value: string;
    paragraph?: string;
    requirements?: string;
    list?: string[];
    description?: string;
  }
  
  export interface RelatedContentItem {
    value: string;
    description: string;
  }
  
  export interface PageData {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: ContentItem[];
    relatedContent: RelatedContentItem[];
  }
  

  