export interface ITreeGridJson {
    id: number;
    name: string;
    details: [number];
    children?: ITreeGridJson[];
}