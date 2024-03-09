import ActiveBots from '@/app/ui/components/dashboard/main/bots/activeBots';
import BotSettings from '@/app/ui/components/dashboard/main/bots/botsSettings';

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
                <div className="col-span-2 h-[400px] dark:bg-secondary-color shadow-main ">
                    <BotSettings />
                </div>
                <div className="col-span-2  dark:bg-secondary-color shadow-main">
                    Bots notifications
                </div>
            </div>
        </div>
    );
}
