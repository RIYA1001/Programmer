
export default function Example() {
  return (

    <div className="mx-auto mt-28 mb-12 p-8 border-4 border-gray-900 rounded-2xl shadow-md size-3/4 md:size-2/4">

      <img
        className="mx-auto h-20 w-auto"
        src='/programmer.svg'
        alt="Programmer icon"
      />
      <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
        Sign in to your account
      </h2>

      <form className="mt-10" action="#" method="POST">

        <label htmlFor="email" className="text-sm font-medium text-gray-900">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required="true"
          className="mt-2 mb-6 w-full bg-yellow-400 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        />

        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-medium text-gray-900">
            Password
          </label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-yellow-500">
              Forgot password?
            </a>
          </div>
        </div>

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required="true"
          className="mt-2 mb-6 w-full bg-yellow-400 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        />

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>

      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold text-indigo-600 hover:text-yellow-500">
          Start a 14 day free trial
        </a>
      </p>

    </div>

  )
}
