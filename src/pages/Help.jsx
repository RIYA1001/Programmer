import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="center mx-auto mt-28 mb-12 grid grid-cols-1 sm:grid-cols-2 border-4 border-gray-900 rounded-2xl shadow-md size-10/12 md:size-9/12">

      <div className="bg-gray-900 text-yellow-500 p-6">

        <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2><br />
        <p className="pb-2">
          Aute magna irure deserunt veniam aliqua magna enim voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ducimus. Recusandae quis aut voluptate nihil!
        </p>

        <div className="flex px-2 pt-6">
          <img className="h-9 w-9" src='src\assets\call.png' />
          <p className="pl-5">
            91-1234567890
          </p>
        </div>
        <div className="flex px-2 pt-6">
          <img className="h-9 w-9" src='src\assets\mail.png' />
          <p className="pl-5">
            ashkie@dragon.com
          </p>
        </div>
        <div className="flex px-2 pt-6">
          <img className="h-9 w-9" src='src\assets\location.png' />
          <p className="pl-5">
            108 Side Road, Center Area<br/>
            Gujarat, India<br/>
            000000
          </p>
        </div>

      </div>


      <form action="#" method="POST" className="size-auto p-6 text-yellow-500">

        <label htmlFor="first-name" className="text-sm font-semibold">
          First name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          required="true"
          className="mt-2.5 placeholder-slate-80 bg-white w-full rounded-md px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        />
        <br />
        <br />

        <label htmlFor="last-name" className="text-sm font-semibold">
          Last name
        </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          autoComplete="family-name"
          required="true"
          className="mt-2.5 placeholder-slate-80 bg-white w-full rounded-md px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        />
        <br />
        <br />


        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required="true"
          className="mt-2.5 placeholder-slate-80 bg-white w-full rounded-md px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        />
        <br />
        <br />


        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required="true"
          defaultValue={''}
          className="mt-2.5 placeholder-slate-400 bg-white w-full rounded-md px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        />
        <br />


        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={classNames(
                agreed ? 'bg-yellow-500' : 'bg-gray-500',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              )}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={classNames(
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          <Switch.Label className="text-sm leading-6 text-gray-400">
            By selecting this, you agree to our{' '}
            <a href="#" className="font-semibold text-yellow-500">
              privacy&nbsp;policy
            </a>
            .
          </Switch.Label>
        </Switch.Group>


        <button
          type="submit"
          className=" mt-6 w-full rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500"
        >
          Let&#39;s talk
        </button>

      </form>

    </div>
  )
}
