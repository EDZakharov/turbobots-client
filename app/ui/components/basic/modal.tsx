'use client';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export function Modal({
    submitOnClick,
    cancelOnClick,
    setConfirmAction,
    modalHeaderText,
    modalSpanText,
    buttonSubmitText,
    buttonCancelText,
    svgComponent,
}: {
    submitOnClick?: () => void;
    cancelOnClick?: () => void;
    setConfirmAction: Dispatch<SetStateAction<boolean>>;
    svgComponent?: ReactNode;
    modalHeaderText?: string;
    modalSpanText?: string;
    buttonSubmitText?: string;
    buttonCancelText?: string;
}) {
    return (
        <div className="fixed inset-0 overflow-y-auto z-40">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                >
                    <div className="z-40 absolute w-full min-h-screen inset-0  bg-white dark:bg-secondary-color/90 opacity-75 "></div>
                </div>
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div className="inline-block align-bottom dark:bg-gray-600 rounded-lg text-left overflow-hidden shadow-studydesk transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="dark:bg-gray-600 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full dark:bg-gray-300 bg-gray-700 sm:mx-0 sm:h-10 sm:w-10">
                                {svgComponent}
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3
                                    className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300"
                                    id="modal-title"
                                >
                                    {modalHeaderText}
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500 dark:text-gray-300">
                                        {modalSpanText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-gray-600 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={() => {
                                submitOnClick && submitOnClick();
                                setConfirmAction(false);
                            }}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border dark:border-gray-700 border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-secondary-color/10 dark:hover:bg-white/5 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-all"
                        >
                            {buttonSubmitText}
                        </button>
                        <button
                            onClick={() => {
                                cancelOnClick && cancelOnClick();
                                setConfirmAction(false);
                            }}
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border dark:border-gray-700 border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-secondary-color/10 dark:hover:bg-white/5 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-all"
                        >
                            {buttonCancelText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
