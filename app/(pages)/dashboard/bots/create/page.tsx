import BotCreationWrapper from '@/app/ui/components/dashboard/main/bots/components/creationWrapper';
import { Suspense } from 'react';

export default async function Page() {
    return (
        <div className="w-full">
            <Suspense fallback={<div>Loading...</div>}>
                <BotCreationWrapper />
            </Suspense>
        </div>
    );
}
