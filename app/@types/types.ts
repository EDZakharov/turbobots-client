export interface IBotConfig {
    targetProfitPercent: number;
    startOrderVolumeUSDT: number;
    insuranceOrderSteps: number;
    insuranceOrderPriceDeviationPercent: number;
    insuranceOrderStepsMultiplier: number;
    insuranceOrderVolumeUSDT: number;
    insuranceOrderVolumeMultiplier: number;
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
    max?: number;
    min?: number;
}
