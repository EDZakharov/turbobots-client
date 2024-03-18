import { useFormStatus } from 'react-dom';
import { SpinSvg } from '../svg-components/svg-components';

export function FormSubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            className="w-[200px] my-8 border dark:border-gray-700 border-gray-300 p-2 rounded-md dark:hover:bg-white/5 hover:bg-secondary-color/5 flex flex-col items-center disabled:cursor-not-allowed"
            disabled={pending}
        >
            {pending ? (
                <span className="animate-pulse">
                    <SpinSvg size="24" />
                </span>
            ) : (
                <span className="">Save</span>
            )}
        </button>
    );
}
