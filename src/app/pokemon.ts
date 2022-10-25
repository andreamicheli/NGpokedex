export interface Pokemon {
    name: string;
    types: {
        slot: number;
        type: {
            name: string,
            url: string,
        }
    }[];
    image: string[];
    color: string;
    fav?: boolean;
    fight?: boolean;
    new: boolean;


    abilities?: any;
    base_experience: number;
    forms?: any;
    game_indices?: any;
    height: any;
    held_items?: any;
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: any;
    order?: number;
    past_types?: any;
    species?: any;
    weight: number;
    sprites: {
        back_default: string;
        front_default: string;
        other: {
            home: {
                front_default: string;
                [key: string]: any;
            }
            'official-artwork': {
                front_default: string;
            }
            [key: string]: any;
        }
        [key: string]: any;
    };
}


export interface PokeGeneral {
    name: string;
    url: string;
}

export interface API {
    count: number;
    next: string;
    previous: any;
    results: PokeGeneral[];
}

export type Direction = { current: 'list' | 'view' | 'fight' | 'add', prev: 'list' | 'view' | 'fight' | 'add' | null }


