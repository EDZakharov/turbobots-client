export interface IBotConfig {
    targetProfitPercent: string;
    startOrderVolumeUSDT: string;
    insuranceOrderSteps: string;
    insuranceOrderPriceDeviationPercent: string;
    insuranceOrderStepsMultiplier: string;
    insuranceOrderVolumeUSDT: string;
    insuranceOrderVolumeMultiplier: string;
}

export enum InputTypes {
    Text = 'text',
    Number = 'number',
    Email = 'email',
    Password = 'password',
    Checkbox = 'checkbox',
    Radio = 'radio',
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
    Date = 'date',
    Color = 'color',
    File = 'file',
    Range = 'range',
    Hidden = 'hidden',
    Image = 'image',
    Month = 'month',
    Time = 'time',
    Url = 'url',
    Week = 'week',
    Tel = 'tel',
    Search = 'search',
    DateTimeLocal = 'datetime-local',
}

export interface ICustomInput {
    placeholder?: string;
    id: string;
    name: string;
    required?: boolean;
    wrapperStyles?: string;
    labelStyles?: string;
    labelText?: string;
    inputStyles?: string;
    max?: string;
    min?: string;
    step?: string;
    defaultState: string;
}

export interface IBuyOrdersStepsToGrid {
    [key: string]: {
        step: number;
        orderDeviation: number;
        orderSecondaryPairVolume: number;
        orderBasePairVolume: number;
        orderPriceToStep: number;
        orderAveragePrice: number;
        orderTargetPrice: number;
        orderTargetDeviation: number;
        summarizedOrderSecondaryPairVolume: number;
        summarizedOrderBasePairVolume: number;
    };
}
