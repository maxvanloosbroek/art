export interface TourSlide {
    title: string;
    artist: string;
    zaal?: string;
    muziek?: string;
    description: string;
    file: string;
    year?: string;
    material?: string;
    trivia?: string;
    subject?: string;
    size: 'small' | 'medium' | 'large';
}

export interface Tour {
    name: string;
    slides: TourSlide[];
}

export interface Interest {
    name: string;
    enabled: boolean;
}

export interface LearningTopic {
    name: string;
}