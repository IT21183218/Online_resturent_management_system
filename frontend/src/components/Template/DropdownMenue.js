import React, {Fragment,useState } from 'react'
import { Menu, Transition } from "@headlessui/react";

export default function Menue(props) {

  const profileDropdown1 = [
    { name: "My profile", path: "#" },
    { name: "Request Access", path: "#22s" },   
    { name: "Logout", path: "#" },
  ];
 // eslint-disable-next-line
  const [profileDropdown, setProfileDropdown] = useState(profileDropdown1);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
 // eslint-disable-next-line
  const [user, setUser] = useState({
    name: props.userName,
    userImg:
"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"  });

  return (
    
    <div>
         <Menu as="div" className=" relative ml-3">
          <div>
            <Menu.Button className=" flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 float-right">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={user.userImg}
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="text-left text-sm absolute top-14 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-blue-950 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/user"
                    className={
                      "block px-4 py-2 text-sm text-gray-100"
                    }
                  >
                    <div className="flex  items-center space-x-2">
                      <img
                        className="h-9 w-9 rounded-full object-cover"
                        src={user.userImg}
                        alt="userImage"
                      />
                      <div>{user.name}</div>
                    </div>
                  </a>
                )}
              </Menu.Item>
              <div className="border border-b-0 border-gray-400"/>

              {profileDropdown.map((item, idx) => {
                return (
                  <Menu.Item key={item.name+(idx++)}>
                    {({ active }) => (
                      <a
                        href={item.path}
                        className={classNames(
                          active ? "bg-blue-900" : "",
                          "block px-4 py-2 text-sm text-gray-100"
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                );
              })}

            </Menu.Items>
          </Transition>
        </Menu>
    </div>
  )
}
