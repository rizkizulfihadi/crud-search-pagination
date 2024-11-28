"use client";

import { updateContact } from "@/lib/actions";
import { useActionState } from "react";
import { SubmitButton } from "@/components/button";
import type { Contact } from "@prisma/client";

const UpdateForm = ({ contact }: { contact: Contact }) => {
  const updateContactWithId = updateContact.bind(null, contact.id);
  const [state, formAction] = useActionState(updateContactWithId, null);
  console.log(state);
  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="" className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Full Name..."
            defaultValue={contact.name}
          />
        </div>
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
        </div>
        <div className="mb-5">
          <label htmlFor="" className="block text-sm font-medium text-gray-900">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Phone Number..."
            defaultValue={contact.phone}
          />
        </div>
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
        </div>
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="update" />
      </form>
    </div>
  );
};

export default UpdateForm;