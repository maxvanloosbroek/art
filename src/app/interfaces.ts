export interface TourSlide {
    title: string;
    image: string;
    audio: string;
    music?: string;
    description: string;
}

export interface Tour {
    title: string;
    slides: TourSlide[];
}

export interface Interest {
    name: string;
    enabled: boolean;
}

export interface LearningTopic {
    name: string;
}