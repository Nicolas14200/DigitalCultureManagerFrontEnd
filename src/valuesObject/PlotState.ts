export interface PlotState {
    id:string,
    name: string,
    codeName: string,
    width: number,
    heigth: number,
    area: number,
    ph: number,
    pebbles:number, 
    plank: number,
    series:[{
        vegetableVariety: string,
        nbPlank: number
    }],
    subPlot:string[],
    eventCulture:string[],
}