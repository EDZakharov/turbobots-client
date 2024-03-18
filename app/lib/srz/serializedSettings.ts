export default class SettingsDto {
    botId;
    targetProfitPercent;
    startOrderVolumeUSDT;
    insuranceOrderVolumeUSDT;
    insuranceOrderSteps;
    insuranceOrderVolumeMultiplier;
    insuranceOrderStepsMultiplier;
    insuranceOrderPriceDeviationPercent;

    constructor(model: any) {
        this.botId = model.botId;
        this.targetProfitPercent = model.targetProfitPercent;
        this.startOrderVolumeUSDT = model.startOrderVolumeUSDT;
        this.insuranceOrderVolumeUSDT = model.insuranceOrderVolumeUSDT;
        this.insuranceOrderSteps = model.insuranceOrderSteps;
        this.insuranceOrderVolumeMultiplier =
            model.insuranceOrderVolumeMultiplier;
        this.insuranceOrderStepsMultiplier =
            model.insuranceOrderStepsMultiplier;
        this.insuranceOrderPriceDeviationPercent =
            model.insuranceOrderPriceDeviationPercent;
    }
}
