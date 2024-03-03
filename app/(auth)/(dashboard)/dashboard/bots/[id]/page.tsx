import SettingsForm from './components/settingsForm';

export default function Page({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col">
            <span className="text-xl mx-5">Bot settings</span>
            <div className="flex">
                <div className="flex-initial">
                    <SettingsForm />
                </div>
            </div>
        </div>
    );
}
