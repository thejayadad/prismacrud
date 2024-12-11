'use client';

import { createClient } from '@/lib/create-client';
import React from 'react';
import { useActionState } from 'react';
import { SubmitButton } from './submit-btn';

interface FieldErrors {
    name?: string[];
    status?: string[];
    total?: string[];
}


const Clientform = () => {
    const [state, formAction] = useActionState(createClient, null);

    const getFieldError = (field: keyof FieldErrors): string | undefined => {
        if (state?.error && 'name' in state.error) {
            // Type guard to ensure the error is of type FieldErrors
            return state.error[field]?.[0];
        }
        return undefined;
    };

    return (
        <form action={formAction}>
            {/* Name Input */}
            <div>
                <input
                    id="name"
                    name="name"
                    placeholder="Name..."
                    className={`border ${getFieldError("name") ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                    aria-invalid={!!getFieldError("name")}
                    aria-describedby="name-error"
                />
                <div id="name-error" aria-live="polite">
                    {getFieldError("name") && (
                        <p className="text-sm text-red-500 mt-2">{getFieldError("name")}</p>
                    )}
                </div>
            </div>

            {/* Status Input */}
            <div>
                <select
                    id="status"
                    name="status"
                    className={`border ${getFieldError("status") ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                    aria-invalid={!!getFieldError("status")}
                    aria-describedby="status-error"
                >
                    <option value="">Select Status</option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                </select>
                <div id="status-error" aria-live="polite">
                    {getFieldError("status") && (
                        <p className="text-sm text-red-500 mt-2">{getFieldError("status")}</p>
                    )}
                </div>
            </div>

            {/* Total Input */}
            <div>
                <input
                    id="total"
                    name="total"
                    placeholder="Total..."
                    type="number"
                    className={`border ${getFieldError("total") ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                    aria-invalid={!!getFieldError("total")}
                    aria-describedby="total-error"
                />
                <div id="total-error" aria-live="polite">
                    {getFieldError("total") && (
                        <p className="text-sm text-red-500 mt-2">{getFieldError("total")}</p>
                    )}
                </div>
            </div>

                <SubmitButton />

            {/* General Error Message */}
            {state?.error && 'message' in state.error && (
                <div aria-live="polite" className="text-red-500 mt-4">
                    <p>{state.error.message[0]}</p>
                </div>
            )}

            {/* Success Message */}
            {state?.success && (
                <div aria-live="polite" className="text-green-500 mt-4">
                    <p>Client created successfully!</p>
                </div>
            )}
        </form>
    );
};

export default Clientform;
