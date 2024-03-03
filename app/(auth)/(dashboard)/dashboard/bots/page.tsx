import ActiveBots from './components/activeBots';
import BotSettings from './components/botsSettings';

export default function Page() {
    return (
        <div className="">
            <h1>Bots</h1>
            <div className="grid grid-cols-4-custom gap-2 ">
                <div className="col-span-4   dark:bg-secondary-color">
                    <ActiveBots />
                </div>
                <div className="col-span-1  dark:bg-secondary-color"></div>
                <div className="col-span-3 dark:bg-secondary-color">
                    Bots active deals
                </div>
                <div className="col-span-2 dark:bg-secondary-color">
                    <BotSettings />
                </div>
                <div className="col-span-2  dark:bg-secondary-color">
                    Bots notifications
                </div>
            </div>
        </div>
    );
}
