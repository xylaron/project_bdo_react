import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon, PlusIcon } from "@heroicons/react/solid";
import UserInput from "./UserInput";
import Button from "../../../Components/Button";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return (
    <>
      <div>
        <Button type="button" onClick={() => setIsOpen(true)} color="green" padding="3">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={() => setIsOpen(isOpen)}>
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
                <Dialog.Panel className="min-h-full min-w-full rounded-xl bg-zinc-900 p-5 text-left align-middle shadow-xl transition-all">
                  <UserInput toggleModal={toggleModal} />
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
                <div className="absolute top-0 right-0 m-2 rounded-full bg-white bg-opacity-0 hover:bg-opacity-10">
                  <button
                    type="button"
                    className="btn btn-sm border-none p-1 hover:bg-opacity-60"
                    onClick={() => setIsOpen(false)}
                  >
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Menu;
