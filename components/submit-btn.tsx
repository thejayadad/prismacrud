'use client';

import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
    defaultText?: string;
    pendingText?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
    defaultText = "Submit",
    pendingText = "Updating...",
}) => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`px-4 py-2 rounded ${
                pending
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
        >
            {pending ? pendingText : defaultText}
        </button>
    );
};
