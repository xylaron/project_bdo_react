import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon, PlusIcon } from "@heroicons/react/solid";
import UserInput from "./UserInput";
import Button from "../../../Components/Button";

export default function Menu({ updateInputData }) {
  let [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    console.log(isOpen ? "grind input window close" : "grind input window open");
  }
  return (
    <>
      <div>
        <Button
          type="button"
          onClick={toggleModal}
          colour="green-600"
          padding="3"
          content={<PlusIcon className="w-6 h-6" />}
        />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(true)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-10 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="min-w-full min-h-full rounded-xl bg-zinc-900 p-5 text-left align-middle shadow-xl transition-all">
                  <UserInput
                    toggleModal={toggleModal}
                    updateInputData={(data) => updateInputData(data)}
                  />
                </Dialog.Panel>
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="absolute top-0 right-0 p-3">
                  <button
                    type="button"
                    className="btn btn-sm p-0 border-none hover:opacity-60"
                    onClick={() => {
                      toggleModal();
                    }}
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
