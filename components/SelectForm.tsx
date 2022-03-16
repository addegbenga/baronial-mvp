import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Link from "next/link";
import {
  AiFillCheckCircle as CheckIcon,
  AiFillCheckCircle as SelectorIcon,
} from "react-icons/ai";

const people = [
  { name: "What are you looking for?", url: "/" },
  { name: "Farmersmarkets", url: "/local-food-directories/Farmersmarkets" },
  { name: "Devon Webb", url: "/local-food-directories/Farmersmarkets" },
  { name: "Tom Cook", url: "/local-food-directories/Farmersmarkets" },
  { name: "Tanya Fox", url: "/local-food-directories/Farmersmarkets" },
  { name: "Hellen Schmidt", url: "/local-food-directories/Farmersmarkets" },
];

export default function SelectForm() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-full lg:max-w-md lg:mx-auto">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-3.5  pl-3 pr-10 text-left bg-white border border-black cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <Link href={person.url} passHref>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                      </Link>

                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
