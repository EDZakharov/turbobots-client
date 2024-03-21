import { useFormStatus } from 'react-dom';
import { SpinSvg } from '../svg-components/svg-components';

export function FormSubmitButton({ isValidForm }: { isValidForm: boolean }) {
    const { pending } = useFormStatus();
    return (
        <button
            className={`w-[200px] border ${
                isValidForm
                    ? 'dark:border-gray-700 border-gray-300'
                    : 'dark:border-red-400 border-red-400'
            }  p-2 rounded-md dark:hover:bg-white/5 hover:bg-secondary-color/5 flex flex-col items-center disabled:cursor-not-allowed transition-all`}
            disabled={isValidForm ? (pending ? true : false) : true}
        >
            {pending ? (
                <span className="animate-pulse">
                    <SpinSvg size="24" />
                </span>
            ) : (
                <span className="dark:text-gray-300">Save</span>
            )}
        </button>
    );
}
