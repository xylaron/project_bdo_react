import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/solid";

export default function GrindInputMenu() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type="button" onClick={openModal} className="btn btn-sm rounded-md bg-white bg-opacity-100 text-sm text-black font-bold border-none hover:bg-white hover:bg-opacity-80">
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-10 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="min-w-full min-h-full rounded-lg bg-zinc-900 p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                    <div className="bg-zinc-800 rounded-lg p-3">Hello World!</div>
                  </Dialog.Title>
                  <div className="mt-2 bg-zinc-800 rounded-lg p-3">
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                    <p className="text-sm text-zinc-400">Open sesame!</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <div className="absolute top-0 right-0 p-4">
                  <button type="button" className="btn btn-sm p-0 border-none hover:opacity-80" onClick={closeModal}>
                    <XIcon className="text-white w-5 h-5" />
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
