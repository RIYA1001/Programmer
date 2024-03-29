import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Example() {
  return (
    <form className="mx-auto my-28 p-8 border-4 border-gray-900 rounded-2xl shadow-md size-10/12 md:size-3/4">
      <div className="space-y-4">



        {/* profile part */}

        <h1 className="text-2xl font-bold text-yellow-500">Profile</h1>
        <p className="text-sm text-red-500">
          This information will be displayed publicly so be careful what you share.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium  text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">programmer.com/</span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm "
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium  text-gray-900">
              About
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm  text-gray-600">Write a few sentences about yourself.</p>
          </div>

          <div className="col-span-full">
            <label htmlFor="photo" className="block text-sm font-medium  text-gray-900">
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="cover-photo" className="block text-sm font-medium  text-gray-900">
              Cover photo
            </label>
            <div className="mt-2 mb-6 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm  text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-green-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>


        <hr className="p-3" />



        {/* personal part */}

        <h1 className="text-2xl font-bold text-yellow-500">Personal Information</h1>
        <p className="text-sm text-red-500">Use a permanent address where you can receive mail.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8">
          <div className="">
            <label htmlFor="first-name" className="block text-sm font-medium  text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
              />
            </div>
          </div>

          <div className="">
            <label htmlFor="last-name" className="block text-sm font-medium  text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
              />
            </div>
          </div>

          <div className="">
            <label htmlFor="email" className="block text-sm font-medium  text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
              />
            </div>
          </div>

          <div className="">
            <label htmlFor="region" className="block text-sm font-medium  text-gray-900">
              Region
            </label>
            <div className="mt-2">
              <select
                id="region"
                name="region"
                autoComplete="region-name"
                className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm "
              >
                <option>Asia</option>
                <option>Africa</option>            
                <option>Antarctica</option>
                <option>Australia</option>
                <option>North America</option>
                <option>South America</option>
                <option>Europe</option>

              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="street-address" className="block text-sm font-medium text-gray-900">
              Street address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
              />
            </div>
          </div>

          <div className="">
            <label htmlFor="city" className="block text-sm font-medium  text-gray-900">
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
              />
            </div>
          </div>

          <div className="">
            <label htmlFor="region" className="block text-sm font-medium  text-gray-900">
              State / Province and Country
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
              />
            </div>
          </div>

          <div className="">
            <label htmlFor="postal-code" className="block text-sm font-medium  text-gray-900">
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block mb-7 bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
              />
            </div>
          </div>
        </div>


        <hr className="p-3" />



        {/* notification part */}

        <h1 className="text-2xl font-bold text-yellow-500">Notifications</h1>
        <p className="text-sm text-red-500">
          We will always let you know about important changes, but you pick what else you want to hear about.
        </p>

        <div className="mt-10 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold  text-gray-900">By Email</legend>
            <div className="mt-6 space-y-6">
              <div className="flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="liveLectures"
                    name="liveLectures"
                    type="checkbox"
                    className="h-4 w-4 rounded"
                  />
                </div>
                <div className="text-sm ">
                  <label htmlFor="liveLectures" className="font-medium text-gray-900">
                    Live Lectures
                  </label>
                  <p className="text-gray-500">Get notified when someones conducting a live lectures.</p>
                </div>
              </div>
              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="games"
                    name="games"
                    type="checkbox"
                    className="h-4 w-4 rounded"
                  />
                </div>
                <div className="text-sm ">
                  <label htmlFor="games" className="font-medium text-gray-900">
                    Games
                  </label>
                  <p className="text-gray-500">Get notified when new games or test appears.</p>
                </div>
              </div>
              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="notes"
                    name="notes"
                    type="checkbox"
                    className="h-4 w-4 rounded"
                  />
                </div>
                <div className="text-sm ">
                  <label htmlFor="notes" className="font-medium text-gray-900">
                    Notes
                  </label>
                  <p className="text-gray-500">Get notified when someone post a notes.</p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-semibold  text-gray-900">Push Notifications</legend>
            <p className="text-sm text-red-500">These are delivered via SMS to your mobile phone.</p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-everything" className="block text-sm font-medium  text-gray-900">
                  Everything
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-email" className="block text-sm font-medium  text-gray-900">
                  Same as email
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-nothing" className="block text-sm font-medium  text-gray-900">
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <hr />

      </div>


      {/* button part */}

      <div className="mt-6 flex justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold text-gray-900 hover:text-red-500">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 hover:text-yellow-400"
        >
          Save
        </button>
      </div>
    </form>
  )
}
